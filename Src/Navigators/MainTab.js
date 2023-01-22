import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "../Pages/HomeScreen";
import AboutScreen from "../Pages/AboutScreen";

const Tab = createBottomTabNavigator();

export default () => {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator> 
    )
}