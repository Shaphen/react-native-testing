import React from 'react';
import { View, Text } from "react-native";
import styles from './account_view_style';

const accountView = () => {

    return(
        <View style={ styles.container }>
            <Text style={ styles.text }>This is the Account component!</Text>
        </View>
    )
}

export default accountView;