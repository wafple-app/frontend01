import React, { useState } from "react";
import { StyleSheet, View, Image, Text, SafeAreaView, TouchableOpacity} from "react-native";
import Menus from "../Menu/Menus";

const HomeScreen = props => {
  // Need to fix the default to current location
  const locationText = "234 Kingsway, Burnaby";
  const percent_100 = '100%';

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* Search result content -start */}
      <View>
        <View style={styles.recentHistoryTop}>
          <View style={[styles.inr, styles.spaceBetween]}>
            <Text style={styles.font18_B}>
              Recent History
            </Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate("Onboarding")}
            >
            <Text style={styles.skipText}>Skip now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={[styles.inr, {marginBottom: 10, height: 60}]}>
            <Image style={[{ height: 60, width: 60 }, styles.borderCircle]} source={require("../../assets/wafple-profle-sampleImg.png")} />
            <Text style={[{marginLeft: 10}, styles.font16_R]}>Wafple User</Text>
            <TouchableOpacity style={styles.hidden}>
              <Image style={{ height: 16, width: 16 }} source={require("../../assets/icon-reflesh.png")} />
            </TouchableOpacity>
          </View>
          <View style={[styles.inr, {marginBottom: 10, height: 60}]}>
            <Image style={[{ height: 60, width: 60 }, styles.borderCircle]} source={require("../../assets/wafple-profle-sampleImg.png")} />
            <Text style={[{marginLeft: 10}, styles.font16_R]}>Wafple User</Text>
            <TouchableOpacity style={styles.positionRight}>
              <Image style={{ height: 16, width: 16 }} source={require("../../assets/icon-reflesh.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Search result content -end*/}

      {/* main Top bar -start*/}
      <View style={[styles.flexCenterCenter ,{ height: 44}]}>
        <Image style={{ height: 24, width: 73 }} source={require("../../assets/wafple_letter_logo.png")} />
      </View>
      {/* main Top bar -end*/}
      
      {/* main location bar -start*/}
      <View style={styles.locationbar}>
        <View style={styles.inr}>
          <Image style={{ height: 24, width: 24, marginRight: 4}} source={require("../../assets/wafple_marker_icon.png")} />
          <Text numberOfLines={1} style={styles.locationText}>{locationText}</Text>
          <TouchableOpacity style={styles.positionRight}>
            <Image style={{ height: 16, width: 16 }} source={require("../../assets/icon-reflesh.png")} />
          </TouchableOpacity>
        </View>
      </View>
      {/* main location bar -end*/}

      {/* main menues -start*/}
      <View style={{flex: 1}}>
        <Menus {...props} />
      </View>
      {/* main menues -end*/}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  //common style
  inr: {
      height: 46,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative'
  },
  positionRight: {
    position: 'absolute',
    right: 0,
    top: 15,
  },
  positionLeft: {
      position: 'absolute',
      left: 0,
      top: 10,
  },
  font16_R : {
      fontSize: 16, 
      color: '#222'
  },
  font14_R : {
      fontSize: 14, 
      color: '#444',
      lineHeight: 24
  },
  font18_B : {
      fontSize: 18, 
      fontWeight: '700',
      color: '#222'
  },
  spaceBetween : {
    justifyContent: 'space-between'
  },
  //main - location
  locationbar: {
    backgroundColor: 'rgba(238, 87, 87, 0.1)',
    height: 46,
  },
  locationText: {
      fontSize: 16,
      color: '#666',
  },
  //login
  skipText: {
      textDecorationLine: 'underline',
      fontFamily: "SourceSansPro-Regular",
      color: '#888',
      fontSize: 14,
  },  
 
  recentHistoryTop :{
      marginBottom: 20
  },
  borderCircle :{
      borderRadius: 50
  },
  hidden : {
      display: 'none'
  },
  flexBetweenCenter:{
      justifyContent: 'space-between',
      alignItems :'center'
  },
  flexCenterCenter:{
      justifyContent: 'center',
      alignItems :'center'
  },
  loginBtn: {
  borderRadius: 5,
  marginBottom: 10
  },
  loginBtnText :{
      fontSize: 16,
      fontWeight: '500',
      textAlign:'center'
  },
  loginBgImg: {
      flex: 1,
      justifyContent: "center"
  },
  container: {
      flex: 1,
      width: null,
      height: null,
  },
  loginText: {
      fontSize: 18,
      fontFamily: "SourceSansPro-Bold",
      marginBottom: 18
  },
  topContainer:{
      flex: 10,
      alignItems: 'center',
      justifyContent: 'center',
  },
  bottomContainer:{
      height: 310,
      paddingVertical : 20,
      paddingHorizontal : 16,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
  },  
  loginButtonWrap:{
      alignItems: 'center',
  },
  skipButton: {
      marginTop: 10,
      alignItems: 'center',
  },
  skipText: {
      textDecorationLine: 'underline',
      fontFamily: "SourceSansPro-Regular",
      color: '#888',
      fontSize: 14,
  }

})


export default HomeScreen;
