import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { menus as dummyMenus } from "../../../testingData";  // Make sure remove this.
import {Dimensions} from 'react-native';

{/* Hailey: make percent_100, screenWidth, screenHeight as common variables*/}
const percent_100 = '100%';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
// This Menus component only have one option for number of columns. That is 3.
const Menus = props => {
    const menus = dummyMenus.map((item, index) => {
        return (
            <View
                key={'menuItem#'+index}
                style={{
                    width: (screenWidth / 3) - 18 ,
                    maxWidth: percent_100 ,
                    marginBottom: 10,
                    marginRight: (index+1) % 3 === 0 ? 0 : 10,
                }}
            >
                <View>
                    <View style={{overflow:'hidden', paddingBottom: percent_100}}>
                        <Image source={item.food_url} style={{ width: percent_100, paddingBottom: percent_100, position: 'absolute', left: 0, borderRadius: 5}} />
                    </View>
                    {/* Hailey: need to change the Text style to styles.font14_R */}
                    <Text style={{ fontSize: 14, color: '#444', lineHeight: 24}}>{item.food_name}</Text>
                </View>
            </View>
        )
    });

    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View style={{
                    marginHorizontal: 16,
                    flex: 1,
                    flexWrap: 'wrap',
                    flexGrow: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingTop: 24
                }}>
                    {menus}
                </View>
            </View>
        </ScrollView>
    );
};

export default Menus;
