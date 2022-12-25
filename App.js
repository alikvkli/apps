import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./src/redux/store";
import SplashScreen from './src/screens/SplashScreen';
export default function App() {


  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <SplashScreen/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
