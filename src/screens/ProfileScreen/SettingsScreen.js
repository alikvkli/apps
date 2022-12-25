import { useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../../components/CustomButton";
import MainLayout from "../../components/MainLayout";
import { Logout } from "../../redux/appSlice";

const SettingsScreen = () => {
    const userData = useSelector(state => state.app.userData);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(Logout())
    }
    useEffect(() => {
        console.log(userData);
    }, [userData])
    return (
        <MainLayout direction="start">
            <Text style={styles.title}>Kişisel Bilgilerim</Text>

            <View style={styles.card_container}>
                <View style={styles.header}>
                    <Image source={{ uri: "https://ceptesaglik.com/assets/img/no-image.jpg" }} style={styles.avatar} />
                    <View style={styles.flex_row}>
                        <View>
                            <Text style={styles.text}>{userData?.name} {userData?.surname}</Text>
                            <Text style={{ color: "gray" }}>{userData?.username}</Text>
                        </View>
                        <Text>Bakiye : {userData?.balance}₺</Text>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "column", marginLeft: 5, marginTop: 10 }}>
                    <Text style={styles.text}>Boy : {userData?.bio?.uye?.boy}</Text>
                    <Text style={styles.text}>Kilo : {userData?.bio?.uye?.kilo}</Text>
                    <Text style={styles.text}>Kan Grubu : {userData?.bio?.uye?.kangrubu}</Text>
                </View>
            </View>

            <Text style={styles.title}>Hastalıklarım</Text>
            <View style={styles.card_container}>
                <View style={{ display: "flex", flexDirection: "column", marginLeft: 5, marginTop: 10 }}>
                    {Object?.values(userData?.bio_illness?.hastalik)?.map((item, i) => (
                        <Text style={styles.text} key={i}>{item?.hastalikAdi}</Text>
                    ))}
                </View>
            </View>

            <Text style={styles.title}>İlaçlarım</Text>
            <View style={styles.card_container}>
                <View style={{ display: "flex", flexDirection: "column", marginLeft: 5, marginTop: 10 }}>
                    {Object.values(userData?.bio_medicine?.ilac)?.map((item, i) => (
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} key={i}>
                            <Text style={styles.text} >{item?.ilacAdi}</Text>
                            <Text style={styles.text}>{item?.ilacDoz}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <CustomButton text="Çıkış Yap" onPress={handleLogout} />

        </MainLayout>
    )
}
const styles = StyleSheet.create({
    card_container: {
        flex: 1,
        backgroundColor: "#ffffff",
        width: "100%",
        padding: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        borderRadius: 5,
        shadowOpacity: 0.2,
        marginVertical: 5
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#051C60",
        marginVertical: 10
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderColor: "#3B71F3",
        borderWidth: 3
    },
    header: {
        display: "flex",
        flexDirection: "row",
    },
    flex_row: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    text: {
        marginTop: 2,
        fontSize: 17
    }

})

export default SettingsScreen;