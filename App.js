import React, {useState} from 'react';
import { Provider as PaperProvider } from 'react-native-paper'

import {
  View
} from 'react-native'
import HomeScreen from './screens/home';

const App = () => {
  return(
      <HomeScreen/>
  )
}

export default App