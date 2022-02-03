import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/pages/Home/HomeScreen";
import DetailScreen from "./src/pages/Detail/DetailScreen";
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
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootNaviagation;
