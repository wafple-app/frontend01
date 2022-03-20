import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import globalStyles from "../../styles/common";
import { TextInput } from 'react-native-paper';
import RecentHistory from "../../components/recentHistory";

const SearchScreen = props => {
    const { navigation } = props;
    const [search, setSearch] = useState('Search');
    return (
        <SafeAreaView>
            {/* Search result content -start */}
            <StatusBar style="auto" />
            <View style={styles.defaultBackground}>
                <View style={{ paddingVertical: 10, maxHeight: 44, flex: 1, alignItems: 'center' }}>
                    <Image style={{ height: 24, width: 73 }} source={require("../../assets/wafple_letter_logo.png")} />
                </View>
                <View style={{ maxHeight: 65, }}>
                    <TextInput
                        style={{ height: 40, margin: 15 }}
                        activeOutlineColor='#767680'
                        outlineColor='rgba(238, 87, 87, 0)'
                        placeholder='Search'
                        defaultValue={search}
                        left={<TextInput.Icon name="magnify" />}
                    />
                </View>
                <View style={[styles.inr, styles.spaceBetween,]}>
                    <Text style={styles.font18_B}>
                    Recent History
                    </Text>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("Onboarding")}
                    >
                    <Text style={styles.removeAllbutton}>remove all</Text>
                    </TouchableOpacity>
                </View>

                <RecentHistory 
                    username = "Search History 1" 
                />
                <RecentHistory 
                    username = "Search History 2" 
                />
            </View>
            {/* Search result content -end*/}
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
        textDecorationLine: 'underline',
        color: "grey",
        borderRadius: 20
    }
});

export default SearchScreen;