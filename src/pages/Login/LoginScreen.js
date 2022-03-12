import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';

{/* Hailey: make percent_100, screenWidth, screenHeight as common variables*/}
const percent_100 = '100%';

export default function LoginScreen({ navigation }) {
    console.log("login");
    
  return (
      
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/login-bg.png')} resizeMode="cover" style={styles.loginBgImg}>
            {/* login - bg-start*/}
            <View style={styles.topContainer}>
                <Image style={{ height: 230, width: 170 }}
                    source={require('../../assets/welcome_logo.png')}
                />
                <StatusBar style="auto" />
            </View>
            {/* login - bg-end*/}

            {/* login - login content-start */}
            <View style={styles.bottomContainer}>
                <Text style={styles.loginText}>Login</Text>
                <View tyle={[{flex:1}, styles.loginButtonWrap]} >
                    <View style={[{backgroundColor:"#fff"}, styles.loginBtn]} >
                        <TouchableOpacity style={[styles.inr, styles.flexCenterCenter]}>
                            <Image style={[{ height: 24, width: 24 }, styles.positionLeft]} source={require("../../assets/logo-google.png")} />
                            <Text style={[{color: '#666'}, styles.loginBtnText]}>Login in with Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{backgroundColor:"#1877F2"}, styles.loginBtn]} >
                        <TouchableOpacity  style={[styles.inr, styles.flexCenterCenter]}>
                            <Image style={[{ height: 24, width: 24 }, styles.positionLeft]} source={require("../../assets/logo-facebook.png")} />
                            <Text style={[{color: '#fff'}, styles.loginBtnText]}>Login in with Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{backgroundColor:"#000000"}, styles.loginBtn]} >
                        <TouchableOpacity  style={[styles.inr, styles.flexCenterCenter]}>
                            <Image style={[{ height: 24, width: 24 }, styles.positionLeft]} source={require("../../assets/logo-apple.png")} />
                            <Text style={[{color: '#fff'}, styles.loginBtnText]}>Login in with Apple</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.skipButton}
                    onPress={() => navigation.navigate("Onboarding")}
                >
                    <Text style={styles.skipText}>Skip now</Text>
                </TouchableOpacity>
            </View>
            {/* login - login content-end */}
        </ImageBackground>
    </View>
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

