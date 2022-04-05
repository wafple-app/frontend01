import React from "react";
import { StyleSheet, View, Image } from "react-native";
import globalStyles from "../styles/common";

const ProfilePicture = ({ size, pictureURL, profileImg }) => {
  return (
    <View style={[styles.mainView, { width: size, height: size }]}>
      <Image
        style={{ width: "100%", height: "100%", borderRadius: 25 }}
        source={profileImg ? profileImg : { url: pictureURL }}
      />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "rgba(247, 247, 247, 1)",
  },
});
