import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Button } from 'react-native-paper';

const AddReviewScreen = props => {
    const { navigation } = props;

    return (
        <SafeAreaView>
            <View>
                <Text>This is Add Review Screen.</Text>
                <Button onPress={() => {navigation.goBack();}}>Go back</Button>
            </View>
        </SafeAreaView>
    );
};

export default AddReviewScreen;