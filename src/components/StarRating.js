import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';

/**
 * Star Rating component.
 * 
 * @param {number} rating required
 * @param {number} [ratingCount] optional
 * @param {any} [styles] icon, text
 * @returns {JSX.Element} StarRating
 */
const StarRating = props => {
    const { rating, ratingCount } = props;

    return (
        <View style={defaultStyles.ratingContainer}>
            <Image
                style={[defaultStyles.starIconStyle, { ...(props.styles && props.styles.icon) }]}
                source={require('../assets/wafple_star_icon.png')}
            />
            <Text style={[defaultStyles.starRatingStyle, { ...(props.styles && props.styles.rating) }]}>
                {rating.toFixed(1)}
                {ratingCount ? (
                    <Text style={{ ...(props.styles && props.styles.ratingCount )}}>{` (${ratingCount})`}</Text>
                ) : (
                    null
                )}
            </Text>
        </View>
    );
};

const defaultStyles = StyleSheet.create({
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

export default StarRating;
