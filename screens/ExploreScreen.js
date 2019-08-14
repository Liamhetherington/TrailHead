import React from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native';
const ExploreScreen = () => (
  <ImageBackground source={require('.././images/background.jpg')} style={{width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={styles.welcome}>Hello from the Explore screen!</Text>
  </ImageBackground>
)

const styles = StyleSheet.create ({
 welcome: {
  color: 'white',
  fontSize: 20,
 },
});

export default ExploreScreen