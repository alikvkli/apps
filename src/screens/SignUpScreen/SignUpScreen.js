import {Text, View, Image, StyleSheet, useWindowDimensions} from "react-native";
import Logo from "../../../assets/images/logo.png"
import CustomInput from "../../components/CustomInput";
import {useState} from "react";
import CustomButton from "../../components/CustomButton";

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const [telephone,setTelephone] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = () => {
        console.warn("login")
    }
    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
            <CustomInput placeholder="Telefon Numarası" value={telephone} keyboardType="numeric" setValue={setTelephone} secureTextEntry={false}/>
            <CustomInput placeholder="Şifre" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton text="Giriş Yap" onPress={handleLogin}/>
            <CustomButton text="Şifrenizi mi unuttunuz?" onPress={handleLogin} type="territory"/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    }
})

export default SignInScreen;
