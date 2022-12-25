import {View, Text, StyleSheet} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CustomCheckBox = ({value, setValue, text, disabled = false}) => {
    return (
        <View style={styles.container}>
            <BouncyCheckbox
                onPress={(isChecked) => setValue(!value)}
                fillColor="#008631"
                textStyle={{textDecorationLine: "none"}}
                isChecked={value}
                text={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
})

export default CustomCheckBox;
