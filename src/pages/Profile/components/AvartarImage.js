import { Text, View, StyleSheet, Alert, Image, Dimensions, TouchableOpacity } from "react-native";

const AvatarImage = (props) => {
    const { imageName, selected } = props;

    return (
        <View style={styles.avatarContainer}>
            <TouchableOpacity>
                <Image style={styles.avatarImage} source={imageName}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    avatarContainer: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarImage: {
        width: 40,
        height: 40
    }
});

export default AvatarImage;