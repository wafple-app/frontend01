import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import StarRating from '../../components/StarRating';
import FoodReview from './FoodReview';

const FoodDetail = props => {
    const { navigation, route } = props;
    console.log('in FoodDetail: ', props);
    const {
        restaurant,
        price,
        food_name,
        food_url,
        rating,
        user,
        review
    } = route.params;
    const [isAndroid, setIsAndroid] = useState(false);
    const platform = useSelector(state => state.platformReducer.platform.OS);

    useEffect(() => {
        setIsAndroid(platform === 'android');
    }, []);

    return (
        <>
            <ImageBackground
                resizeMode='cover'
                style={styles.imageBackground}
                source={food_url}
            >
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.backButton(isAndroid)}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            style={[styles.backButtonImage, { tintColor: '#ffffff' }]}
                            source={require("../../assets/wafple-back-arrow.png")}
                        />
                    </TouchableOpacity>
                    <View style={styles.subHeader}>
                        <View><Text style={styles.restauarntNameStyle}>{restaurant.name}</Text></View>
                        <View style={styles.foodInfoContainer}>
                            <View><Text style={styles.foodNameStyle}>{food_name}</Text></View>
                            <View><Text style={styles.priceStyle}>{`$${price}`}</Text></View>
                        </View>
                        <View style={styles.ratingContainer}>
                            <StarRating rating={rating} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <ScrollView style={styles.reviewContainer}>
                <FoodReview
                    food_url={food_url}
                    user_icon={user.user_icon}
                    user_name={user.name}
                    rating={rating}
                    review={review}
                />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity
                        style={styles.viewMoreButton}
                        // TODO: Do something here.
                        onPress={() => navigation.navigate('FoodReviews', route.params)}
                    >
                        <Text style={styles.viewMoreButtonText}>View More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.viewReviewerButton}
                        // TODO: Do something here.
                        onPress={() => {
                            // Reference: https://reactnavigation.org/docs/stack-actions/#push
                            const navigationAction = StackActions.push('LandingPageNavigation', {
                                screen: 'Profile',
                                params: {
                                    ...route.params,
                                    from: 'FoodDetail'
                                }}
                            );
                            navigation.dispatch(navigationAction);
                        }}
                    >
                        <Text style={styles.viewReviewerButtonText}>View Reviewer</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    saveArea: {
        backgroundColor: '#ffffff',
    },
    imageBackground: {
        justifyContent: 'center',
        width: null,
        height: 300
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    backButton: (isAndroid) => ({
        marginTop: isAndroid ? 46 : 50,
        marginLeft: 16
    }),
    backButtonImage: {
        width: 24,
        height: 24
    },
    subHeader: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 16,
        marginBottom: 16
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
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    reviewContainer: {
        marginHorizontal: 16,
        marginTop: 20
    },
    viewMoreButton: {
        backgroundColor: '#F88585',
        height: 54,
        width: 169,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewReviewerButton: {
        height: 54,
        width: 169,
        borderRadius: 10,
        borderColor: '#F88585',
        borderStyle: 'solid',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewMoreButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    viewReviewerButtonText: {
        color: '#F88585',
        fontSize: 18,
        fontWeight: '600'
    }
});

export default FoodDetail;