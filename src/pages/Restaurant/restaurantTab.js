import React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useWindowDimensions, StyleSheet } from 'react-native';
import InfoRouteView from './infoRouteView';
import MenuRouteView from './menuRoute';

const MenuRoute = () => ( <MenuRouteView /> );
const InfoRoute = () => ( <InfoRouteView /> );

const renderScene = SceneMap({
    first: MenuRoute,
    second: InfoRoute,
});

// const renderTabBar = props => {
//     return (
//       <TabBar
//         {...props}
//         renderLabel={({ focused, route }) => {
//           return (
//             <TextView
//               size={20}
//               category="Medium"
//               color={focused ? 'BLACK' : 'GRAY3'}>
//               {route.title}
//             </TextView>
//           );
//         }}
//         indicatorStyle={styles.indicatorStyle}
//         style={styles.tabBar}
//       />
//     );
// };

const RestaurantTab = ( {...tabViewSettings} ) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Menu' },
      { key: 'second', title: 'Info' },
    ]);

    return (<TabView
        { ...tabViewSettings }
        // style={ styles.viewBar }
        style={ { flex: 8 } }
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        // renderTabBar={renderTabBar}
    />);
};

export default RestaurantTab;

// const styles = StyleSheet.create({
//     viewBar: {
//         flex: 8,
//         backgroundColor: "white",
//     }
// });