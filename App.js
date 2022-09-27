/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import ListView from "./components/main/welcome";

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ListView />
    </View>
  );
};

export default App;
