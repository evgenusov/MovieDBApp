import React, { useCallback, useRef } from 'react';
import FastImage from 'react-native-fast-image';
import { Paragraph, Subheading, Title, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, { Extrapolate } from 'react-native-reanimated';
import { Container } from '../../components/Helpers';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';
import { MovieType } from '../../core/types';
import { getOriginalImageUrl } from '../../core/utils';
import {
  MovieTitle,
  PlayButton,
  PlayButtonArea,
} from './MovieDetailScreen.styled';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../Navigator';

const H_MAX_HEIGHT = SCREEN_HEIGHT * 0.65;
const H_MIN_HEIGHT = 56;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export const MovieDetailScreen = ({ route }: any) => {
  const {
    movie,
  }: {
    movie: MovieType;
  } = route.params || {};

  const navigation = useNavigation();
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });

  const imageHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_MAX_HEIGHT],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolateLeft: Extrapolate.IDENTITY,
    extrapolateRight: Extrapolate.CLAMP,
  });

  const onTouchPlay = useCallback(() => {
      navigation.navigate(SCREENS.PLAYER);
  }, []);

  return (
    <>
      <Animated.View
        style={{
          top: 0,
          left: 0,
          right: 0,
          height: headerScrollHeight,
          position: 'relative',
          zIndex: 10,
        }}>
        <Animated.Image
          source={{
            uri: getOriginalImageUrl(movie.poster_path),
          }}
          resizeMode={FastImage.resizeMode.center}
          style={{
            zIndex: 10,
            height: imageHeight,
            width: SCREEN_WIDTH,
          }}
        />
      </Animated.View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        bounces={false}
        style={{
          position: 'relative',

          zIndex: 100,
        }}
        stickyHeaderIndices={[0]}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: true },
        )}>
        <MovieTitle>
          <Title numberOfLines={1}>{movie.title}</Title>
          <PlayButtonArea>
            <PlayButton onPress={onTouchPlay}>
              <Icon name={'play'} size={24} />
            </PlayButton>
          </PlayButtonArea>
        </MovieTitle>
        <Container>
          <Subheading>{movie.original_title}</Subheading>
          <Paragraph>{movie.overview}</Paragraph>
        </Container>
      </Animated.ScrollView>
    </>
  );
};
