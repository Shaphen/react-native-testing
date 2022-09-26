import {
    Text,
    View,
} from 'react-native';

const Welcome = () => {
    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text>This is the Welcome Component!</Text>
        </View>
    );
};

export default Welcome;