import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import MainHome from './src/MainHome';
import Signup from './src/Signup'; // Modified import
import Login from './src/Login';
import LocationScreen from './src/screens/LocationScreen';
import PreKit from './src/homeComp/PreKit';
import PreparationKitListScreen from './src/homeComp/PreparationKitListScreen';
import PreVid from './src/homeComp/PreVid';
import Schemes from './src/homeComp/Schemes';
import SchemeDetailsScreen from './src/homeComp/SchemeDetailsScreen';
import Rebuilding from './src/homeComp/Rebuilding';
import CallScreen from './src/screens/CallScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import AlertNotificationScreen from './src/screens/AlertNotificationScreen';
import Red from './src/homeComp/Red';
import Safe from './src/homeComp/Safe';
import Rescue from './src/homeComp/Rescue';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false } } initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainHome" component={MainHome} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="PreKit" component={PreKit} />
        <Stack.Screen name="PreparationKitListScreen" component={PreparationKitListScreen} />
        <Stack.Screen name="PreVid" component={PreVid} />
        <Stack.Screen name="Schemes" component={Schemes} />
        <Stack.Screen name="SchemeDetailsScreen" component={SchemeDetailsScreen} />
        <Stack.Screen name="Rebuilding" component={Rebuilding} />
        <Stack.Screen name="CallScreen" component={CallScreen} />
        <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
        <Stack.Screen name="AlertNotificationScreen" component={AlertNotificationScreen} />
        <Stack.Screen name="Red" component={Red} />
        <Stack.Screen name="Safe" component={Safe} />
        <Stack.Screen name="Rescue" component={Rescue} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
