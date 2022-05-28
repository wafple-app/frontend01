import * as React from 'react';
import { useSelector } from "react-redux";
import { Text, View, StyleSheet, Alert, Image, Dimensions, TouchableOpacity } from "react-native";
import AvatarContainer from './AvatarContainer';

const MODAL_WIDTH = 260;
const AVARTAR_IMAGES = [
    require('../../../assets/wafple_profile_icon_default.png'),
    require('../../../assets/wafple_profile_icon_1.png'),
    require('../../../assets/wafple_profile_icon_2.png'),
    require('../../../assets/wafple_profile_icon_3.png'),
    require('../../../assets/wafple_profile_icon_4.png'),
    require('../../../assets/wafple_profile_icon_5.png'),
    require('../../../assets/wafple_profile_icon_6.png'),
    require('../../../assets/wafple_profile_icon_7.png')
];

const AvatarPanel = ( props ) => {
    const [isAndroid, setIsAndroid] = React.useState(false);
    const platform = useSelector((state) => state.platformReducer.platform.OS);

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    React.useEffect(() => {
        setIsAndroid(platform === "android");
    }, []);

    return (
        <View style={styles.container(screenWidth, screenHeight, isAndroid)}>
            <View style={styles.headerContainer}>
                <View style={styles.leftHeaderPlaceHolder}></View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Choose your Avatar</Text>
                </View>
                <TouchableOpacity style={{ zIndex: 3, elevation: 3, width: 20, height: 20, marginRight: 6 }} onPress={() => { console.log("clicked"); props.setShowAvatarPanel(false); }}>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../../../assets/icon-close-circle-outline.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <AvatarContainer />
            </View>
            <TouchableOpacity style={styles.footerContainer} onPress={() => { console.log("clicked"); props.setShowAvatarPanel(false); }}>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerTextStyle}>Save</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: (screenWidth, screenHeight, isAndroid) => ({
        // position: 'absolute',
        // padding: 5,
        // flex: 1,
        // top: isAndroid ? 150 : 250,
        // left: (screenWidth - MODAL_WIDTH) / 2,
        width: MODAL_WIDTH,
        height: 210,
        backgroundColor: 'white',
        zIndex: 3,      // IOS
        elevation: 3,   // Android
        borderRadius: 10
    }),
    headerContainer: {
        height: 20,
        // flex: 1,
        // 20 + 20 - 260
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 13,
        // alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    leftHeaderPlaceHolder: {
        width: 20
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        // marginLeft: 'auto',
        // marginRight: 'auto',
        padding: 0,
        margin: 0,
        fontSize: 12,
        fontWeight: '400'
    },
    footerContainer: {
        height: 32,
        backgroundColor: '#EE5757',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    footerTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerTextStyle:{
        margin: 0,
        padding: 0,
        fontSize: 14,
        fontWeight: '600',
        color: 'white'
    }
});

export default AvatarPanel;
