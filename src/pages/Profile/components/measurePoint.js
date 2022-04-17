import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MeasurePoint = ({
    number,
    name
}) => {
    return (
        <View style={{ flex:1, alignItems: 'center' }}>
            <Text style={styles.numberText}>
                {number}
            </Text>
            <Text style={styles.nameText}>
                {name}
            </Text>
        </View>
    );
};

export default MeasurePoint;

const styles = StyleSheet.create({
    numberText:{
        fontWeight: "bold",
        fontSize:20,
    },
    nameText:{
        fontSize:14,
        color: "grey"
    }
});