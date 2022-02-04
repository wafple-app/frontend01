import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function RestaurantScreen({ navigation }) {
    return (
        <View style={ styles.container }>
            <View style={ styles.topContainer }>
                <Text style={ styles.h1 } >Starbucks (SW Marine)</Text>
                <View style={ styles.resInfoContainer }>
                    <Text style={ styles.a } >Overall rating   </Text>
                    <FontAwesome name={"star"} size={13} color={"red"} />
                    <Text style={[ styles.a, {color: "red"} ]}>  5.0 </Text>
                    <Text style={[ styles.a, {color: "lightgrey"} ]}> | </Text>
                    <Text style={[ styles.a, {color: "lightgrey"} ]}> 1000 Reviews </Text>
                </View>
            </View>
            <View style={ styles.temp }>
                <Text>Restaurant Screen</Text>
            </View>
        </View>
    );
}

export default RestaurantScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1,
        backgroundColor: "#FFF2D0",
        paddingLeft: 15,
    },
    h1: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18
    },
    resInfoContainer:{
        flexDirection: "row",
        alignItems: "center", 
    },
    a: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 14
    },
    temp:{
        flex: 8,
        backgroundColor: "white",
        alignItems: "center", 
        justifyContent: "center",
    }
})