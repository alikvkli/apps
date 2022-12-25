import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import Logo from "../../../assets/images/logo.png"
import CustomInput from "../../components/CustomInput";
import { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import MainLayout from "../../components/MainLayout/MainLayout";
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../services/auth-service";
import { clearErrorMessage } from "../../redux/appSlice";


const SignInScreen = () => {
    const errorMessage = useSelector(state => state.app.errorMessage);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { height } = useWindowDimensions();
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (errorMessage) {
            Toast.show({
                text1: "Hata",
                text2: errorMessage,
                type: "error",
                onHide: () => dispatch(clearErrorMessage())
            })
        }
    }, [errorMessage])




    const handleLogin = () => {
        if (telephone && password) {
            dispatch(Login({ phone: telephone, password }));
        } else {
            Toast.show({
                text1: "Uyarı",
                text2: "Lütfen telefon numarası ve şifrenizi giriniz!",
                type: "info",
            })
        }
    }
    const handleSignUp = () => {
        navigation.navigate("Kayıt Ol")
    }
    const forgotPassword = () => {
        navigation.navigate("Şifremi Unuttum")
    }
    return (
        <MainLayout>
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
            <CustomInput placeholder="Telefon Numarası" value={telephone} keyboardType="numeric" setValue={setTelephone}
                secureTextEntry={false} />
            <CustomInput placeholder="Şifre" value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomButton text="Giriş Yap" onPress={handleLogin} />
            <CustomButton text="Şifrenizi mi unuttunuz?" onPress={forgotPassword} type="territory" style={{ flex: 1 }} />
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    },
    footer: {
        backgroundColor:"red",
        marginTop: "auto"
    }
})

export default SignInScreen;
