import React from "react";
import { Text, ImageBackground } from "react-native";
import { Appbar } from "react-native-paper";

const Menu = props => {
    console.log(props);
    return (
        <>
            <ImageBackground source={require("../../assets/pic_food.png")} style={{ width: '100%', height: 250 }}>
                {/* <Appbar style={{ width: '100%', height: 250 }}> */}
                    <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                        <Appbar.BackAction  onPress={props.navigation.goBack} />
                    </Appbar.Header>
                {/* </Appbar> */}
            </ImageBackground>
            <Text>Menu page</Text>
        </>
    );
};

export default Menu;