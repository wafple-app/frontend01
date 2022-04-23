import {
    Text,
    View,
    Image,
    StyleSheet
} from "react-native";
import StarRating from '../../components/StarRating';

const RestaurantMenu = props => {
    console.log('in RestaurantMenu', props);
    const {
        food_name,
        food_url,
        price,
        rating,
        ratingCount,
        description
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image style={styles.reviewImage} source={food_url} />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.reviewTextHeader}>
                    <View style={styles.userNameContainer}>
                        <Text style={styles.foodName}>{food_name}</Text>
                        <Text style={styles.price}>${price}</Text>
                    </View>
                </View>
                <View style={styles.reviewContainer}>
                    <Text>{description}</Text>
                </View>
                <View>
                    <StarRating
                        rating={rating}
                        ratingCount={ratingCount}
                        styles={{
                            icon: styles.ratingIcon,
                            rating: styles.rating,
                            ratingCount: styles.ratingCount
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 5,
        marginBottom: 20
    },
    leftContainer: {
        width: 107,
        height: '100%'
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 5,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE'
    },
    reviewTextHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    foodName: {
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 2
    },
    price: {
        fontWeight: '400',
        fontSize: 14
    },
    userNameContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    userName: {
        fontSize: 16,
        fontWeight: '600'
    },
    reviewImage: {
        width: 107,
        height: 107,
        borderRadius: 5
    },
    ratingIcon: {
        height: 14,
        width: 18,
        marginBottom: 2
    },
    rating: {
        fontSize: 14,
        color: 'black'
    },
    ratingCount: {
        fontSize: 14,
        color: '#EE5757'
    },
    reviewContainer: {
        paddingVertical: 10
    }
});

export default RestaurantMenu;