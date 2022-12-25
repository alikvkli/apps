import AsyncStorage from "@react-native-async-storage/async-storage"

export const saveItem = async (key, value) => {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
}