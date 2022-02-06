import * as React from 'react';
import { StyleSheet } from "react-native";
import { BottomNavigation, Text } from 'react-native-paper';
import ContentScreen from '../pages/Home/ContentScreen';
import Profile from '../pages/Profile/Profile';

const HomeRoute = () => ContentScreen(<Text>Home</Text>);

const SearchRoute = () => ContentScreen(<Text>Search</Text>);

const AddReviewRoute = () => ContentScreen(<Text>Add Review</Text>);

const ProfileRoute = () => ContentScreen(<Profile />);

const FooterNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'search', title: 'Search', icon: 'magnify' },
    { key: 'add_review', title: 'Add Review', icon: 'plus-circle-outline' },
    { key: 'profile', title: 'Profile', icon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    add_review: AddReviewRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      shifting={false}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.bottomNavigation}
    />
  );
};

export default FooterNavigation;

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: '#ffffff'
  }
});