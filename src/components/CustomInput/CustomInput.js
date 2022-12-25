import {Text, View, TextInput, StyleSheet, TouchableOpacity} from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry, keyboardType}) => {
    return (
        <TouchableOpacity style={styles.container}>
                <TextInput
                    value={value}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    onChangeText={setValue}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    autoFocus={true}
                    style={styles.input}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: '100%',
        height:60,
        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 5
    },
    input: {
        width:"100%",
        height:"100%",
        fontSize:16,
        color:"gray"
    }
})

export default CustomInput;
