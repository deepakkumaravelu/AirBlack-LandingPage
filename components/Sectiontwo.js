import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground ,Image} from 'react-native';

export default function Sectiontwo() {
  return (
  <View style={styles.container}>
    
  <ImageBackground 
  source={require('../assets/sectiontwoimg.png')} 
  style={styles.box}
>
 </ImageBackground>
 <Image source={require('../assets/sectwo1.png')}   style={styles.sec1}></Image>
 <Image source={require('../assets/secthreeimg.png')}   style={styles.sec2}></Image>
 <View style={styles.submit}>

<Text style={styles.submitbtn}>Apply now</Text>

  </View>
  </View>
  
  );
}

const styles = StyleSheet.create({
    submitbtn:{
        fontWeight:'600',
        color:'#ffffff'
      },
      submit:{
        width: 327,
        height: 36,
        paddingTop: 9.09,
        paddingRight: 113.36,
        paddingBottom: 9.11,
        paddingLeft: 120.36,
        borderRadius: 4,
        backgroundColor:'#E54988',
        margin:10,
        position:'absolute',
        bottom:5,
        left:22,
      },
    sec1:{
        width:327,
        height:60,
        position:'absolute',
        left:25,
        right:25,
        top:33
    },
    sec2:{
        width:327,
        height:76.14,
        position:'absolute',
        left:35,
        right:30,
        top:125
    },
    box:{
        width: '100%',
        // width: 375,
        height: 360,
        position:'relative'
    },
 container:{
    width: 375,
    width:'100%',
    height: 296.14,
    // paddingTop: 30,
    // paddingRight: 24,
    // paddingBottom: 30,
    // paddingLeft: 24,
    backgroundColor:'#000000',


 }
});
