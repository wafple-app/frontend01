import React from "react";
import { Text, ImageBackground } from "react-native";
import { Appbar } from "react-native-paper";

const Menu = props => {
    const { navigation } = props;

    return (
        <>
            <ImageBackground source={require("../../assets/pic_food.png")} style={{ width: '100%', height: 250 }}>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction  onPress={() => {navigation.goBack() }} />
                </Appbar.Header>
            </ImageBackground>
            <Text>Menu page</Text>
        </>
    );
};

export default Menu;