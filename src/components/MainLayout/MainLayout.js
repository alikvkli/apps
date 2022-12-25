import { Fragment, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Toast from 'react-native-toast-message';
import { useSelector } from "react-redux";

const MainLayout = ({ children, direction = "center" }) => {
    const isLoading  = useSelector(state => state.app.isLoading);

    return (
        <ScrollView>
            <Spinner visible={isLoading} />
            <View style={[styles.root, styles[`root_${direction}`]]}>
                <View style={styles.notification}><Toast position="top" /></View>
                {children}
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20,
    },
    root_center: {
        alignItems: "center",
    },
    root_start: {
        alignItems: "flex-start"
    },
    notification: {
        zIndex: 9999
    }
})

export default MainLayout;