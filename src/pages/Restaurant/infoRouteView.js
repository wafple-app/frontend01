import { View, Text, StyleSheet } from "react-native";

const InfoRouteView = () => {
    return (
        <View style={styles.container}>
            <Text>Info Route</Text>
        </View>
    );
};

export default InfoRouteView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});