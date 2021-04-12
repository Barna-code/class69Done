
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/TransactionScreen';
import SearchScreen from './screens/SearchScreen';
//tab navigation for bottom tab navigation
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />


    );
  }
}

const TabNavigator = createBottomTabNavigator({
  TransactionScreen: {
    screen: TransactionScreen
  },
  SearchScreen: {
    screen: SearchScreen
  }
})

const AppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
