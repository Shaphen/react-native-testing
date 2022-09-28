import React from 'react';
import { View, Text } from "react-native";
import styles from "./footer_style";
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Footer = () => {

    return (
        <View style={ styles.footerContainer }>
            <Text style={ styles.footerText }>
                This is the Footer!
            </Text>

            <Text>Icon: { myIcon }</Text>
        </View>
    )
}

export default Footer;