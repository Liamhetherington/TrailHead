import React from 'react'
import { Text, ImageBackground, StyleSheet, View, Image } from 'react-native';
import MapView from 'react-native-maps';

const PlanScreen = () => (
  <ImageBackground source={require('.././images/gorge.jpg')} style={{width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
    <View>
     <Image source={require('.././images/TrailHeadWhite.png')} style={{ height: 400, width: 400}}/>
     <MapView
        initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
       }}
     />
    </View>
  </ImageBackground>
)

const styles = StyleSheet.create ({
 welcome: {
  color: 'white',
  fontSize: 20,
 },
});

export default PlanScreen