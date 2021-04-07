import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

import ProfileHomeScreen from './profileHome';

const ProfileStackScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="profileHome"
        component={ProfileHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      
    </ProfileStack.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ProfileStackScreen;
