import React, { useCallback } from 'react';
import { Card, Text } from 'react-native-paper';
import { COLORS } from '../core/colors';
import { MovieType } from '../core/types';
import { getCroppedImageUrl } from '../core/utils';
import { Column, Row, Spacer } from './Helpers';
import { StartRating } from './StarRating';

type SearchResultItemProps = {
  movie: MovieType;
  onPress: (movie: MovieType) => void;
};

export const SearchResultItem = ({ movie, onPress }: SearchResultItemProps) => {
  const onPressCard = useCallback(() => {
    onPress(movie);
  }, [movie]);
  return (
    <Card accessibilityTraits accessibilityComponentType onPress={onPressCard}>
      <Card.Content>
        <Row>
          <Column size={0.35}>
            <Card.Cover
              source={{ uri: getCroppedImageUrl(movie.poster_path) }}
              accessibilityComponentType
              accessibilityTraits
            />
          </Column>
          <Column size={0.65}>
            <Card.Title
              title={movie.title}
              accessibilityComponentType
              accessibilityTraits
            />
            <Card.Content>
              <Text
                numberOfLines={3}
                accessibilityComponentType
                accessibilityTraits>
                {movie.overview}
              </Text>
            </Card.Content>
            <Spacer />
            <Card.Content>
              <StartRating
                stars={10}
                rating={movie.vote_average}
                color={COLORS.yellow}
              />
            </Card.Content>
          </Column>
        </Row>
      </Card.Content>
    </Card>
  );
};
