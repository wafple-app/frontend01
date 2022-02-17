import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileNavigation from "../Profile/ProfileNavigation";
import HomeScreen from "../Home/HomeScreen";
import SearchScreen from "../Home/SearchScreen";
import AddReviewScreen from "../Home/AddReviewScreen";

const LandingPageNavigation = props => {
    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator
            activeColor='#EE5757'
            shifting={false}
            barStyle={style.bottomNavigationStyle}
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
                    )
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='magnify' color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name='AddReview'
                component={AddReviewScreen}
                options={{
                    tabBarLabel: 'Add Review',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='plus-circle-outline' color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name='ProfileNavigation'
                component={ProfileNavigation}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='account-circle-outline' color={color} size={26} />
                    )
                }}
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