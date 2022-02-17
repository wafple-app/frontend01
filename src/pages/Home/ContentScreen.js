import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const contentScreen = ContentComponent => {
    return (
        <SafeAreaView style={styles.contentScreenStyle}>
            {ContentComponent}
        </SafeAreaView>
    );
};

export default contentScreen;

const styles = StyleSheet.create({
    contentScreenStyle: {
        flex: 1
    }
});