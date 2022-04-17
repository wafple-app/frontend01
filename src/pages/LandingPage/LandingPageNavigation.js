import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileNavigation from "../Profile/ProfileNavigation";
import Profile from "../Profile/Profile";
import HomeScreen from "../Home/HomeScreen";
import SearchScreen from "../Home/SearchScreen";
import AddReviewScreen from "../Home/AddReviewScreen";

const Tab = createBottomTabNavigator();
const LandingPageNavigation = props => {
    return (
        <Tab.Navigator
            activeColor='#EE5757'
            shifting={false}
            barStyle={style.bottomNavigationStyle}
            backBehavior='history'
            screenOptions={{
                tabBarActiveTintColor: '#EE5757',
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require('../../assets/wafple_home_icon.png')}
                            style={{
                                tintColor: color,
                                width: 26,
                                height: 26
                            }}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='magnify' color={color} size={26} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name='AddReview'
                component={AddReviewScreen}
                options={{
                    tabBarLabel: 'Add Review',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='plus-circle-outline' color={color} size={26} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='account-circle-outline' color={color} size={26} />
                    ),
                    headerShown: false,
                    unmountOnBlur: true
                }}
                listeners={({ navigation }) => ({
                    blur: () => {
                        navigation.setParams({ from: undefined });
                    }
                })}
            />
        </Tab.Navigator>
    )
};

export default LandingPageNavigation;

const style = StyleSheet.create({
    bottomNavigationStyle: {
        backgroundColor: '#ffffff'
    }
});