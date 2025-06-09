import React from 'react';
import { View, Text, StyleSheet,ScrollView, ImageBackground } from 'react-native';
import Background from '../components/Background';

const SchemeDetailsScreen = ({ route }) => {
  // Extract the scheme data from the route parameters
  const { scheme } = route.params;

  return (
    
      <ImageBackground source={require("../assets/2.jpg")} style={{ height: '100%',width:'100%' }}>
      <View style={styles.container}>
      <Text style={styles.title}>{scheme.name}</Text>
      <Text style={styles.details}>{scheme.details}</Text>
      <Text style={styles.applicationProcedure}>{scheme.applicationProcedure}</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',
  },
  details: {
    fontSize: 18,
    marginBottom: 10,
    color:'white'
  },
  applicationProcedure: {
    fontSize: 16,
    color:'white'
  },
});

export default SchemeDetailsScreen;
