import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Safe() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [circleCenter, setCircleCenter] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

      // Calculate the coordinates for the center of the circle
      const circleCenter = calculatePointCoordinates(currentLocation.coords, 10, Math.random() * 360);
      setCircleCenter(circleCenter);
    })();
  }, []);

  // Function to calculate coordinates for a point at a certain distance and bearing from a given location
  const calculatePointCoordinates = (currentLocation, distance, bearing) => {
    const { latitude, longitude } = currentLocation;
    const radius = 6371; // Earth's radius in kilometers

    const lat1 = (Math.PI * latitude) / 180;
    const lon1 = (Math.PI * longitude) / 180;
    const angularDistance = distance / radius;

    const lat2 = Math.asin(Math.sin(lat1) * Math.cos(angularDistance) +
                           Math.cos(lat1) * Math.sin(angularDistance) * Math.cos(bearing));
    const lon2 = lon1 + Math.atan2(Math.sin(bearing) * Math.sin(angularDistance) * Math.cos(lat1),
                                   Math.cos(angularDistance) - Math.sin(lat1) * Math.sin(lat2));

    return {
      latitude: (180 * lat2) / Math.PI,
      longitude: (180 * lon2) / Math.PI,
    };
  };

  return (
    <View style={styles.container}>
      {location && circleCenter ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
        >
          <Circle
            center={circleCenter}
            radius={5000} // Radius in meters (5km)
            fillColor="rgba(0, 0, 255, 0.3)" // Blue color with 30% opacity
            strokeColor="rgba(0, 0, 255, 0.5)" // Blue color with 50% opacity
          />
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
          />
        </MapView>
      ) : (
        <Text>{errorMsg || 'Fetching location...'}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
