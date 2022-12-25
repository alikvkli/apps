import { ActivityIndicator, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import Navigation from "../../navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { changeSplashState, LoggedIn } from "../../redux/appSlice";

const SplashScreen = () => {
    const dispatch = useDispatch();
    const splashLoading = useSelector((state) => state.app.splashLoading);
    const isLoggedIn = async () => {
        dispatch(changeSplashState(true))
        try {
            let userData = await AsyncStorage.getItem("userData");
            userData = JSON?.parse(userData);
            if (userData) {
                dispatch(LoggedIn(userData));
            }
            dispatch(changeSplashState(false))
        } catch (e) {
            console.log("error", e);
            dispatch(changeSplashState(false))
        }
    }
    useEffect(() => {
        isLoggedIn();
    }, [])
    return (
        <Fragment>
            {splashLoading === true ? (
                <MainLayout>
                    <ActivityIndicator size="large" color="#ffffff" />
                </MainLayout>
            ) : <Navigation />}
        </Fragment>

    )
}


export default SplashScreen;