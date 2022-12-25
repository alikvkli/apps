import { Text } from "react-native";
import { useSelector } from "react-redux";
import MainLayout from "../../components/MainLayout"

const HomeScreen = () => {
    const { userData } = useSelector(state => state.app);


    return (
        <MainLayout>
            <Text>{JSON.stringify(userData, null, 2)}</Text>
        </MainLayout>
    )
}

export default HomeScreen;