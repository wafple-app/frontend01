import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

const Searchbar = () => {
  return (
    <View>
      <TextInput label="Search" left={<TextInput.Icon name="magnify" />} />
    </View>
  );
};

export default Searchbar;
