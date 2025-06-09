import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { transparent, white } from './Constants';

const DisasterList = ({ navigation, screenName }) => {
  // Define your list of disasters
  const disasters = [
    'Earthquake',
    'Tsunami',
    'Flood',
    'Cyclone',
    'Tornado',
    'Volcanic Eruption',
    'Landslide',
    'Drought',
    'Wildfire',
    'Lightning Strike',
    'Epidemic or Pandemic',
    'Industrial Accidents',
    'Oil Spills',
    'Building Collapse',
    'Transportation Accidents',
    'Structural Failures',
    'Urban Fires',
    'Civil Unrest or Riots',
    'Hazardous Material Incidents',
    'Power Outages or Grid Failures',
    'Biological Warfare'

    // Add more disasters as needed
  ];

  // Function to handle navigation to the specified screen for a specific disaster
  const handleDisasterPress = (disasterName) => {
    // Navigate to the specified screen for the selected disaster
    navigation.navigate(screenName, { disaster: disasterName });
  };

  // Render item function for FlatList
  const renderDisasterItem = ({ item }) => (
    <TouchableOpacity
      style={styles.disasterItem}
      onPress={() => handleDisasterPress(item)}
    >
      <Text style={styles.disasterItemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={disasters}
        renderItem={renderDisasterItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:180,

  },
  listContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  disasterItem: {
    backgroundColor: transparent,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    width: 350,
    alignItems: 'center',
    borderRadius: 5,
  },
  disasterItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:white,
  },
});

export default DisasterList;
