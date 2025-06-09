import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Background from './components/Background';
import Btn from './components/Btn';
import { orange, yellowOrange } from './components/Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={styles.container}>
        {/* Top Heading */}
        <Text style={styles.heading}>RescueLink</Text>

        {/* App Icon */}
        <Image
          source={require('./assets/icon.png')}
          style={styles.img}
          testID="home-image"
        />

        {/* Subheading DAM */}
        <Text style={styles.subheading}>DAM</Text>

        {/* Buttons */}
        <Btn
          bgColor={orange}
          textColor='white'
          btnLabel="Login"
          Press={() => props.navigation.navigate("Login")}
        />
        <Btn
          bgColor={yellowOrange}
          textColor='white'
          btnLabel="Signup"
          Press={() => props.navigation.navigate("Signup")}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginTop: 60,
    alignItems: 'center',
  },
  heading: {
    fontSize: 42,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  img: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 32,
    color: 'white',
    marginBottom: 30,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 2,
  },
});

export default Home;
