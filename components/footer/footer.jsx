import React from 'react';
import { View, Text } from "react-native";
import styles from "./footer_style";

const Footer = () => {

    return (
        <View style={ styles.footerContainer }>
            <Text style={ styles.footerText }>
                This is the Footer!
            </Text>
        </View>
    )
}

export default Footer;