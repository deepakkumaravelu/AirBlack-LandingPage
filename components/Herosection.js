import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image,TextInput } from "react-native";
import * as Font from "expo-font";
export default function Herosection() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "FONTSPRING DEMO - Roca One Rg": require("../assets/fonts/Fontspring-DEMO-rocaone-rg-iF663c83c48c4b5.otf"),
        "Proximo NOVA Rg":require("../assets/fonts/Mark Simonson  Proxima Nova Regular.otf"),
        "pingfangsc":require("../assets/fonts/pingfangsc.ttf")
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        {fontLoaded && (
          <Text style={styles.herotext}>
            Professional Online{"\n"}Makeup Course
          </Text>
        )}
      </View>
      <View style={styles.ratebox}>
        <Image
          source={require("../assets/herosectionimg.png")}
          style={styles.image}
        />
        <Image source={require("../assets/rating.png")} style={styles.rating} />
      </View>
      {fontLoaded&&(
      <View style={styles.pointbox}>
      
       <Text style={styles.litext}><Image  source={require("../assets/tick.png") }style={styles.tick}></Image>  India’s No.1 Online Makeup Course</Text>
       <Text style={styles.litext}><Image  source={require("../assets/tick.png") }style={styles.tick}></Image>  Learn by LIVE Do-it-Together Classes</Text>
       <Text style={styles.litext}><Image  source={require("../assets/tick.png") }style={styles.tick}></Image>  Unlimited Practise Session to master skills</Text>

    </View>
   
    )}
     <View style={styles.formcomp}>
      <View style={styles.formframe}>
        {fontLoaded&&(
        <Text style={styles.formtitle}>FILL THE FORM BELOW TO ENQUIRE</Text>)}
      </View>
      <View style={styles.form}>
          {fontLoaded&&(
          <View style={styles.content}>
          <View style={styles.frame4}>
          <Text style={styles.frame4t}>*Enter your name</Text>
          <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Eg. Aneesha Mehra"
      />
          </View>
          <View style={styles.frame6}>
          <Text style={styles.frame6t}>*Enter your WhatsApp Number</Text>
          <View>
          
            <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Eg. 0000000000"
      />
      </View>
          </View>
          <View style={styles.frame8}>
          
          </View>
          <View style={styles.frame9}>
          
          </View>
          <View style={styles.frame10}>
          
          </View>
          
          </View>)}
          <View style={styles.submit}></View>
      </View>
      </View></View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    width: "100%",
    height: 670.4,
    paddingTop: 20,
    paddingRight: 24,
    paddingBottom: 30,
    paddingLeft: 24,
    backgroundColor: "#0F1014",
    marginBottom:7.08,
  },
  textbox: {
    width: 327,
    height: 60,
    marginBottom: 7.08,
  },
  herotext: {
    fontFamily: "FONTSPRING DEMO - Roca One Rg",
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 30,
    textAlign: "left",
    color: "#ffffff",
  },
  ratebox: {
    width: 327,
    height: 24.22,
    position: "relative",
  },
  image: {
    width: 166.16,
    height: 24.22,
    padding: 5.11,
    paddingHorizontal: 11.08,
    paddingVertical: 5.11,
    marginBottom: 7, // Gap between components
    borderRadius: 5,
    borderTopRightRadius: 0, // Top right border radius set to 0
    borderBottomRightRadius: 0, // Bottom right border radius set to 0
  },
  rating: {
    width: 83,
    height: 15.99,
    marginBottom: 4,
    position: "absolute",
    top: 4.75,
    left: 180,
  },
  pointbox: {
    width: 295,
    height: 67,
    alignSelf: "flex-start",
  },
  litext: {
    fontFamily: "Proximo NOVA Rg",
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    textAlign: 'left',
    color: '#D2D2D2',
    marginTop: 6, // Gap between components
  },
  tick: {
    width: 14,
    height: 14,
  },
  formcomp:{
   
      width: 327,
      height: 431,
      marginTop: 20,
      backgroundColor:'#ffffff'
      // margin: 0, // If you intended gap between elements, you might need margin or padding
    
  },
  formframe:{
    width: 327,
    height: 27,
    paddingTop: 6,
    //  marginTop: 10, // Use margin on child elements to simulate gap
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#E84D84'
  },
  formtitle:{
    fontFamily: 'Proximo NOVA Rg',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14.4,
    textAlign: 'center',
    color:'#ffffff'
  },
  form:{
    width: 327,
    height: 405,
    // paddingTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor:'#FFCCCB'
  },
  content:{
    width: 307,
    height: 329,
    margin:10,
    // backgroundColor:'#000000',
  },
  frame4:{
    width: 307,
    height: 62,
    backgroundColor:'#ffffff',
  },
  frame4t:{
    fontFamily:'pingfangsc',
    color:'#505050',
    fontSize: 12.8,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'left',
  },
  frame6:{
    width: 307,
    height: 62,
    backgroundColor:'#ffffff'
  },
  frame8:{
    width: 307,
    height: 55,
    // backgroundColor:'#ffffff'
  },
  frame9:{
    width: 307,
    height: 55,
    // backgroundColor:'#ffffff'
  },
  frame10:{
    width: 307,
    height: 55,
    backgroundColor:'#ffffff'
  },
  input:{
    fontFamily: 'pingfangsc',
    fontSize: 13.56,
    fontWeight: '400',
    lineHeight: 18.99,
    textAlign: 'left',
    width: 307,
    height: 35,
    color:'#BFBFBF',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderStyle: 'solid',
    marginTop:11,
  }

});
