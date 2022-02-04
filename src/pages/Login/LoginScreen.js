import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import SocialButton from '../../components/socialButton';
import { Dimensions } from 'react-native'; // Need to save in centralized location

const windowWidth = Dimensions.get('window').width; // Need to save in centralized location
const windowHeight = Dimensions.get('window').height; // Need to save in centralized location

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text style={styles.text}>Login Screen</Text>
            <StatusBar style="auto" />
        </View>
        
        <View style={styles.bottomContainer}>
            <Text style={styles.text}>Login with SNS</Text>
            <View style={styles.buttonContainer}>
                <SocialButton 
                    buttonTitle="Sign Up with Facebook"
                    btnType="facebook"
                    color="#4867aa"
                    backgroundColor="#e6eaf4"
                    onPress={()=>Alert.alert("누르셨습니까?")}
                />
                
                <SocialButton 
                    buttonTitle="Sign Up with Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                    onPress={() => navigation.navigate("Home")}
                />

                <SocialButton 
                    buttonTitle="Sign Up with Apple"
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
    },
    text: {
        fontSize: 15,
        fontFamily: "SourceSansPro-Bold",
    },
    topContainer:{
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#EEEEEE"
    },
    bottomContainer:{
        flex: 7,
        padding: 30,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
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


