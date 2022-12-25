import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();


const BottomNavigation = () => {
    const routes = [
        {
            name: "Anasayfa",
            component: HomeScreen,
            focusIcon: 'home',
            defaultIcon: 'home-outline'
        },
        {
            name: "Hesabım",
            component: ProfileScreen,
            focusIcon: 'person-circle',
            defaultIcon: 'person-circle-outline'
        }
    ];

    return (
        <Tab.Navigator initialRouteName="Anasayfa" screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                const findRoute = routes.find(i => i.name === route.name);
                return <Ionicons name={focused ? findRoute.focusIcon : findRoute.defaultIcon} size={size} color={color} />
            },
            tabBarButton: (props) => <TouchableOpacity  {...props} />
        })}

        >
            {routes.map((item, index) => (
                <Tab.Screen name={item.name} component={item.component} key={index} />
            ))}
        </Tab.Navigator>
    )
}

export default BottomNavigation;