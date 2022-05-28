import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../styles/common";

import * as ImagePicker from "expo-image-picker";

const AddImage = ({ hideDialog, setPickedImagePath }) => {
  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      hideDialog();
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      hideDialog();
    }
  };

  return (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose the restaurant Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle} onPress={openCamera}>
          Take Photo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle} onPress={showImagePicker}>
          Choose From Library
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={hideDialog} style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddImage;

const styles = StyleSheet.create({
  ...globalStyles,

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
