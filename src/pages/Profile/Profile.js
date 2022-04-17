import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity, Alert, StatusBar, Image, ScrollView } from "react-native";
import globalStyles from "../../styles/common";
import MeasurePoint from './components/measurePoint';
import MenuOption from "./components/menuOption";
import ProfilePicture from '../../components/profilePicture';
import { StackActions } from '@react-navigation/native';
import FoodReview from '../Menu/FoodReview';
import { menuReviews as reviews } from '../../../testingData';

const Profile = ({ navigation, route }) => {
    const isLoggedIn = useSelector(state => state.userReducer.user) !== undefined;
    const platform = useSelector(state => state.platformReducer.platform.OS);
    const dispatch = useDispatch();
    const isHeaderShown = route.params !== undefined && route.params.from !== undefined && route.params.from === 'FoodDetail';
    const [isAndroid, setIsAndroid] = React.useState(false);
    const [menuReviews, setMenuReviews] = React.useState([]);

    React.useLayoutEffect(() => {
        console.log('bool', route.params !== undefined && route.params.from !== undefined && route.params.from === 'FoodDetail');
        navigation.setOptions({
            headerShown: isHeaderShown,
            headerLeft: () => (
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.dispatch(StackActions.pop(1))}
                >
                    <Image
                        style={[styles.backButtonImage, { tintColor: '#000000' }]}
                        source={require("../../assets/wafple-back-arrow.png")}
                    />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    React.useEffect(() => {
        setIsAndroid(platform === 'android');
        // Get Actually reviews from server.
        setMenuReviews(reviews);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {isLoggedIn ? (
                <>
                    <View style={styles.loginTopView(isAndroid, isHeaderShown)}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image style={styles.logoutAvatar} source={require('../../assets/wafple_profile_icon_default.png')} />
                                <TouchableOpacity
                                    onPress={()=>{navigation.navigate("EditProfile");}}
                                >
                                    <Text style={styles.editProfileText}>Edit Profile</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 2, justifyContent: 'center' }}>
                                <View style={styles.nameView}>
                                    <Text style={styles.nameText}>John Doesdafg</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingTop: 9}}>
                                    <MeasurePoint
                                        number= "1k"
                                        name= "Reviews"
                                    />
                                    <MeasurePoint
                                        number= "5.0"
                                        name= "Ratings"
                                    />
                                    <MeasurePoint
                                        number= "12"
                                        name= "Creations"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{ flex: 1, marginTop: 24, marginHorizontal: 15 }}
                    >
                        <ScrollView>
                            {menuReviews.length === 0 ? (
                                <View style={styles.noReviewContainer}>
                                    <Text style={styles.noReviewFirstText}>No review found</Text>
                                    <Text style={styles.noReivewSecondText}>Write the first review!</Text>
                                </View>
                            ) : (
                                <>
                                    {menuReviews.map((menuReview) => {
                                        delete menuReview.ratingCount
                                        return <FoodReview key={menuReview.user_id} {...menuReview} />;
                                    })}
                                </>
                            )}
                        </ScrollView>
                    </View>
                </>
            ) : (
                <>
                    <View style={styles.logoutTopView}>
                        <Image style={styles.logoutAvatar} source={require('../../assets/wafple_profile_icon_default.png')} />
                        <Text style={styles.logoutText}>Login to Wapfle</Text>
                    </View>
                    <View style={{flex: 6, marginTop: 15, alignItems: 'center'}}>
                        <MenuOption 
                            text="Login"
                            iconUrl={require("../../assets/signin.png")}
                            onPress={()=>{Alert.alert("Sign Out")}}
                        />
                        <MenuOption 
                            text="Customer Service"
                            iconUrl={require("../../assets/customer_service.png")}
                            onPress={()=>{Alert.alert("Customer Service")}}
                        />
                    </View>
                </>
            )}
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    ...globalStyles,
    loginTopView: (isAndroid, isHeaderShown) => ({
        backgroundColor: "#FEEFEF",
        height: isHeaderShown ? 150 : 216,
        paddingTop: isAndroid ? (isHeaderShown ? undefined : 30) : (isHeaderShown ? undefined : 50)
    }),
    backButton: {
        marginLeft: 16
    },
    backButtonImage: {
        width: 24,
        height: 24
    },
    noReviewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 32
    },
    noReviewFirstText: {
        color: '#888888',
        fontSize: 18
    },
    noReivewSecondText: {
        color: '#888888'
    },
    logoutTopView: {
        backgroundColor: '#FEEFEF',
        alignItems: 'center',
        flexDirection: 'row',
        height: 172,
        paddingTop: 63,
        paddingLeft: 16
    },
    logoutText: {
        fontSize: 22
    },
    logoutAvatar: {
        width: 83,
        height: 83
    },
    profileView: {
        flex:3,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    editProfileView: {
        flex:1, 
        alignItems: 'center'
    },
    editProfileText: {
        color: "grey",
        textDecorationLine: "underline",
        fontSize: 14,
        marginTop: 8
    },  
    nameView: {
        flex: 1,
        justifyContent: 'flex-end',
        left: 15,
    },
    nameText: {
        fontSize: 20
    }
});