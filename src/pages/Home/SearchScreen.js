import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import globalStyles from "../../styles/common";
import { Button, TextInput } from 'react-native-paper';

const SearchScreen = props => {
    const { navigation } = props;
    const [location, setLocation] = useState('Search');
    return (
        <SafeAreaView>
            {/* Search result content -start */}
            <View>
                <View style={styles.recentHistoryTop}>
                <View style={[styles.inr, styles.spaceBetween]}>
                    <Text style={styles.font18_B}>
                    Recent History
                    </Text>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("Onboarding")}
                    >
                    <Text style={styles.skipText}>Skip now</Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View>
                <View style={[styles.inr, {marginBottom: 10, height: 60}]}>
                    <Image style={[{ height: 60, width: 60 }, styles.borderCircle]} source={require("../../assets/wafple-profle-sampleImg.png")} />
                    <Text style={[{marginLeft: 10}, styles.font16_R]}>Wafple User</Text>
                    <TouchableOpacity style={styles.hidden}>
                    <Image style={{ height: 16, width: 16 }} source={require("../../assets/icon-reflesh.png")} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.inr, {marginBottom: 10, height: 60}]}>
                    <Image style={[{ height: 60, width: 60 }, styles.borderCircle]} source={require("../../assets/wafple-profle-sampleImg.png")} />
                    <Text style={[{marginLeft: 10}, styles.font16_R]}>Wafple User</Text>
                    <TouchableOpacity style={styles.positionRight}>
                    <Image style={{ height: 16, width: 16 }} source={require("../../assets/icon-reflesh.png")} />
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            {/* Search result content -end*/}
            {/* <View style={{ paddingVertical: 10, maxHeight: 44, flex: 1, alignItems: 'center' }}>
                <Image style={{ height: 24, width: 73 }} source={require("../../assets/wafple_letter_logo.png")} />
            </View>
            <View style={{ maxHeight: 40, margin:25 }}>
                <TextInput
                mode='outlined'
                style={{ height: 40 }}
                activeOutlineColor='#767680'
                outlineColor='rgba(238, 87, 87, 0)'
                placeholder='Location'
                defaultValue={location}
                left={<Image style={{ width:23, height: 23 }} source={require("../../assets/wafple_marker_icon.png")} />}
                />
            </View>
            <View>
                <Text>This is Search Screen.</Text>
                <Button onPress={() => {navigation.goBack();}}>Go back</Button>
            </View> */}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    ...globalStyles
});

export default SearchScreen;