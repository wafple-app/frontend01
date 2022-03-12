import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/pages/Login/LoginScreen";
import Onboarding from "./src/pages/Onboarding/Onboarding";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as PaperProvider } from 'react-native-paper';

import configureStore from "./src/redux/store";
import LandingPageNavigation from "./src/pages/LandingPage/LandingPageNavigation";

const store = configureStore();
const Stack = createNativeStackNavigator();

const RootNaviagation = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} options={navigationOptions.loginOption}/>
            <Stack.Screen name="Onboarding" component={Onboarding} options={navigationOptions.OnboardingPageOptions} />
            <Stack.Screen name='LandingPageNavigation' component={LandingPageNavigation} options={navigationOptions.LandingPageNavigationOptions} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default RootNaviagation;

const navigationOptions = {
  restaurantOption: {
    title: "",
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: "#FFF2DF", // THIS NEED TO BE IN GLOBAL VARIABLE ### ATTENTION REQUIRED ###
      elevation: 0, // android shadow rate
      shadowOpacity: 0, // ios shadow rate
    },
  },
  loginOption: {
    headerShown: false,
  },
  LandingPageOptions: {
    headerShown: false
  },
  OnboardingPageOptions: {
    headerShown: false
  },
  LandingPageNavigationOptions: {
    headerShown: false
  }
}
