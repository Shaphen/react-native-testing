/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from "./header/header";
import Footer from "./footer/footer";
import ListView from "./main/list_view";
import AccountView from "./main/account_view";

const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Header />
        <ListView />
        <Footer />
      </View>
    </NavigationContainer>
  );
};

export default App;
