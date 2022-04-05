import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import globalStyles from "../../styles/common";
import { TextInput } from "react-native-paper";

import StarRating from "../../components/StarRating";
import StarRatingAnimate from "../../components/StarRatingAnimate";

const AddReviewScreen = (props) => {
  const { navigation } = props;
  const [isAndroid, setIsAndroid] = useState(false);
  const platform = useSelector((state) => state.platformReducer.platform.OS);

  const deviceHeight = Dimensions.get("window").height;
  const deviceWdith = Dimensions.get("window").width;

  useEffect(() => {
    setIsAndroid(platform === "android");
    // Get menus via API
  }, []);

  return (
    <SafeAreaView
      style={[styles.defaultBackground, { backgroundColor: "#F7F7F7" }]}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.retaurantView}>
          <View style={styles.restaurantImgContainer}>
            <View style={styles.restaurantImgView}>
              <Image
                style={{ width: 80, height: 80 }}
                source={{
                  uri: "https://www.freepnglogos.com/uploads/starbucks-logo-png-transparent-0.png",
                }}
              />
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <View style={styles.restaurantNameView}>
              <Text style={styles.restaurantNameText}>
                Starbucks (Kingsway)
              </Text>
            </View>
            <View style={styles.addressView}>
              <Text style={styles.addressText}>
                234 Kignsway St, Burnaby, BC
              </Text>
            </View>
            <View style={styles.restaurantRateView}>
              <StarRating
                rating={5}
                ratingCount={30}
                styles={{
                  icon: styles.ratingIcon,
                  rating: styles.rating,
                  ratingCount: styles.ratingCount,
                }}
              />
            </View>
          </View>
        </View>
        {/* This Part Below Needs to be modified  */}
        <View style={styles.reviewView}>
          <Text style={{ color: "grey", marginBottom: 5 }}>Photo</Text>
          <View
            style={{
              overflow: "hidden",
              borderRadius: 10,
              width: 120,
              height: 120,
              marginBottom: 10,
            }}
          >
            <Image
              style={{ width: 120, height: 120 }}
              source={{
                uri: "https://images.unsplash.com/photo-1615679953957-340c5cb38bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcmJ1Y2tzJTIwY29mZmVlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
              }}
            />
          </View>
          <Text style={{ color: "grey", marginBottom: 10 }}>Rating</Text>
          <View style={{ height: 30, marginBottom: 10 }}>
            <StarRatingAnimate />
          </View>
          <Text style={{ color: "grey", marginBottom: 5 }}>Menu</Text>
          <TextInput
            style={{ height: 40, borderRadius: 10, marginBottom: 10 }}
            defaultValue={""}
          />
          <Text style={{ color: "grey", marginBottom: 5 }}>Comment</Text>
          <TextInput
            style={{ height: 80, borderRadius: 10 }}
            defaultValue={"Share your comment"}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={
          isAndroid
            ? styles.androidViewRestuarantButton(deviceHeight, deviceWdith)
            : styles.iosViewRestuarantButton(deviceHeight, deviceWdith)
        }
        // TODO: Do something here.
        onPress={() => {
          console.log("do something");
        }}
      >
        <Text style={styles.viewRestaurantButtonText}>Save Review</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddReviewScreen;
const styles = StyleSheet.create({
  ...globalStyles,
  retaurantView: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    backgroundColor: "white",
    marginBottom: 7,
  },
  restaurantImgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  restaurantImgView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
  },
  restaurantNameView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  restaurantNameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addressView: {
    flex: 1,
    justifyContent: "flex-start",
  },
  addressText: {
    color: "grey",
  },
  restaurantRateView: {
    flex: 1,
  },
  reviewView: {
    backgroundColor: "white",
    padding: 10,
    height: 1000,
  },
  ratingIcon: {
    height: 18,
    width: 18,
  },
  rating: {
    fontSize: 18,
    color: "black",
  },
  ratingCount: {
    fontSize: 18,
    color: "#EE5757",
  },
  androidViewRestuarantButton: (deviceHeight, deviceWdith) => ({
    position: "absolute",
    // Device height - height of button - bottom margin that we want to get top margin
    top: deviceHeight - 54 - 106,
    // Device width - width of button / 2 to get left margin
    left: (deviceWdith - 343) / 2,
    backgroundColor: "#F88585",
    height: 54,
    width: 343,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }),
  iosViewRestuarantButton: (deviceHeight, deviceWdith) => ({
    position: "absolute",
    // Device height - height of button - bottom margin that we want to get top margin
    top: deviceHeight - 54 - 106,
    // Device width - width of button / 2 to get left margin
    left: (deviceWdith - 343) / 2,
    backgroundColor: "#F88585",
    height: 54,
    width: 343,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }),
  viewRestaurantButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
