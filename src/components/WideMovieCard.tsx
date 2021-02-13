import React, { useCallback } from 'react';
import { Card } from 'react-native-paper';
import { MovieType } from '../core/types';
import { getCroppedImageUrl } from '../core/utils';

export enum MovieCardImageSize {
  ORIGINAL,
  W500,
}

export type WideMovieCardProps = {
  movie: MovieType;
  onPress: (movie: MovieType) => void;
};

export const WideMovieCard = ({ movie, onPress }: WideMovieCardProps) => {
  const onCardPress = useCallback(() => {
    onPress(movie);
  }, [movie, onPress]);

  return (
    <Card accessibilityComponentType accessibilityTraits onPress={onCardPress}>
      <Card.Cover
        source={{ uri: getCroppedImageUrl(movie.backdrop_path) }}
        accessibilityComponentType
        accessibilityTraits
      />
      <Card.Title
        title={movie.title}
        subtitle={movie.overview}
        accessibilityComponentType
        accessibilityTraits
      />
    </Card>
  );
};
