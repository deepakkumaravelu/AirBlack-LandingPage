import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Herosection from './components/Herosection';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
    <ImageBackground 
  source={require('./assets/image.png')} 
  style={styles.box}
>
 </ImageBackground>
    <Herosection/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  box: {
    width: '100%',
    // width: 375,
    height: 124,
    backgroundColor: '#000000',
  },
});
