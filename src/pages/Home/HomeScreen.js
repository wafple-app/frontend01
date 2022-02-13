import React from "react";
import { View, FlatList, ScrollView } from "react-native";
import Searchbar from "../../components/Searchbar";
import Header from "../../components/Header";
import Categories from "../../components/Categories";
import FoodItem from "./FoodItem";

const mockFoods = [
  {
    name: "Lasagna",
    index: 1,
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    name: "Tandoori Chicken",
    index: 2,
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    name: "Chilaquiles",
    index: 3,
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
];

function HomeScreen({ navigation }) {
  return (
    <View>
      <Header />
      <Searchbar />
      <Categories />

      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-around" }}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={mockFoods}
          renderItem={({ item }) => {
            return <FoodItem food={item} />;
          }}
        />
      </ScrollView>

      {/* 
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="Go to Restaurant"
        onPress={() => navigation.navigate("Restaurant")}
      />
      <Button
        title="Go to Landing Page"
        onPress={() => navigation.navigate("LandingPage")}
      /> */}
    </View>
  );
}

export default HomeScreen;
