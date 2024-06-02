import React, { useState } from 'react';
import { StyleSheet, Image, View, ImageBackground ,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Herosection from './components/Herosection';
import Sectiontwo from './components/Sectiontwo';
import SectionFour from './components/SectionFour';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
    <ImageBackground 
  source={require('./assets/image.png')} 
  style={styles.box}
>
 </ImageBackground>
    <Herosection/>
    <Sectiontwo/>
    <View style={styles.box1}>
    <Image source={require('./assets/sectionthreewholeimg.png')} 
  style={styles.box12}
>
 </Image>
 </View>
 <SectionFour/>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  box1:{
    width: 327,
    width:'100%',
    height:416, 
    // paddingTop: 30,
    // paddingRight: 24,
    // paddingBottom: 30,
    // paddingLeft: 24,
    marginTop:10
  },
  box12:{
    width:'100%',
    height:416
  },
  box: {
    width: '100%',
    // width: 375,
    height: 124,
    backgroundColor: '#000000',
  },
});
