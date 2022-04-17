import * as React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'react-native-paper';
import { user } from '../../../testingData';

const Onboarding = props => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const userState = useSelector(state => state.userReducer);

    return (
        <SafeAreaView>
            <View>
                <Text>This is onboarding page.</Text>
                <Button onPress={() => { navigation.navigate('Login'); }} >Move to login page</Button>
                <Button onPress={() => { navigation.navigate('LandingPageNavigation'); }} >Move to landing page</Button>
                <Button onPress={() => {
                    console.log('login User');
                    dispatch({ type: 'userLogin', payload: user });
                    console.log('user state:', userState);
                }}>Fake user login</Button>
            </View>
        </SafeAreaView>
    )
};

export default Onboarding;