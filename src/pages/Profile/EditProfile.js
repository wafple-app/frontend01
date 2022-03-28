import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import globalStyles from "../../styles/common";
import ProfilePicture from '../../components/profilePicture';

const EditProfile = ({navigation}) => {

    return (
        <View style={[styles.defaultBackground, {paddingTop: 0}]}>
            <View style={styles.topView}>
                <ProfilePicture 
                    size={90}
                    pictureURL="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"
                />
                <View style={styles.cameraPlusView}>
                    <Image
                        style={styles.cameraPlusImage}
                        source={require("../../assets/camera_plus.png")}
                    />
                </View>
                
            </View>
            <View style={styles.mainContainer}>
                <Text style={{color:"grey", marginBottom:5}}>Nickname</Text>
                <TextInput
                    style={{ height: 40, borderRadius: 10 }}
                    defaultValue={""}
                />
                <Text style={{color:"grey", marginBottom:5}}>Phone Number</Text>
                <TextInput
                    style={{ height: 40, borderRadius: 10 }}
                    defaultValue={""}
                />
                <Text style={{color:"grey", marginBottom:5}}>Email</Text>
                <TextInput
                    style={{ height: 40, borderRadius: 10 }}
                    defaultValue={""}
                />

                <Button 
                    onPress={()=>console.log("button")}
                    style={styles.saveButton}
                    mode="contained"
                >Save</Button>
                <Button 
                    onPress={()=>console.log("button")}
                    style={styles.logOutButton}
                >Log out</Button>

            </View>
        </View>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    ...globalStyles,
    topView:{
        backgroundColor: "#FEEFEF", 
        flex: 1, 
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    cameraPlusView: {
        backgroundColor: "white",
        borderRadius: 100,
        right: 22,
        top: 27
    },
    cameraPlusImage: {
        width: 23, 
        height: 23,
    },
    mainContainer:{
        flex: 3,
        padding: 15
    },
    saveButton: {
        marginTop:30,
        backgroundColor: "rgba(241, 128, 128, 1)",
    },
    logOutButton: {
        marginTop: 10,
        backgroundColor: "lightgrey",
    }
});