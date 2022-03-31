import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../../styles/common";
import { TextInput } from "react-native-paper";
import RecentHistory from "../../components/recentHistory";
import TopLogoView from "../../components/topLogoView";
import Menus from "../Menu/Menus";
import { Dimensions } from "react-native";

import { menus as dummyMenus } from "../../../testingData";

const SearchScreen = (props) => {
  const { navigation } = props;
  const [search, setSearch] = useState("");

  const percent_100 = "100%";
  const screenWidth = Dimensions.get("window").width;

  const filteredMenus = dummyMenus.filter((item) => {
    item.restaurant.name.toLowerCase().includes(search);
    console.log(
      "search?",
      item.restaurant.name.toLowerCase().includes(search),
      "and key",
      search
    );
  });
  console.log("filteredMenus:", filteredMenus);

  const menus = dummyMenus.map((item, index) => {
    return (
      <TouchableOpacity
        key={"menuItem#" + index}
        style={{
          width: screenWidth / 3 - 18,
          maxWidth: percent_100,
          marginBottom: 10,
          marginRight: (index + 1) % 3 === 0 ? 0 : 10,
        }}
        onPress={() => {
          navigation.navigate("Menu", item);
        }}
      >
        <View>
          <View
            style={{
              overflow: "hidden",
              paddingBottom: percent_100,
              borderRadius: 5,
            }}
          >
            <Image
              source={item.food_url}
              style={{
                width: percent_100,
                paddingBottom: percent_100,
                position: "absolute",
                left: 0,
                borderRadius: 5,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.defaultBackground}>
        <TopLogoView />

        <View style={{ maxHeight: 65 }}>
          <TextInput
            style={{ height: 40, margin: 15 }}
            activeOutlineColor="#767680"
            outlineColor="rgba(238, 87, 87, 0)"
            placeholder="Search"
            defaultValue={search}
            left={<TextInput.Icon name="magnify" />}
            onChangeText={(text) => setSearch(text.toLowerCase())}
          />
        </View>

        {/* main menues -start*/}
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                marginHorizontal: 16,
                flex: 1,
                flexWrap: "wrap",
                flexGrow: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                paddingTop: 24,
              }}
            >
              {menus}
            </View>
          </View>
        </View>
        {/* main menues -end*/}

        {/* 
        Need to delete 
        <View style={[styles.inr, styles.spaceBetween]}>
          <Text style={styles.font18_B}>Recent History</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}>
            <Text style={styles.removeAllbutton}>remove all</Text>
          </TouchableOpacity>
        </View>

        <RecentHistory username="Search History 1" />
        <RecentHistory username="Search History 2" /> 
        */}
      </View>
      {/* 
            <View>
                <Text>This is Search Screen.</Text>
                <Button onPress={() => {navigation.goBack();}}>Go back</Button>
            </View> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ...globalStyles,
  removeAllbutton: {
    textDecorationLine: "underline",
    color: "grey",
    borderRadius: 20,
  },
});

export default SearchScreen;
