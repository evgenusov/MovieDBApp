/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { AppNavigator } from './Navigator';
import { Provider as PaperProvider } from 'react-native-paper';

import { store } from './store';

enableScreens();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <PaperProvider>
        <AppNavigator />
        </PaperProvider>
      </Provider>
    </>
  );
};
export default App;
