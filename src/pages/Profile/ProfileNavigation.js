import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import Menu from "../Menu/Menu";

const ProfileNavigation = props => {
    const Stack = createNativeStackNavigator();
console.log("here"+props);
    return (
        // <Profile {...props} />
        // // <NavigationContainer>
            <Stack.Navigator initialRouteName='Profile'>
                <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}} />
                <Stack.Screen name="MenuPage" component={Menu} options={{headerShown: false}} />
            </Stack.Navigator>
        // // </NavigationContainer>
    )
};

export default ProfileNavigation;