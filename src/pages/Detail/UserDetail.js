import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button } from "react-native-paper";
import globalStyles from "../../styles/common";
import MeasurePoint from "../Profile/components/measurePoint";
import ProfilePicture from "../../components/profilePicture";

const UserDetail = ({ navigation, route }) => {
  console.log("route:", route);
  return (
    <View style={styles.defaultBackground}>
      <View style={styles.topView}>
        <View style={{ flex: 1 }}>
          <View style={styles.profileView}>
            <ProfilePicture
              size={90}
              pictureURL="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"
            />
          </View>
          <View style={styles.editProfileView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("EditProfile");
              }}
            >
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>John Doesdafg</Text>
          </View>
          <View style={{ flex: 3, flexDirection: "row" }}>
            <MeasurePoint number="1k" name="Reviews" />
            <MeasurePoint number="5.0" name="Ratings" />
            <MeasurePoint number="12" name="Creations" />
          </View>
        </View>
      </View>
      <View style={{ flex: 6, marginTop: 15, alignItems: "center" }}></View>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  ...globalStyles,
  topView: {
    backgroundColor: "#FEEFEF",
    flex: 3,
    flexDirection: "row",
  },
  profileView: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  editProfileView: {
    flex: 1,
    alignItems: "center",
  },
  editProfileText: {
    color: "grey",
    textDecorationLine: "underline",
    fontSize: 14,
  },
  nameView: {
    flex: 2,
    justifyContent: "flex-end",
    left: 15,
  },
  nameText: {
    fontSize: 20,
  },
});
