/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

// original: #5C9F40

const theme = {
  ...DefaultTheme,
  
  colors: {
    ...DefaultTheme.colors,
    primary: '#76B244',
    accent: '#76B244',
  },
};

export default function Main() {
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
