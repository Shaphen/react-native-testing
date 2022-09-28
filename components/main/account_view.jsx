import React from 'react';
import { View, Text } from "react-native";
import styles from './account_view_style';

const AccountView = () => {

    return(
        <View style={ styles.container }>
            <Text>This is the Account component!</Text>
        </View>
    )
}

export default AccountView;