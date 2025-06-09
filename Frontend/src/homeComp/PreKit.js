import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import DisasterList from '../components/DisasterList';
import Background from '../components/Background';
const PreKit = ({ navigation }) => {
  return (
    
      <ImageBackground source={require("../assets/9.jpg")} style={{ height: '100%',width:'150%' }}>
      <View style={styles.container}>
      <DisasterList navigation={navigation} screenName="PreparationKitListScreen" />
    </View>
        </ImageBackground>
      
    
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PreKit;
