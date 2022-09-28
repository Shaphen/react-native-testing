import React from 'react';
import { View, Text } from "react-native";
import styles from "./footer_style";
import IconE from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/MaterialCommunityIcons';

const homeIcon = <IconE name="home" size={ 30 } color="#0009" />;
const bookmarkIcon = <IconE name="bookmark" size={ 30 } color="#0009" />;
const accountIcon = <IconA name="account" size={ 35 } color="#0009" />;

const Footer = () => {

    return (
        <View style={ styles.footerContainer }>
                <Text style={ styles.footerText }>{ homeIcon } Home</Text>
                <Text style={ styles.footerText }>{ bookmarkIcon } Saved</Text>
                <Text style={ styles.footerText }>{ accountIcon } Account</Text>
        </View>
    )
}

export default Footer;