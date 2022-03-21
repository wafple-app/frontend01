import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MeasurePoint = ({
    number,
    name
}) => {
    return (
        <View style={{ flex:1 }}>
            <View style={styles.numberView}>
                <Text style={styles.numberText}>
                    {number}
                </Text>
            </View>
            <View style={styles.nameView}>
                <Text style={styles.nameText}>
                    {name}
                </Text>
            </View>
        </View>
    );
};

export default MeasurePoint;

const styles = StyleSheet.create({
    numberView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    numberText:{
        fontWeight: "bold",
        fontSize:20,
    },  
    nameView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    nameText:{
        fontSize:14,
        color: "grey"
    },  
});