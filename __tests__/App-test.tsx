/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { StartRating } from '../src/components/StarRating';
import { getMovieDetailViewPort } from '../src/screens/MovieDetail/MovieDetailScreen.utils';

jest.mock('react-native-video', () => 'Video');
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
jest.mock('react-native-gesture-handler', () => {});

it('should check start rating count stars', () => {
  const result = renderer.create(<StartRating stars={10} rating={7} />);

  const jsonResult = result.toJSON();

  // @ts-ignore
  expect(jsonResult!.children.length).toBe(10);
});

it('should check valid wide viewport', () => {
  const viewport = getMovieDetailViewPort(1080, 1920);
  expect(viewport.isWide).toBe(true);
});
