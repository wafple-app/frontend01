import * as React from 'react';
import { SafeAreaView } from 'react-native';

const contentScreen = ContentComponent => {
    return (
        <SafeAreaView>
            {ContentComponent}
        </SafeAreaView>
    );
};

export default contentScreen;