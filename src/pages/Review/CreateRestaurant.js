import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import globalStyles from "../../styles/common";
import { TextInput, Dialog, Portal, Button } from "react-native-paper";

const CreateRestaurant = (props) => {
  const { navigation } = props;
  const [isAndroid, setIsAndroid] = useState(false);
  const [showBox, setShowBox] = useState(true);
  const platform = useSelector((state) => state.platformReducer.platform.OS);

  const deviceHeight = Dimensions.get("window").height;
  const deviceWdith = Dimensions.get("window").width;

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  useEffect(() => {
    setIsAndroid(platform === "android");
    // Get menus via API
  }, []);

  const showConfirmDialog = () => {
    return Alert.alert("Want to add Review?", "you will move to review Page", [
      {
        text: "Cancel",
      },
      {
        text: "Continue",
        onPress: () => {
          navigation.navigate("Add Review");
        },
      },
    ]);
  };

  return (
    <SafeAreaView
      style={[styles.defaultBackground, { backgroundColor: "#F7F7F7" }]}
    >
      <ScrollView style={styles.scrollView}>
        {/* This Part Below Needs to be modified  */}
        <View style={styles.reviewView}>
          <Text style={{ color: "grey", marginBottom: 5 }}>Photo</Text>
          <TouchableOpacity style={{ border: "none" }} onPress={showDialog}>
            <View
              style={{
                height: 150,
                borderStyle: "dashed",
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "grey",
                marginBottom: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome name={"image"} size={32} />

              {/* <Image
              style={{ width: 120, height: 120 }}
              source={{
                uri: "https://images.unsplash.com/photo-1615679953957-340c5cb38bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcmJ1Y2tzJTIwY29mZmVlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
              }}
            /> */}
            </View>
          </TouchableOpacity>

          <Text style={{ color: "grey", marginBottom: 5 }}>Name</Text>
          <TextInput
            style={{ height: 40, borderRadius: 10, marginBottom: 10 }}
            defaultValue={""}
          />

          <Text style={{ color: "grey", marginBottom: 5 }}>Street</Text>
          <TextInput
            style={{ height: 60, borderRadius: 10, marginBottom: 10 }}
            defaultValue={""}
          />

          <Text style={{ color: "grey", marginBottom: 5 }}>City</Text>
          <TextInput
            style={{ height: 40, borderRadius: 10, marginBottom: 10 }}
            defaultValue={""}
          />

          <Text style={{ color: "grey", marginBottom: 5 }}>
            Province/Coutry
          </Text>
          <TextInput
            style={{ height: 40, borderRadius: 10, marginBottom: 10 }}
            defaultValue={""}
          />

          <Text style={{ color: "grey", marginBottom: 5 }}>Phone Number</Text>
          <TextInput
            style={{ height: 40, borderRadius: 10, marginBottom: 10 }}
            defaultValue={""}
          />
        </View>
      </ScrollView>

      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <View style={styles.panel}>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>
                  Choose the restaurant Picture
                </Text>
              </View>
              <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.panelButton} onPress={hideDialog}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Dialog>
        </Portal>
      </View>

      <View style={styles.alertScreen}>{showBox}</View>

      <TouchableOpacity
        style={
          isAndroid
            ? styles.androidViewRestuarantButton(deviceHeight, deviceWdith)
            : styles.iosViewRestuarantButton(deviceHeight, deviceWdith)
        }
        // TODO: Do something here.
        onPress={() => showConfirmDialog()}
      >
        <Text style={styles.viewRestaurantButtonText}>Add Restaurant</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateRestaurant;
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

  alertScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#F88585",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
