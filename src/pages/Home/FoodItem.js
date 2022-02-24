import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const FoodItem = ({ food }) => {
  return (
    <TouchableOpacity key={food.index} activeOpacity={1}>
      <View key={food.index} style={{ padding: 8, backgroundColor: "white" }}>
        <RestaurantImage image={food.image} />
        <RestaurantInfo name={food.name} />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 100 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <Text>5.0</Text>
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
    </View>
  </View>
);

export default FoodItem;
