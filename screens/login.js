import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import SocialButton from '../components/socialButton';

// OAuth Guidelines 
// https://developers.google.com/identity/branding-guidelines

export default function Login(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <StatusBar style="auto" />
            
            
            <View>
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
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    text: {
        // fontFamily: "SourceSansPro-Bold",
    },
})