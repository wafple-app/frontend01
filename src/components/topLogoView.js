import React from "react";
import { View, Image, StyleSheet } from "react-native";

const TopLogoView = () => {
    return (
        <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
            <View style={ styles.topLogoView }>
                <Image 
                    style={{ height: 24, width: 73 }} 
                    source={require("../assets/wafple_letter_logo.png")} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topLogoView: {
        paddingVertical: 10, 
        maxHeight: 44, 
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },  
});

export default TopLogoView;