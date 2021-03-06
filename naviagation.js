import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/pages/Login/LoginScreen";
import Onboarding from "./src/pages/Onboarding/Onboarding";
import FoodReviews from "./src/pages/Menu/FoodReviews";
import EditProfile from "./src/pages/Profile/EditProfile";
import FoodDetail from "./src/pages/Menu/FoodDetail";
import UserDetail from "./src/pages/Detail/UserDetail";
import RestaurantDetail from "./src/pages/Restaurant/RestaurantDetail";
import AddReviewScreen from "./src/pages/Home/AddReviewScreen";
import CreateReview from "./src/pages/Review/CreateReview";
import CreateRestaurant from "./src/pages/Review/CreateRestaurant";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";

import configureStore from "./src/redux/store";
import LandingPageNavigation from "./src/pages/LandingPage/LandingPageNavigation";

const store = configureStore();
const Stack = createNativeStackNavigator();

const RootNaviagation = () => {
  store.dispatch({ type: "setPlatform", payload: Platform });

  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={navigationOptions.loginOption}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={navigationOptions.OnboardingPageOptions}
            />
            <Stack.Screen
              name="LandingPageNavigation"
              component={LandingPageNavigation}
              options={navigationOptions.LandingPageNavigationOptions}
            />
            <Stack.Screen
              name="FoodReviews"
              component={FoodReviews}
              options={navigationOptions.FoodReveiwsPageNavigationOptions}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={navigationOptions.EditProfilePageNavigationOptions}
            />
            <Stack.Screen
              name="UserDetail"
              component={UserDetail}
              options={navigationOptions.foodDetailOptions}
            />
            <Stack.Screen
              name="FoodDetail"
              component={FoodDetail}
              options={navigationOptions.foodDetailOptions}
            />
            <Stack.Screen
              name="Search Restaurant"
              component={AddReviewScreen}
              options={navigationOptions.AddReviewScreen}
            />
            <Stack.Screen
              name="Add Review"
              component={CreateReview}
              options={navigationOptions.CreateReview}
            />
            <Stack.Screen
              name="Add Restaurant"
              component={CreateRestaurant}
              options={navigationOptions.CreateRestaurant}
            />
            <Stack.Screen
              name="RestaurantDetail"
              component={RestaurantDetail}
              options={navigationOptions.restaurantDetailOptions}
            />
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
    headerShown: false,
  },
  OnboardingPageOptions: {
    headerShown: false,
  },
  LandingPageNavigationOptions: {
    headerShown: false,
  },
  FoodReveiwsPageNavigationOptions: {
    headerShown: false,
  },
  UserDetailPageNavigationOptions: {
    headerStyle: {
      backgroundColor: "#FEEFEF",
    },
    justifyContent: "center",
    alignItems: "center",
  },
  EditProfilePageNavigationOptions: {
    headerStyle: {
      backgroundColor: "#FEEFEF",
    },
    justifyContent: "center",
    alignItems: "center",
  },
  foodDetailOptions: {
    headerShown: false,
  },
  restaurantDetailOptions: {
    headerShown: false,
  },
  AddReviewScreen: {
    headerShown: false,
  },
  CreateReview: {
    headerStyle: {
      backgroundColor: "white",
    },
  },
  CreateRestaurant: {
    headerStyle: {
      backgroundColor: "white",
    },
  },
};
