import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
import { COLORS } from '../core/colors';

const StartRatingRow = styled.View`
  flex-direction: row;
  flex: 1;
  height: 50px;
`;

type StartRatingProps = {
  stars: number;
  rating: number;
  color?: string;
};

export const StartRating = ({
  stars,
  rating,
  color = COLORS.text,
}: StartRatingProps) => {
  const roundedRating = Math.round(rating);
  const starItems = [...new Array(stars).keys()];

  const FilledIcon = () => <Icon name="star" color={color} size={16} solid />;
  const UnfilledIcon = () => <Icon name="star" size={16} color={color} />;

  return (
    <StartRatingRow>
      {starItems.map((item, index) =>
        item < roundedRating ? (
          <FilledIcon key={index.toString()} />
        ) : (
          <UnfilledIcon key={index.toString()} />
        ),
      )}
    </StartRatingRow>
  );
};
