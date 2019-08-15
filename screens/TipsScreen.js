import React from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native';
const TipsScreen = () => (
  <ImageBackground source={require('.././images/goldenears.jpg')} style={{width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={styles.welcome}>Here are some tips</Text>
  </ImageBackground>
)

const styles = StyleSheet.create ({
 welcome: {
  color: 'white',
  fontSize: 20,
 },
});

export default TipsScreen