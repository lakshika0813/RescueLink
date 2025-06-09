import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Footer from './nav/Footer'; // Import Footer component

const MainHome = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Background>
        <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
          <Text style={{ color: 'white', fontSize: 64 }}>Welcome</Text>
          <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>To App</Text>
          <Btn bgColor={green} textColor='white' btnLabel="Go Back to Login" Press={() => navigation.navigate("Login")} />
        </View>
      </Background> */}
      
      {/* Render Footer component */}
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({})

export default MainHome;
