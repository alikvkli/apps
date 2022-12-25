import { StyleSheet} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import {useState} from "react";
const CustomDropdown = ({data,placeholder}) => {
    return (
        <SelectDropdown
            data={data}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            defaultButtonText={placeholder}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
        />
    )
}

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
        backgroundColor: "#fff",
        width: '100%',
        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 5
    },
    dropdown1BtnTxtStyle: {color: 'gray', textAlign: 'left'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
})

export default CustomDropdown;
