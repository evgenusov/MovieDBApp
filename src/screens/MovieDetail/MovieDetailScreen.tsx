import React, { useCallback, useRef, useState } from 'react';
import FastImage from 'react-native-fast-image';
import { Paragraph, Subheading, Title } from 'react-native-paper';
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
  StyledScrollView,
} from './MovieDetailScreen.styled';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../core/colors';
import { Dimensions, StyleSheet } from 'react-native';
import { getMovieDetailViewPort } from './MovieDetailScreen.utils';
import { SCREENS } from '../../core/screens';

export const MovieDetailScreen = ({ route }: any) => {
  const {
    movie,
  }: {
    movie: MovieType;
  } = route.params || {};
  const navigation = useNavigation();
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [viewport, SetViewPort] = useState(
    getMovieDetailViewPort(SCREEN_HEIGHT, SCREEN_WIDTH),
  );

  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, viewport.scrollDistance],
    outputRange: [viewport.maxHeight, viewport.minHeight],
    extrapolate: Extrapolate.CLAMP,
  });

  const imageHeight = scrollOffsetY.interpolate({
    inputRange: [0, viewport.maxHeight],
    outputRange: [viewport.maxHeight, viewport.minHeight],
    extrapolateLeft: Extrapolate.IDENTITY,
    extrapolateRight: Extrapolate.CLAMP,
  });

  const onTouchPlay = useCallback(() => {
    navigation.navigate(SCREENS.PLAYER, {
      movie,
    });
  }, []);

  const onLayoutChanged = () => {
    const { height, width } = Dimensions.get('screen');
    SetViewPort(getMovieDetailViewPort(height, width));
  };

  return (
    <>
      <Animated.View
        onLayout={onLayoutChanged}
        style={[
          styles.imageView,
          {
            height: headerScrollHeight,
          },
        ]}>
        <Animated.Image
          source={{
            uri: getOriginalImageUrl(movie.poster_path),
          }}
          resizeMode={
            !viewport.isWide
              ? FastImage.resizeMode.cover
              : FastImage.resizeMode.contain
          }
          style={{
            height: imageHeight,
            width: viewport.screenWidth,
          }}
        />
      </Animated.View>
      <Animated.View
        style={[
          {
            top: headerScrollHeight,
          },
          styles.playButton,
        ]}>
        <PlayButtonArea>
          <PlayButton onPress={onTouchPlay}>
            <Icon name={'play'} size={24} color={COLORS.text} />
          </PlayButton>
        </PlayButtonArea>
      </Animated.View>
      <StyledScrollView
        scrollEventThrottle={16}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: true },
        )}>
        <MovieTitle>
          <Title numberOfLines={1}>{movie.title}</Title>
        </MovieTitle>
        <Container>
          <Subheading>{movie.original_title}</Subheading>
          <Paragraph>{movie.overview}</Paragraph>
        </Container>
      </StyledScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  playButton: {
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 100,
  },
  imageView: {
    top: 0,
    left: 0,
    right: 0,
    position: 'relative',
    zIndex: 0,
  },
});
