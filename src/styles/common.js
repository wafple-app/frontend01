import { StyleSheet, StatusBar  } from "react-native";

const globalStyles = {
    //common style
    defaultBackground: {
        backgroundColor:'white', 
        width:"100%", 
        height:"100%",
        paddingTop: StatusBar.currentHeight,
    },
    inr: {
        height: 46,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative'
    },
    positionRight: {
    position: 'absolute',
    right: 0,
    top: 15,
    },
    positionLeft: {
        position: 'absolute',
        left: 0,
        top: 10,
    },
    font16_R : {
        fontSize: 16, 
        color: '#222'
    },
    font14_R : {
        fontSize: 14, 
        color: '#444',
        lineHeight: 24
    },
    font18_B : {
        fontSize: 18, 
        fontWeight: '700',
        color: '#222'
    },
    spaceBetween : {
    justifyContent: 'space-between'
    },
};

export default globalStyles;