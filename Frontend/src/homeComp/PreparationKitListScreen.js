import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Background from '../components/Background';
import { orange, white, yellowOrange } from '../components/Constants';

const PreparationKitListScreen = ({ route }) => {
  // Extract the disaster name from the route parameters
  const { disaster } = route.params;

  // Function to fetch preparation kit list based on the selected disaster (Replace with your own data fetching logic)
  const fetchPreparationKitList = (disaster) => {
    // Implement logic to fetch preparation kit list based on the selected disaster
    // This can be fetched from an API or from local data
    // For demonstration, I'm returning a sample list
    switch (disaster) {
      case 'Earthquake':
        return ['Water', 'Food', 'First Aid Kit', 'Flashlight'];
      case 'Tsunami':
        return ['Evacuation Plan', 'Emergency Supplies', 'Life Jackets', 'Whistle'];
      case 'Flood':
        return ['Sandbags', 'Emergency Shelter', 'Boat', 'Life Jacket'];
      case 'Cyclone':
        return ['Battery-powered Radio', 'Medications', 'Non-perishable Food', 'Cash'];
      case 'Tornado':
        return ['Basement or Storm Shelter', 'Helmet', 'Portable Weather Radio', 'Emergency Supplies'];
      case 'Volcanic Eruption':
        return ['Face Masks', 'Goggles', 'Long-sleeved Clothing', 'Essential Documents'];
      case 'Landslide':
        return ['Evacuation Route Map', 'Emergency Kit', 'Portable Water Filter', 'Whistle'];
      case 'Drought':
        return ['Water Storage Containers', 'Drought-resistant Seeds', 'Water Purification Tablets', 'Sunscreen'];
      case 'Wildfire':
        return ['Emergency Evacuation Plan', 'Protective Clothing', 'Fire Extinguisher', 'Emergency Supplies'];
      case 'Lightning Strike':
        return ['Indoor Shelter', 'Avoid Water Bodies', 'Portable Weather Radio', 'First Aid Kit'];
      case 'Epidemic or Pandemic':
        return ['Face Masks', 'Hand Sanitizer', 'Medications', 'Non-perishable Food'];
      case 'Industrial Accidents':
        return ['Gas Masks', 'Safety Goggles', 'Protective Clothing', 'Emergency Escape Route Map'];
      case 'Oil Spills':
        return ['Absorbent Materials', 'Protective Clothing', 'Oil Skimmer', 'Cleanup Supplies'];
      case 'Building Collapse':
        return ['Rescue Tools', 'First Aid Kit', 'Emergency Whistle', 'Flashlight'];
      case 'Transportation Accidents':
        return ['Emergency Evacuation Plan', 'First Aid Kit', 'Emergency Contact Information', 'Portable Weather Radio'];
      case 'Structural Failures':
        return ['Evacuation Plan', 'Safety Helmets', 'Rescue Equipment', 'First Aid Kit'];
      case 'Urban Fires':
        return ['Fire Extinguisher', 'Fire Escape Plan', 'Emergency Water Supply', 'Emergency Contact Information'];
      case 'Civil Unrest or Riots':
        return ['Stay Informed', 'Avoid Crowded Areas', 'Emergency Supplies', 'Emergency Contact Information'];
      case 'Hazardous Material Incidents':
        return ['Gas Masks', 'Chemical Protective Clothing', 'Emergency Decontamination Procedures', 'Evacuation Plan'];
      case 'Power Outages or Grid Failures':
        return ['Emergency Lighting', 'Battery-powered Radio', 'Generator', 'Non-perishable Food'];
      case 'Biological Warfare':
        return ['Protective Clothing', 'Gas Masks', 'Decontamination Supplies', 'Medical Supplies'];
      default:
        return [];
    }
  };

  // Fetch preparation kit list for the selected disaster
  const preparationKitList = fetchPreparationKitList(disaster);

  return (
    
      <ImageBackground source={require("../assets/2.jpg")} style={{ height: '100%',width:'100%' }}>
      <View style={styles.container}>
      <Text style={styles.heading}>Preparation Kit for {disaster}</Text>
      <View style={styles.listContainer}>
        {preparationKitList.map((item, index) => (
          <Text key={index} style={styles.item}>{item}</Text>
        ))}
      </View>
    </View>
        </ImageBackground>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom:430
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    alignItems: 'flex-start',
  },
  item: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default PreparationKitListScreen;
