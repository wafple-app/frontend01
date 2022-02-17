import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Button } from 'react-native-paper';

const Onboarding = props => {
    const { navigation } = props;

    return (
        <SafeAreaView>
            <View>
                <Text>This is onboarding page.</Text>
                <Button onPress={() => {navigation.navigate('LandingPageNavigation');}} >Move to ladning page</Button>
            </View>
        </SafeAreaView>
    )
};

export default Onboarding;