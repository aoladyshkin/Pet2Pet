import { loadAsync } from 'expo-font';
import { useDispatch } from 'react-redux';
import { setTheme } from './store/actions/dataActions';

export async function bootstrap() {
    await loadAsync({
        PhoneNum: require('../assets/fonts/Fredoka.ttf'),
        InterRegular: require('../assets/fonts/Inter-Regular.ttf'),
        Inter: require('../assets/fonts/Inter-SemiBold.ttf'),
        InterBold: require('../assets/fonts/Inter-ExtraBold.ttf'),
        Code: require('../assets/fonts/Code-Italic.ttf')
    })


}