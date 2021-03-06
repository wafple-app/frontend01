import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Constants from "expo-constants";
import Menu from "./FoodReviews";

import { getAllMenus } from "../../apis/apis";

{
  /* Hailey: make percent_100, screenWidth, screenHeight as common variables*/
}
const percent_100 = "100%";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
// This Menus component only have one option for number of columns. That is 3.
const Menus = (props) => {
  const { navigation } = props;
  const [fetchedMenus, setFetchedMenus] = useState([]);
  const [isMenuLoaded, setIsMenuLoaded] = useState(false);

  // const getMenus = async () => {
  //   const { API_BASE_URL } = Constants.manifest.extra.env;
  //   console.log("API_BASE_URL:", API_BASE_URL);

  //   try {
  //     fetch(`${API_BASE_URL}/foods`)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log("json:", json);
  //         setFetchedMenus(json.result);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsMenuLoaded(true);
  //   }
  // };

  const getMenus = async () => {
    try {
      const menus = await getAllMenus();
      setFetchedMenus(menus);
    } catch (error) {
      console.log(error);
    } finally {
      setIsMenuLoaded(true);
    }
  };

  useEffect(() => {
    getMenus();
  }, []);

  const menus = fetchedMenus?.map((item, index) => {
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
          navigation.navigate("FoodDetail", item);
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
              source={{ uri: item.food_url }}
              style={{
                width: percent_100,
                paddingBottom: percent_100,
                position: "absolute",
                left: 0,
                borderRadius: 5,
              }}
            />
          </View>
          {/* Hailey: need to change the Text style to styles.font14_R */}
          <Text style={{ fontSize: 14, color: "#444", lineHeight: 24 }}>
            {item.food_name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView>
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
          {isMenuLoaded ? (
            menus
          ) : (
            <View>
              <ActivityIndicator size="large" color="#EE5764" />
              <Text>Loading</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Menus;
