import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground ,Image} from 'react-native';

export default function SectionFour() {
  return (
  <View style={styles.container}>
    
  <ImageBackground 
  source={require('../assets/sectiontwoimg.png')} 
  style={styles.box}
>
 </ImageBackground>
 <Image source={require('../assets/secfourimg.png')}   style={styles.sec1}></Image>
 <View style={styles.submit}>

<Text style={styles.submitbtn}>Apply now</Text>

  </View>
 <Image source={require('../assets/socialicon.png')}   style={styles.sec2}></Image>

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
        bottom:100,
        left:22,
      },
    sec1:{
        width:195,
        height:90,
        position:'absolute',
        left:100,
        right:50,
        top:33
    },
    sec2:{
        width:186.06,
        height:34,
        position:'absolute',
        left:100,
        right:30,
        bottom:50
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
