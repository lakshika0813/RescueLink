import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon component

export default function Com({ bgColor, comLabel, textColor, destination, iconName }) {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object

  const handlePress = () => {
    navigation.navigate(destination);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: bgColor,
        borderRadius: 25,
        alignItems: 'center',
        width: 110,
        height:150,
        padding: 10,
        marginVertical: 10,
        marginHorizontal:3,
        justifyContent: 'center' // Added to align icon and text horizontally
      }}>
      {/* Render the icon */}
      <Icon name={iconName} size={20} color={textColor} style={{ margin: 10 }} />
      {/* Wrap the comLabel text string inside a <Text> component */}
      <Text style={{ color: textColor, fontSize: 15, fontWeight: 'bold' }}>
        {comLabel}
      </Text>
    </TouchableOpacity>
  );
}
