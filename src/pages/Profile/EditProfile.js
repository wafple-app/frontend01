import * as React from 'react';
import { useSelector } from "react-redux";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Alert, Image } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import globalStyles from "../../styles/common";
import ProfilePicture from '../../components/profilePicture';
import AvatarPanel from './components/AvatarPanel';

const MODAL_WIDTH = 260;

const EditProfile = ({ navigation }) => {
    const [showAvatarPanel, setShowAvatarPanel] = React.useState(false);
    const [isAndroid, setIsAndroid] = React.useState(false);

    const platform = useSelector((state) => state.platformReducer.platform.OS);
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    React.useEffect(() => {
        setIsAndroid(platform === "android");
    }, []);

    return (
        <>
            <View style={styles.topContainer(isAndroid)}>
                <View style={styles.topView}>
                    <ProfilePicture 
                        size={90}
                        pictureURL="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"
                    />
                    <View style={styles.cameraPlusView}>
                        <TouchableOpacity onPress={() => { setShowAvatarPanel(true); }}>
                            <Image
                                style={styles.cameraPlusImage}
                                source={require("../../assets/camera_plus.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {showAvatarPanel &&
                    <View
                        style={styles.avatarPanelContainer(screenWidth, isAndroid)}
                    >
                        <AvatarPanel setShowAvatarPanel={setShowAvatarPanel} />
                    </View>
                }
                <View style={styles.mainContainer}>
                    <Text style={{color:"grey", marginBottom:5}}>Nickname</Text>
                    <TextInput
                        style={{ height: 40, borderRadius: 10 }}
                        defaultValue={""}
                    />
                    <Text style={{color:"grey", marginBottom:5}}>Phone Number</Text>
                    <TextInput
                        style={{ height: 40, borderRadius: 10 }}
                        defaultValue={""}
                    />
                    <Text style={{color:"grey", marginBottom:5}}>Email</Text>
                    <TextInput
                        style={{ height: 40, borderRadius: 10 }}
                        defaultValue={""}
                    />
                    <Button 
                        onPress={()=>console.log("button")}
                        style={styles.saveButton}
                        mode="contained"
                    >
                        Save
                    </Button>
                    <Button 
                        onPress={()=>console.log("button")}
                        style={styles.logOutButton}
                    >
                        Log out
                    </Button>
                </View>
            </View>
        </>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    ...globalStyles,
    topContainer: (isAndroid) => ({
        paddingTop: isAndroid ? 0 : 90,
        backgroundColor:'white', 
        width:"100%", 
        height:"100%"
    }),
    topView:{
        backgroundColor: "#FEEFEF", 
        flex: 1, 
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarPanelContainer: (screenWidth, isAndroid) => ({
        top: isAndroid ? 150 : 250,
        left: (screenWidth - MODAL_WIDTH) / 2,
        zIndex: 3,
        elevation: 3,
        position: 'absolute',
        width: 260,
        height: 210,
        borderRadius: 10
    }),
    cameraPlusView: {
        backgroundColor: "white",
        borderRadius: 100,
        right: 22,
        top: 27
    },
    cameraPlusImage: {
        width: 23, 
        height: 23,
    },
    mainContainer:{
        flex: 3,
        padding: 15
    },
    saveButton: {
        marginTop:30,
        backgroundColor: "rgba(241, 128, 128, 1)",
    },
    logOutButton: {
        marginTop: 10,
        backgroundColor: "lightgrey",
    }
});
