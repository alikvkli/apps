import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomDropdown from "../../components/CustomDropdown";
import CustomCheckBox from "../../components/CustomCheckBox";
import MainLayout from "../../components/MainLayout/MainLayout";

const genders = ['Kadın', 'Erkek', 'Bilinmiyor'];

const SignUpScreen = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [kvkk, setKvkk] = useState(false);

    const handleSignUp = () => {

    }
    return (
        <ScrollView>
            <MainLayout direction="start">
                <Text style={styles.title}>Hesap Oluştur</Text>
                <CustomInput placeholder="E-posta" value={email} setValue={setEmail} />
                <CustomInput placeholder="Kullanıcı adı" value={email} setValue={setEmail} />
                <CustomInput placeholder="Telefon" value={phone} keyboardType="numeric"
                    setValue={setPhone}
                    secureTextEntry={false} />
                <CustomInput placeholder="Şifre" value={password} setValue={setPassword}
                    secureTextEntry={true} />
                <CustomInput placeholder="Ad" value={email} setValue={setEmail} />
                <CustomInput placeholder="Soyad" value={email} setValue={setEmail} />
                <CustomInput placeholder="T.C. kimlik no" value={email} setValue={setEmail} />
                <CustomInput placeholder="Doğum tarihi" value={email} setValue={setEmail} />
                <CustomDropdown placeholder="Cinsiyet" data={genders} />
                <CustomCheckBox value={kvkk} setValue={setKvkk} text="Kişisel verilerin korunması kanunu aydınlatma metnini okudum kabul ediyorum" />
                <CustomCheckBox value={kvkk} setValue={setKvkk} text="Üyelik sözleşmesini kabul ediyorum" />
                <CustomButton text="Kayıt Ol" onPress={handleSignUp} />
            </MainLayout>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "flex-start",
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#051C60",
        margin: 10
    },
})

export default SignUpScreen;
