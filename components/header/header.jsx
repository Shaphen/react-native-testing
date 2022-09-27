import React from "react";
import { View, Text } from "react-native";
import styles from "./header_style";

const Header = () => {

    return (
        <View style={ styles.headerContainer }>
            <Text style={ styles.headerText }>
                This is the Header!
            </Text>
        </View>
    )
}

export default Header;