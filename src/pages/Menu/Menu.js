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
    TouchableOpacity,
    Dimensions
} from 'react-native';
import StarRating from '../../components/StarRating';
import FoodReview from './FoodReview';
// Make sure remove below line later
import { menuReviews as reviews } from '../../../testingData';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Menu = props => {
    const { navigation, route } = props;
    const {
        restaurant,
        price,
        food_name,
        food_url,
        rating,
        ratingCount
    } = route.params;
    const scrollY = useRef(new Animated.Value(0)).current;
    const [isAndroid, setIsAndroid] = useState(false);
    const [menuReviews, setMenuReviews] = useState([]);
    const platform = useSelector(state => state.platformReducer.platform.OS);

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

    const deviceHeight = Dimensions.get('window').height;
    const deviceWdith = Dimensions.get('window').width;


    useEffect(() => {
        setIsAndroid(platform === 'android');
        // Get menus via API
        setMenuReviews(reviews);
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
                contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 32, paddingLeft: 10, paddingRight: 10 }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}>
                {menuReviews.length === 0 ? (
                    <View style={styles.noReviewContainer}>
                        <Text style={styles.noReviewFirstText}>No review found</Text>
                        <Text style={styles.noReivewSecondText}>Write the first review!</Text>
                    </View>
                ) : (
                    <>
                        {menuReviews.map((menuReview) => {
                            return <FoodReview key={menuReview.user_id} {...menuReview} />;
                        })}
                    </>
                )}
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
                    source={food_url}
                />
                <Animated.View style={[styles.headerContainer, { opacity: imageOpacity }]}>
                    <View><Text style={styles.restauarntNameStyle}>{restaurant.name}</Text></View>
                    <View style={styles.foodInfoContainer}>
                        <View><Text style={styles.foodNameStyle}>{food_name}</Text></View>
                        <View><Text style={styles.priceStyle}>{`$${price}`}</Text></View>
                    </View>
                    <View style={styles.ratingContainer}>
                        <StarRating rating={rating} ratingCount={ratingCount} />
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
            <View
                style={
                    isAndroid
                    ? styles.androidViewRestuarantButton(deviceHeight, deviceWdith)
                    : styles.iosViewRestuarantButton(deviceHeight, deviceWdith)
                }
            >
                <TouchableOpacity
                    style={styles.addReviewButton}
                    // TODO: Do something here.
                    // onPress={() => navigation.navigate('Menu', route.params)}
                    onPress={() => { console.log('do something')}}
                >
                    <Text style={styles.addReviewButtonText}>Add Review</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.viewRestuarantButton}
                    // TODO: Do something here.
                    onPress={() => { console.log('do something')}}
                >
                    <Text style={styles.viewRestuarantButtonText}>View Restuarant</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// TODO: Clean up the Styles
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
    noReviewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: HEADER_MAX_HEIGHT - 32
    },
    noReviewFirstText: {
        color: '#888888',
        fontSize: 18
    },
    noReivewSecondText: {
        color: '#888888'
    },
    saveArea: {
        flex: 1,
        backgroundColor: '#ffffff',
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
    },
    androidViewRestuarantButton: (deviceHeight, deviceWdith) => ({
        position: 'absolute',
        // Device height - height of button - bottom margin that we want to get top margin
        top: deviceHeight - 54 - 76,
        // Device width - width of button / 2 to get left margin
        left: (deviceWdith - 343) / 2,
        height: 54,
        width: 343,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }),
    iosViewRestuarantButton: (deviceHeight, deviceWdith) => ({
        position: 'absolute',
        // Device height - height of button - bottom margin that we want to get top margin
        top: deviceHeight - 54 - 76,
        // Device width - width of button / 2 to get left margin
        left: (deviceWdith - 343) / 2,
        height: 54,
        width: 343,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }),
    addReviewButton: {
        backgroundColor: '#F88585',
        height: 54,
        width: 169,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewRestuarantButton: {
        height: 54,
        width: 169,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#F88585',
        borderStyle: 'solid',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addReviewButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    viewRestuarantButtonText: {
        color: '#F88585',
        fontSize: 18,
        fontWeight: '600'
    }
});

export default Menu;
