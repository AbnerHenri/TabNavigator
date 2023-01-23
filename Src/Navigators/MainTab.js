import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Done from "../Pages/Done";
import Todo from "../Pages/Todo";
import Today from '../Pages/Today';
import TabBar from '../Components/TabBar'

const Tab = createBottomTabNavigator();

export default () => {
    return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Done" component={Done} />
        <Tab.Screen name="Today" component={Today} />
        <Tab.Screen name="ToDo" component={Todo} />
    </Tab.Navigator> 
    )
}