/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ListView from "./main/list_view";
import AccountView from "./main/account_view";
import SavedView from "./main/saved_items_view"
import { View } from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/MaterialCommunityIcons';

const homeIcon = <IconE name="home" size={ 26 } color="#0009" />;
const bookmarkIcon = <IconE name="bookmark" size={ 28 } color="#0009" />;
const accountIcon = <IconA name="account" size={ 28 } color="#0009" />;

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="List" component={ ListView } options = {() => 
            ({tabBarIcon: () => homeIcon})} />
          <Tab.Screen name="Saved" component={ SavedView } options = {() => 
            ({tabBarIcon: () => bookmarkIcon})} />
          <Tab.Screen name="Account" component={ AccountView } options = {() => 
            ({tabBarIcon: () => accountIcon})} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
