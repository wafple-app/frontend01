import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
                        style={{width: '45%', height: '45%'}}
                        source={iconUrl}
                    />
                </View>
                <View style={ styles.textView }>
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
        width: "95%",
        margin: 5,
        height: 45,
        // borderColor: "pink",
        // borderWidth: 2,
        // borderRadius: 5
    },
    iconView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        flex: 5,
        padding: 5,
        justifyContent: 'center'
    }
});