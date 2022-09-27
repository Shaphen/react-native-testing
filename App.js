/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import ListView from "./components/main/list_view";
import Header from "./components/header/header";

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ListView />
    </View>
  );
};

export default App;
