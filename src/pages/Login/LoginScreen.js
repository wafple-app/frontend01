import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import SocialButton from '../../components/socialButton';

const bgColor = 'rgba(238, 87, 87, 0.1)'; // THIS MUST BE A GLOBAL VARIABLE

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Image 
                source={require('../../assets/welcome_logo.png')}
            />
            <StatusBar style="auto" />
        </View>
        
        <View style={styles.bottomContainer}>
            <Text style={styles.text}>Login with SNS</Text>
            <View style={styles.buttonContainer}>
                <SocialButton 
                    buttonTitle="Log In with Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                    onPress={() => navigation.navigate("Home")}
                />

                <SocialButton 
                    buttonTitle="Log In with Facebook"
                    btnType="facebook"
                    color="#4867aa"
                    backgroundColor="#e6eaf4"
                    onPress={()=>Alert.alert("누르셨습니까?")}
                />

                <SocialButton 
                    buttonTitle="Log In with Apple"
                    btnType="apple"
                    color="#ffffff"
                    backgroundColor="#000000"
                    onPress={()=>Alert.alert("누르셨습니까?")}
                />
            </View>
            <TouchableOpacity 
                style={styles.skipButton}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.skipText}>Skip now</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
    },
    text: {
        fontSize: 15,
        fontFamily: "SourceSansPro-Bold",
    },
    topContainer:{
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer:{
        flex: 7,
        padding: 30,
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
    buttonContainer:{
        alignItems: 'center',
    },
    skipButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    skipText: {
        textDecorationLine: 'underline',
        fontFamily: "SourceSansPro-Regular",
    }
})


