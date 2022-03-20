import React from "react";
import { StyleSheet, View, Image } from "react-native";
import globalStyles from "../styles/common";

const ProfilePicture = ({
    size,
    pictureURL
}) => {
    return (
        <View style={[styles.mainView, {width: size, height: size}]}>
            <Image 
                style={{width: '70%', height: '70%'}}
                source={{uri : pictureURL}}
            />
        </View>
    );
};

export default ProfilePicture;

const styles = StyleSheet.create({
    mainView:{
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    }
});