import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Rescue() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

      // Calculate the coordinates for the additional markers
      const marker1 = calculatePointCoordinates(currentLocation.coords, 5, Math.random() * 360);
      const marker2 = calculatePointCoordinates(currentLocation.coords, 10, Math.random() * 360);
      const marker3 = calculatePointCoordinates(currentLocation.coords, 15, Math.random() * 360);
      setMarkers([marker1, marker2, marker3]);
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
      {location && markers.length > 0 ? (
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
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
            pinColor="red"
          />
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker}
              title={`Rescue Center ${index + 1}`}
              description={`Distance: ${index + 1}0 km`}
              pinColor="green"
            />
          ))}
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
