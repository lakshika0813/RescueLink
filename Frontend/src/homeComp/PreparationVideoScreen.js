// import React, { useState, useCallback, useRef } from 'react';
// import { View, StyleSheet, Button, Alert } from 'react-native';
// import YoutubePlayer from 'react-native-youtube-iframe';


// const PreparationVideoScreen = ({ route }) => {
//   // Extract the disaster name from the route parameters
//   const { disaster } = route.params;

//   // Function to fetch preparation kit list based on the selected disaster (Replace with your own data fetching logic)
//   const fetchPreparationVideoList = (disaster) => {
//     // Implement logic to fetch preparation kit list based on the selected disaster
//     // This can be fetched from an API or from local data
//     // For demonstration, I'm returning a sample list
//     const empty='Not Available'
  //   const [playing, setPlaying] = useState(false);

  // const onStateChange = useCallback((state) => {
  //   if (state === "ended") {
  //     setPlaying(false);
  //     Alert.alert("video has finished playing!");
  //   }
  // }, []);

  // const togglePlaying = useCallback(() => {
  //   setPlaying((prev) => !prev);
  // }, []);
//     switch (disaster) {
//       case 'Earthquake':
//         return(
//           <View>
//             <YoutubePlayer
//                height={300}
//                play={playing}
//                videoId={"iee2TATGMyI"}
//                onChangeState={onStateChange}
//             />
//            <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
//           </View>
//           );
//       case 'Tsunami':
//         return '';
//       case 'Flood':
//         return '';
//       case 'Cyclone':
//         return '';
//       case 'Tornado':
//         return '';
//       case 'Volcanic Eruption':
//         return '';
//       case 'Landslide':
//         return '';
//       case 'Drought':
//         return '';
//       case 'Wildfire':
//         return '';
//       case 'Lightning Strike':
//         return '';
//       case 'Epidemic or Pandemic':
//         return '';
//       case 'Industrial Accidents':
//         return '';
//       case 'Oil Spills':
//         return '';
//       case 'Building Collapse':
//         return '';
//       case 'Transportation Accidents':
//         return '';
//       case 'Structural Failures':
//         return '';
//       case 'Urban Fires':
//         return '';
//       case 'Civil Unrest or Riots':
//         return '';
//       case 'Hazardous Material Incidents':
//         return '';
//       case 'Power Outages or Grid Failures':
//         return '';
//       case 'Biological Warfare':
//         return '';
//       default:
//         return [];
//     }
//   };

//   // Fetch preparation kit list for the selected disaster
//   const preparationVideoList = fetchPreparationVideoList(disaster);

//   return preparationVideoList;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//   },
 
// });

// export default PreparationVideoScreen;
