import {
    Text,
    View,
} from 'react-native';
import styles from "./greeting_style.js";

const Welcome = () => {
    return (
        <View
          style={ styles.container }
        >
            <Text>This is the Welcome Component!</Text>
        </View>
    );
};

export default Welcome;