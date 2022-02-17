import React, { useState } from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import { TextInput, Button } from "react-native-paper";

function HomeScreen({ navigation }) {
  // Need to fix the default to current location
  const [location, setLocation] = useState('234 Kingsway, Burnaby');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View> */}
      <View style={{ paddingVertical: 10, maxHeight: 44, flex: 1, alignItems: 'center' }}>
        <Image style={{ height: 24, width: 73 }} source={require("../../assets/wafple_letter_logo.png")} />
      </View>
      <View style={{ maxHeight: 50 }}>
        <TextInput
          mode='outlined'
          style={{ height: 46, backgroundColor: 'rgba(238, 87, 87, 0.1)' }}
          activeOutlineColor='#EE5757'
          outlineColor='rgba(238, 87, 87, 0)'
          placeholder='Location'
          defaultValue={location}
          left={<Image style={{ width:23, height: 23 }} source={require("../../assets/wafple_marker_icon.png")} />}
        />
      </View>
      {/* <View style={{ flex: 1, backgroundColor: 'green'}}>
        <Text>Picture</Text>
      </View> */}
        {/* <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="Go to Restaurant"
          onPress={() => navigation.navigate("Restaurant")}
        />
        <Button
          title="Go to Landing Page"
          onPress={() => navigation.navigate("LandingPage")}
        /> */}
      {/* </View> */}
    </SafeAreaView>
  );
}

export default HomeScreen;
