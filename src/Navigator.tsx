import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/Home/Home';
import { MovieDetailScreen } from './screens/MovieDetail/MovieDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { VideoPlayerScreen } from './screens/VideoPlayer/VideoPlayer';
import { MainTheme } from './themes/main';
import { HomeScreenHeaderRight } from './components/HomeScreenHeaderRight';
import { SearchScreen } from './screens/Search/SearchScreen';
import { SCREENS } from './core/screens';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          headerTitle: 'Discover',
          headerRight: HomeScreenHeaderRight,
        }}
      />
      <Stack.Screen
        name={SCREENS.DETAIL}
        component={MovieDetailScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name={SCREENS.PLAYER}
        component={VideoPlayerScreen}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name={SCREENS.SEARCH}
        component={SearchScreen}
        options={{
          headerTitle: 'Search',
        }}
      />
    </Stack.Navigator>
  );
};
export const AppNavigator = () => {
  return (
    <NavigationContainer theme={MainTheme}>
      <RootStack />
    </NavigationContainer>
  );
};
