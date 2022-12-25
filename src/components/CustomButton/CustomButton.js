import {View, Text, StyleSheet, Pressable, TouchableOpacity} from "react-native";

const CustomButton = ({onPress, text, type = "primary"}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5,
        alignItems:"center",
        borderRadius: 5,
    },
    container_primary: {
        width:"100%",
        height:60,
        padding:20,
        backgroundColor: "#3B71F3",
    },
    container_territory: {
        width:"100%",
        height:60,
        padding:20,
    },
    text: {
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    text_territory: {
        color: "gray"
    }
})

export default CustomButton;
