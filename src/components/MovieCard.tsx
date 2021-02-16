import React, { useCallback } from 'react';
import { Card } from 'react-native-paper';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { MovieType } from '../core/types';
import { getCroppedImageUrl } from '../core/utils';
import { genreSelector } from '../store/movie/selector';
import { RootState } from '../store/reducer';

const SmallCard = styled(Card)`
  width: 200px;
`;

export type MovieCardProps = {
  movie: MovieType;
  onPress: (movie: MovieType) => void;
};

export const MovieCard = ({ movie, onPress }: MovieCardProps) => {
  const genres = useSelector((state: RootState) =>
    genreSelector(state, movie.genre_ids),
  );

  const genresNames = genres.map((genre) => genre.name);

  const onCardPress = useCallback(() => {
    onPress(movie);
  }, [movie, onPress]);

  return (
    <SmallCard
      accessibilityComponentType
      accessibilityTraits
      onPress={onCardPress}>
      <Card.Cover
        source={{ uri: getCroppedImageUrl(movie.poster_path) }}
        accessibilityComponentType
        accessibilityTraits
      />
      <Card.Title
        title={movie.title}
        subtitle={genresNames.join(', ')}
        accessibilityComponentType
        accessibilityTraits
      />
    </SmallCard>
  );
};
