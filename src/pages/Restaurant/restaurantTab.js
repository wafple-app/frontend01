import React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useWindowDimensions, StyleSheet, View, Text } from 'react-native';
import InfoRouteView from './infoRouteView';
import MenuRouteView from './menuRouteView';

const MenuRoute = () => ( <MenuRouteView /> );
const InfoRoute = () => ( <InfoRouteView /> );

const renderScene = SceneMap({
    first: MenuRoute,
    second: InfoRoute,
});

const RestaurantTab = ( {...tabViewSettings} ) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Menu' },
      { key: 'second', title: 'Info' },
    ]);

    // COMPONENTS BELOW REQUIRED TO BE SEPERATED
    return (<TabView
        { ...tabViewSettings }
        style={ { flex: 8 } }
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#E85D04' }}
            style={{ backgroundColor: 'white', height: 55}}
            indicatorStyle={{ backgroundColor: '#E85D04', height: 5 }}
            renderLabel = {({ route, focused, color }) => {
                return (
                  <View>
                    <Text
                      style={[focused ? {color:"#E85D04"} : {color:"black"}]}
                    >
                      {route.title}
                    </Text>
                  </View>
                )
                }}
        />}
    />);
};

export default RestaurantTab;