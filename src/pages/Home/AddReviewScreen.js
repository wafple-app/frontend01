import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import globalStyles from "../../styles/common";
import { TextInput } from "react-native-paper";
import TopLogoView from "../../components/topLogoView";
import { Dimensions } from "react-native";

import ProfilePicture from "../../components/profilePicture";

import { menus as dummyMenus } from "../../../testingData";

const AddReviewScreen = (props) => {
  const { navigation } = props;
  const [search, setSearch] = useState("");

  const percent_100 = "100%";
  const screenWidth = Dimensions.get("window").width;

  const menus = dummyMenus.map((item, index) => {
    return (
      <TouchableOpacity
        key={"Item#" + index}
        style={{
          width: screenWidth / 3 - 18,
          maxWidth: percent_100,
          marginBottom: 10,
          marginRight: (index + 1) % 3 === 0 ? 0 : 10,
        }}
        onPress={() => navigation.navigate("Add Review", item)}
      >
        <View
          style={{
            marginBottom: 8,
            height: 60,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <ProfilePicture size={60} profileImg={item.food_url} />
          <Text style={{ width: 180, marginLeft: 10 }}>
            {item.restaurant.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  });

  let results = [];

  if (search !== "") {
    const other = dummyMenus.map(
      (item) =>
        item.restaurant.name.toLowerCase().includes(search.toLowerCase()) &&
        results.push({ ...item })
    );
  }

  const searchResults =
    results.length === 0 ? (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../../assets/no_restaurant.png")} />
        <TouchableOpacity
          key={"link"}
          onPress={() => {
            navigation.navigate("Add Restaurant", navigation);
          }}
        >
          <Text style={{ textDecorationLine: "underline", marginTop: 10 }}>
            Add Restaurant
          </Text>
        </TouchableOpacity>
      </View>
    ) : (
      results.map((item, index) => {
        console.log("item:", item);
        return (
          <TouchableOpacity
            key={"Item#" + index}
            style={{
              width: screenWidth / 3 - 18,
              maxWidth: percent_100,
              marginBottom: 10,
              marginRight: (index + 1) % 3 === 0 ? 0 : 10,
            }}
            onPress={() => {
              navigation.navigate("Add Review", item);
            }}
          >
            <View
              style={{
                marginBottom: 8,
                height: 60,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <ProfilePicture size={60} profileImg={item.food_url} />
              <Text style={{ width: 180, marginLeft: 10 }}>
                {item.restaurant.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })
    );

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.defaultBackground}>
        <TopLogoView />

        <View style={{ maxHeight: 65 }}>
          <TextInput
            style={{ height: 40, margin: 15 }}
            outlineColor="rgba(238, 87, 87, 0)"
            activeOutlineColor="rgba(238, 87, 87, 0)"
            activeUnderlineColor="#767680"
            placeholder="Search"
            defaultValue={search}
            left={<TextInput.Icon name="magnify" />}
            onChangeText={(text) => setSearch(text.toLowerCase())}
          />
        </View>

        <View
          style={{
            flex: 1,
          }}
        >
          {search !== "" ? (
            <ScrollView>{searchResults}</ScrollView>
          ) : (
            <ScrollView>
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    paddingTop: 6,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginLeft: 15,
                      marginBottom: 10,
                    }}
                  >
                    Add Review Near Restaurant
                  </Text>
                  {menus}
                </View>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
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

export default AddReviewScreen;
