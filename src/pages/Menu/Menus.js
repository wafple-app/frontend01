import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { menus as dummyMenus } from "../../../testingData";  // Make sure remove this.
  
// This Menus component only have one option for number of columns. That is 3.
const Menus = props => {
    const menus = dummyMenus.map((item, index) => {
        return (
            <View
                key={'menuItem#'+index}
                style={{
                    width: 108,
                    height: 128,
                    marginBottom: 10,
                    marginRight: (index+1) % 3 === 0 ? 0 : 10
                }}
            >
                <Image source={item.food_url} style={{ width: 108, height: 108 }} />
                <Text>{item.food_name}</Text>
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
                    width: 344,
                    flex: 1,
                    flexWrap: 'wrap',
                    flexGrow: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    // paddingHorizontal: 16,
                    paddingTop: 24
                }}>
                    {menus}
                </View>
            </View>
        </ScrollView>
    );
};

export default Menus;
