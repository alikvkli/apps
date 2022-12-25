import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import { useSelector } from "react-redux";
import BottomNavigation from "./BottomNavigation";
const Stack = createNativeStackNavigator();


const Navigation = () => {
    const signIn = useSelector(state => state.app.signIn);
    return (
        <NavigationContainer>
            {signIn ? (
                <BottomNavigation/>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name="Giriş Yap" component={SignInScreen} />
                    <Stack.Screen name="Kayıt Ol" component={SignUpScreen} />
                    <Stack.Screen name="Şifremi Unuttum" component={ForgotPasswordScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    )
}

export default Navigation;
