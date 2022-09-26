/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import Welcome from "./components/greeting/welcome";

const App = () => {
  return (
    <ScrollView>
      <View>
        <Welcome />
      </View>
    </ScrollView>
  );
};

export default App;
