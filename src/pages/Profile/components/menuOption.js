import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const MenuOption = ({
    text,
    iconUrl,
    ...rest
}) => {
    return (
        <TouchableOpacity
            {...rest}
        >
            <View style={ styles.mainView }>
                <View style={ styles.iconView }>
                    <Image 
                        style={{width: '70%', height: '70%'}}
                        source={{uri: iconUrl}}
                    />
                </View>
                <View style={ styles.textView}>
                    <Text>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MenuOption;

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        width: "90%",
        margin: 5,
        height: 45,
        borderColor: "pink",
        borderWidth: 2,
        borderRadius: 10
    },
    iconView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        flex: 5,
        padding: 10,
        justifyContent: 'center'
    }
});