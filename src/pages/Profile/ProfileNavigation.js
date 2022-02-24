import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import Menu from "../Menu/Menu";

const Stack = createNativeStackNavigator();

const ProfileNavigation = props => {
    return (
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}} />
            <Stack.Screen name="MenuPage" component={Menu} options={{headerShown: false}} />
        </Stack.Navigator>
    )
};

export default ProfileNavigation;