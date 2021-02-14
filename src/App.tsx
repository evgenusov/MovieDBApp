/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { AppNavigator } from './Navigator';
import { Provider as PaperProvider } from 'react-native-paper';

import { store } from './store';
import { MainTheme } from './themes/main';
import { ThemeProvider } from 'styled-components/native';

enableScreens();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <ThemeProvider theme={MainTheme}>
          <PaperProvider theme={MainTheme}>
            <AppNavigator />
          </PaperProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};
export default App;
