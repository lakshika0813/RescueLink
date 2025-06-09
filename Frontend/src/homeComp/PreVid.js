import React, { useState, useCallback, useRef } from "react";
import { Text, View, StyleSheet,ImageBackground } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Background from "../components/Background";
import { white } from "../components/Constants";

export default function PreVid() {
  
  return (
    <ImageBackground source={require("../assets/2.jpg")} style={{ height: '100%',width:'100%' }}>
      <View>
      <YoutubePlayer
        height={200}
        play={true}
        videoId={"UmiGvOha7As"}
        webViewStyle={styles.player}
      />
      <Text style={styles.text}>
        Prepare Yourself From Calamity Situation !!
      </Text>
    </View>
        </ImageBackground>
    
  );
}
const styles = StyleSheet.create({
  player: {
    alignSelf: "stretch",
    margin:20,
    marginHorizontal:40,
    marginVertical:30,
  },
  text:{
    fontSize:50,
    color:white,
  }
});