import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import globalStyles from "../styles/common";

const RecentHistory = ({
    username
}) => {
    return (
        <View style={[styles.inr, {marginBottom: 10, height: 60}]}>
            <Image style={{ height: 60, width: 60, flex: 2 }} source={require("../assets/wafple-profle-sampleImg.png")} />
            <Text style={[{marginLeft: 10, flex: 8}, styles.font16_R]}>{username}</Text>
            <TouchableOpacity style={{ flex: 0.5 }}>
                <Image style={{ height: 16, width: 16 }} source={require("../assets/icon-reflesh.png")} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    ...globalStyles
});

export default RecentHistory;