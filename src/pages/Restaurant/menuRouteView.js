import { View, Text, StyleSheet } from "react-native";

const MenuRouteView = () => {
    return (
        <View style={styles.container}>
            <Text>Menu Route</Text>
        </View>
    );
};

export default MenuRouteView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});