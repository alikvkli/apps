import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppointmentsScreen from "./AppointmentsScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createMaterialTopTabNavigator();
const ProfileScreen = () => {
    const routes = [
        {
            name: "Bilgilerim",
            component: SettingsScreen
        },
        {
            name: "Randevularım",
            component: AppointmentsScreen
        }
    ];
    return (
        <Tab.Navigator>
            {routes.map((item, index) => (
                <Tab.Screen name={item.name} component={item.component} key={index} />
            ))}
        </Tab.Navigator>
    )

}
export default ProfileScreen;