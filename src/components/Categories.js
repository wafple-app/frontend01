import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    text: "Recommended",
  },
  {
    text: "Asian Foods",
  },
  {
    text: "Western Foods",
  },
  {
    text: "Fast Foods",
  },
  {
    text: "Japanese Foods",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
