import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import SocialButton from '../../components/socialButton';
import { Dimensions } from 'react-native'; // Need to save in centralized location

const windowWidth = Dimensions.get('window').width; // Need to save in centralized location
const windowHeight = Dimensions.get('window').height; // Need to save in centralized location

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Text style={styles.text}>Login Screen</Text>
            <StatusBar style="auto" />
        </View>
        
        <View style={styles.buttonContainer}>
            <SocialButton 
                buttonTitle="Sign Up with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />
            
            <SocialButton 
                buttonTitle="Sign Up with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            />

            <SocialButton 
                buttonTitle="Sign Up with Apple"
                btnType="apple"
                color="#ffffff"
                backgroundColor="#000000"
                onPress={() => {}}
            />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        borderWidth: 1,
    },
    text: {
        fontFamily: "SourceSansPro-Bold",
    },
    imageContainer:{
        flex: 3,
        backgroundColor: "#ddd"
    },
    buttonContainer:{
        flex: 1,
        borderWidth: 1,
        paddingBottom: 100
    }
})


