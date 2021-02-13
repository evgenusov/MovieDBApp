import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/Home/Home';
import { MovieDetailScreen } from './screens/MovieDetail/MovieDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { VideoPlayerScreen } from './screens/VideoPlayer/VideoPlayer';

const Stack = createStackNavigator();

export const SCREENS = {
  HOME: '/',
  DETAIL: '/detail',
  PLAYER: '/player',
};

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREENS.DETAIL} component={MovieDetailScreen}  options={{
        headerTransparent: true,
        headerTitle: ''
      }}/>
      <Stack.Screen name={SCREENS.PLAYER} component={VideoPlayerScreen} options={{
        headerShown: true
      }} />
    </Stack.Navigator>
  );
};
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
