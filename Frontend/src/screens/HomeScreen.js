import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import Com from '../components/Com';
import { white, darkGreen, green, transparent } from '../components/Constants';
import Background from '../components/Background';


export default function HomeScreen({ navigation }) {
  const handleAlertPress = () => {
    navigation.navigate('AlertNotificationScreen');
  };
  return (
    <Background>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} screenOptions={{ headerShown: false }}>
      
  
      <View style={{alignItems: 'center', width: 100,justifyContent: 'center'}}>
      {/* Your home screen content here */}
      <Button title="alert"  onPress={handleAlertPress} />
    </View>
    <View style={{ flexDirection: 'row',justifyContent: 'space-evenly',marginRight: 1}}>
    <Com navigation={navigation} bgColor={transparent} comLabel="Preparation Kits" textColor={white} destination="PreKit" iconName="medkit" />
      <Com navigation={navigation} bgColor={transparent}  comLabel="Preparation Video" textColor={white} destination="PreVid" iconName="video-camera" />
      <Com navigation={navigation} bgColor={transparent}  comLabel="Disaster Updates" textColor={white} destination="AlertNotificationScreen" iconName="lightbulb-o" />
    </View>
    <View style={{ flexDirection: 'row',justifyContent: 'space-evenly',marginRight: 1}}>
    <Com navigation={navigation} bgColor={transparent}  comLabel="Safe Zones" textColor={white} destination="Safe" iconName="flag-checkered" />
      <Com navigation={navigation} bgColor={transparent}  comLabel="Red Zones" textColor={white} destination="Red" iconName="odnoklassniki-square" />
      <Com navigation={navigation} bgColor={transparent}  comLabel="Rescue Centers" textColor={white} destination="Rescue" iconName="bandcamp" />
      
    </View>
    <View style={{ flexDirection: 'row',justifyContent: 'space-evenly',marginRight: 140}}>
    <Com navigation={navigation} bgColor={transparent}  comLabel="Schemes" textColor={white} destination="Schemes" iconName="list-alt" />
      <Com navigation={navigation} bgColor={transparent}  comLabel="Rebuilding" textColor={white} destination="Rebuilding" iconName="building"/>
    </View>
      
      
    </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});