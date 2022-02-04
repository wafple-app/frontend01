import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/pages/Home/HomeScreen";
import DetailScreen from "./src/pages/Detail/DetailScreen";
import LoginScreen from "./src/pages/Login/LoginScreen";
import RestaurantScreen from "./src/pages/Restaurant/RestaurantScreen";
import { Provider as ReduxProvider } from "react-redux";

import configureStore from "./src/redux/store";

const store = configureStore();

const RootNaviagation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} options={navigationOptions.restaurantOption}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootNaviagation;

const navigationOptions = {
  restaurantOption: {
    title: '',
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: '#FFF2DF', // THIS NEED TO BE IN GLOBAL VARIABLE ### ATTENTION REQUIRED ###
      elevation: 0, // android shadow rate
      shadowOpacity: 0, // ios shadow rate
    }
  }
}