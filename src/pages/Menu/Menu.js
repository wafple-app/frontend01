import React, { useEffect, useState, useRef } from "react";
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView, Animated } from "react-native";
import { Appbar } from "react-native-paper";

const Menu = props => {
    const { navigation, route } = props;
    const {
        restaurant,
        price,
        food_name,
        rating
    } = route.params;
    const scrollY = useRef(new Animated.Value(0)).current;
console.log(scrollY);
    useEffect(() => {
        // This code should be replace with proper API call
        setTimeout(() => {
            console.log("asdf");
        }, 3000);
    }, []);

    return (
        <>
        <ImageBackground source={require("../../assets/pic_food.png")} style={{ width: '100%', height: 300 }}>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction  onPress={() => {navigation.goBack() }} />
                </Appbar.Header>
                <View style={style.headerContainer}>
                    <View><Text style={style.restauarntNameStyle}>{restaurant.name}</Text></View>
                    <View style={style.foodInfoContainer}>
                        <View><Text style={style.foodNameStyle}>{food_name}</Text></View>
                        <View><Text style={style.priceStyle}>{`$${price}`}</Text></View>
                    </View>
                    <View style={style.ratingContainer}>
                        <Image
                            style={style.starIconStyle}
                            source={require('../../assets/wafple_star_icon.png')}
                        />
                        <Text style={style.starRatingStyle}>{rating.toFixed(1)}</Text>
                    </View>
                </View>
            </ImageBackground>
        <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={
                Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }], // event.nativeEvent.contentOffset.x to scrollX
                { useNativeDriver: true }, // use native driver for animation
                )
            }
        >
            
            <Text>Menu page</Text>
        </Animated.ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingBottom: 18
    },
    banner: scrollY => ({
        width: '100%',
        height: 300,
        top: scrollY
    }),
    restauarntNameStyle: {
        fontSize: 16,
        color: 'white'
    },
    foodInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    foodNameStyle: {
        fontWeight: '600',
        fontSize: 22,
        color: 'white'
    },
    priceStyle: {
        fontSize: 20,
        color: 'white'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    starIconStyle: {
        width: 26,
        height: 26,
        marginRight: 8
    },
    starRatingStyle: {
        fontSize: 18,
        color: 'white'
    }
});

export default Menu;