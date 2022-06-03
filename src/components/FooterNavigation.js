import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContentScreen from "../pages/Home/ContentScreen";
import Profile from "../pages/Profile/Profile";
import ProfileNavigation from "../pages/Profile/ProfileNavigation";

const FooterNavigation = (props) => {
  const Stack = createNativeStackNavigator();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      icon: require("../assets/wafple-home-icon.png"),
    },
    { key: "search", title: "Search", icon: "magnify" },
    // { key: "add_review", title: "Add Review", icon: "plus-circle-outline" },
    { key: "profile", title: "Profile", icon: "account-circle-outline" },
  ]);
  console.log(props);
  const HomeRoute = () => ContentScreen(<Text>Home</Text>);

  const SearchRoute = () => ContentScreen(<Text>Nearby</Text>);

  // const AddReviewRoute = () => ContentScreen(<Text>Add Review</Text>);

  // const ProfileRoute = () => ContentScreen(<Profile {...props} />);
  const ProfileRoute = () => <ProfileNavigation {...props} />;

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    // add_review: AddReviewRoute,
    profile: ProfileRoute,
  });

  return (
    <Stack.Navigator>
      <BottomNavigation
        activeColor="#EE5757"
        shifting={false}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.bottomNavigation}
      />
    </Stack.Navigator>
  );
};

export default FooterNavigation;

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: "#ffffff",
  },
});
