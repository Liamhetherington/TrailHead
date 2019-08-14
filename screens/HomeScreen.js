import React from 'react'
import { Text, ImageBackground, StyleSheet, View, Image } from 'react-native';
const HomeScreen = () => (
  <ImageBackground source={require('.././images/falls.jpg')} style={{width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
    <View style={styles.logo}>
     <Image source={require('.././images/TrailHeadBlack.png')} style={{ height: 200, width: 200}}/>
    </View>
    <Text style={styles.welcome}>Hello from the home screen!</Text>
  </ImageBackground>
)

const styles = StyleSheet.create ({
 welcome: {
  color: 'white',
  fontSize: 20,
 },
 logo: {
  marginLeft: 1,
  marginTop: 1,
 }
});

export default HomeScreen