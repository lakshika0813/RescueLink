// ✅ Complete, updated AlertNotificationScreen.js file
import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  Button,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

// Notification handler setup
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// UI for each notification item
const NotificationItem = ({ notification }) => {
  const { title, body } = notification.request.content;
  return (
    <TouchableOpacity onPress={() => Alert.alert('Notification', body)}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
        <Text>{body}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function AlertNotificationScreen() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notifications, setNotifications] = useState([]);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      if (token) setExpoPushToken(token);
    });

    Notifications.getPresentedNotificationsAsync().then(presented => {
      setNotifications(presented);
    });

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotifications(prev => [...prev, notification]);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      if (notificationListener.current) Notifications.removeNotificationSubscription(notificationListener.current);
      if (responseListener.current) Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <ImageBackground source={require("../assets/9.jpg")} style={{ height: '100%', width: '100%' }}>
      <View style={{ flex: 1, paddingTop: 60 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Notification Inbox</Text>
        {notifications.map((notification, index) => (
          <NotificationItem key={notification.request.identifier || index} notification={notification} />
        ))}
        <View style={{ padding: 20 }}>
          <Button
            title="Disaster's Alerts Ready To Go"
            onPress={async () => {
              await schedulePushNotifications();
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

// Schedule example notifications
async function schedulePushNotifications() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Disaster Alert",
      body: 'Flood Is Almost To Arrive',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hurry Up!!",
      body: 'Pack your bags with necessary essentials. We need to leave now.',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 10 },
  });
}

// Register for push notifications and handle permissions
async function registerForPushNotificationsAsync() {
  let token;

  try {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert('Push notification permission not granted');
        return;
      }

      // ✅ Your actual Expo project ID from EAS dashboard
      token = (await Notifications.getExpoPushTokenAsync({
        projectId: '08618913-106f-4b68-bc40-641eee7941e4', // Replace this line with real project ID
      })).data;

      console.log("Expo Push Token:", token);
    } else {
      Alert.alert('Push notifications require a physical device.');
    }
  } catch (err) {
    console.error('Error getting Expo push token:', err);
  }

  return token;
}
