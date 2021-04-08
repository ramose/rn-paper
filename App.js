import React, {useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {View} from 'react-native';
import MainScreen from './screens/main';
import DetailScreen from './screens/tabs/detail';
import CarList from './screens/stacks/cars/carList';
import CarDetailScreen from './screens/stacks/cars/carDetail';
import CarAddScreen from './screens/stacks/cars/carAdd';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main"
      screenOptions={{
        headerShown:false,
        headerStyle:{
          backgroundColor:'green',
        },
        headerTintColor:'white'
      }}
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="CarList" component={CarList} />
        <Stack.Screen name="CarDetail" component={CarDetailScreen} />
        <Stack.Screen name="CarAdd" component={CarAddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
