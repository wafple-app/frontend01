import * as React from 'react';
import { Text, View } from "react-native";
import { Button } from 'react-native-paper';

const Profile = ({navigation}) => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'space-between'}}>
                <Text style={{backgroundColor: 'blue'}}>This is the profile page</Text>
                <Button onPress={() => {navigation.navigate("MenuPage");}}>
                    Test
                </Button>
            </View>
        </View>
    );
};

export default Profile;
