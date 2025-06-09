import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons

// Screens
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';
import WeatherScreen from '../screens/WeatherScreen';
import CallScreen from '../screens/CallScreen';

// Screen names
const homeName = "Home";
const locationName = "Location";
const weatherName = "Weather";
const callName ="Call"

const Tab = createBottomTabNavigator();

function Footer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 70 }
      }}>

      <Tab.Screen 
        name={homeName} 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} /> // Using FontAwesome icon for home
          ),
        }}
      />
      <Tab.Screen 
        name={locationName} 
        component={LocationScreen}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-marker" size={size} color={color} /> // Using FontAwesome icon for location
          ),
        }}
      />
      <Tab.Screen 
        name={weatherName} 
        component={WeatherScreen}
        options={{
          tabBarLabel: 'Weather',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cloud" size={size} color={color} /> // Using FontAwesome icon for weather
          ),
        }}
      />
      <Tab.Screen 
        name={callName} 
        component={CallScreen}
        options={{
          tabBarLabel: 'Call',
          tabBarIcon: ({ color, size }) => (
            <Icon name="phone" size={size} color={color} /> // Using FontAwesome icon for call
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default Footer;
