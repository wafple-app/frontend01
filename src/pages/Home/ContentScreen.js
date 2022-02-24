import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

const contentScreen = ContentComponent => {
    return (
        <SafeAreaView style={styles.contentScreenStyle}>
            <ScrollView>
                {ContentComponent}
            </ScrollView>
        </SafeAreaView>
    );
};

export default contentScreen;

const styles = StyleSheet.create({
    contentScreenStyle: {
        flex: 1
    }
});