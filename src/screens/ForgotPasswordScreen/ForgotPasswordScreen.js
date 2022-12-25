import { useState } from "react"
import { View, Image, StyleSheet, useWindowDimensions } from "react-native"
import Logo from "../../../assets/images/logo.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput"
import { useNavigation } from "@react-navigation/native";
import MainLayout from "../../components/MainLayout/MainLayout";
import Toast from 'react-native-toast-message';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const [phone, setPhone] = useState("");
    const handleResetPassword = () => {
        Toast.show({
            type: 'success',
            text1: "Başarılı",
            text2: "Şifreniz sıfırlanmıştır. Giriş yapabilirsiniz.",
            visibilityTime:1500,
            onHide: () => navigation.navigate("Giriş Yap")
        });
    }
    return (
        <MainLayout>
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
            <CustomInput
                placeholder="Telefon"
                value={phone}
                keyboardType="numeric"
                setValue={setPhone}
                secureTextEntry={false}
            />
            <CustomButton text="Şifreyi Sıfırla" onPress={handleResetPassword} />

        </MainLayout>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    },
})
export default ForgotPasswordScreen;