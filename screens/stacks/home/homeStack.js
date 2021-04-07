import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

import {TextInput, Text, Button, Appbar} from 'react-native-paper';
import HomeContentScreen from './homeContent';
import DetailScreen from '../../tabs/detail';

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={HomeContentScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeStackScreen;
