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
import LoginScreen from './screens/stacks/auth/login';
import RegisterScreen from './screens/stacks/auth/register';
import ForgetScreen from './screens/stacks/auth/forget';
import JobsHomeScreen from './screens/stacks/jobs/jobsHome';

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
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
