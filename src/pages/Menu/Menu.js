// Referenced from https://javascript.plainenglish.io/react-native-scrollable-animated-header-6dfe453d7078
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Animated,
    Image,
    TouchableOpacity
} from 'react-native';
import StarRating from '../../components/StarRating';
import { Appbar } from "react-native-paper";

const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Menu = props => {
    const { navigation, route } = props;
    const {
        restaurant,
        price,
        food_name,
        rating
    } = route.params;
    const scrollY = useRef(new Animated.Value(0)).current;
    const [isAndroid, setIsAndroid] = useState(false);
    const platform = useSelector((state) => state.platformReducer.platform.OS);

    const backButtonOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 0]
    });

    const headerTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -HEADER_SCROLL_DISTANCE],
        extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
    });

    const headerOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 1, 1],
        extrapolate: 'clamp',
    });

    const imageTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 100],
        extrapolate: 'clamp',
    });

    useEffect(() => {
        setIsAndroid(platform === 'android');
    }, []);

    return (
        <SafeAreaView style={styles.saveArea}>
            <TouchableOpacity
                style={styles.backButton(isAndroid)}
                onPress={() => navigation.goBack()}
            >
                <Image
                    style={[styles.backButtonImage, { tintColor: '#000000' }]}
                    source={require("../../assets/wafple-back-arrow.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.backButton(isAndroid)}
                onPress={() => navigation.goBack()}
            >
                <Animated.Image
                    style={[styles.backButtonImage, { tintColor: '#ffffff', opacity: backButtonOpacity }]}
                    source={require("../../assets/wafple-back-arrow.png")}
                />
            </TouchableOpacity>
            <Animated.ScrollView
                style={isAndroid ? { marginTop: 40 } : {} }
                contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 32 }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}>
                {
                    <>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                        <Text>Menu page</Text>
                    </>
                }
            </Animated.ScrollView>
            <Animated.View
                style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
                <Animated.Image
                    style={[
                        styles.headerBackground,
                        {
                            opacity: imageOpacity,
                            transform: [{ translateY: imageTranslateY }],
                        },
                    ]}
                    source={require('../../assets/pic_food.png')}
                />
                <Animated.View style={[styles.headerContainer, { opacity: imageOpacity }]}>
                    <View><Text style={styles.restauarntNameStyle}>{restaurant.name}</Text></View>
                    <View style={styles.foodInfoContainer}>
                        <View><Text style={styles.foodNameStyle}>{food_name}</Text></View>
                        <View><Text style={styles.priceStyle}>{`$${price}`}</Text></View>
                    </View>
                    <View style={styles.ratingContainer}>
                        <StarRating rating={rating} />
                    </View>
                </Animated.View>
            </Animated.View>
            <Animated.View
                style={[
                    styles.titleBar(isAndroid),
                    {
                        opacity: headerOpacity
                    }
                ]}>
                <Text style={styles.title}>{food_name}</Text>
            </Animated.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingBottom: 18
    },
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
    starRatingStyle: {
        fontSize: 18,
        color: 'white'
    },
    saveArea: {
        flex: 1,
        backgroundColor: '#eff3fb',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#402583',
        backgroundColor: '#ffffff',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 1,
        borderRadius: 10,
        marginHorizontal: 12,
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    titleBar: (isAndroid) => ({
        marginTop: 40,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingBottom: isAndroid ? 15 : 0
    }),
    title: {
        color: 'black',
        fontSize: 20,
    },
    avatar: {
        height: 54,
        width: 54,
        resizeMode: 'contain',
        borderRadius: 54 / 2,
    },
    fullNameText: {
        fontSize: 16,
        marginLeft: 24,
    },
    backButton: (isAndroid) => ({
        position: 'absolute',
        left: 16,
        right: 0,
        top: isAndroid ? 46 : 50,
        zIndex: 1
    }),
    backButtonImage: {
        width: 24,
        height: 24
    }
});

export default Menu;
