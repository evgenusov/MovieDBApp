import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Title, Subheading } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { Container } from '../../components/Helpers';
import { MovieCard } from '../../components/MovieCard';
import { WideMovieCard } from '../../components/WideMovieCard';
import { SCREEN_WIDTH } from '../../constants';
import { MovieType } from '../../core/types';
import { SCREENS } from '../../Navigator';
import {
  HomeScreenCarouselTypeEnum,
  HomeScreenSection,
} from '../../store/home/types';
import { HomeSectionBigCarousel } from './HomeSectionBigCarousel';
import { HomeSectionSmallCarousel } from './HomeSectionSmallCarousel';

type HomeSectionConstructorProps = {
  section: HomeScreenSection;
};

export const HomeSectionConstructor = ({
  section,
}: HomeSectionConstructorProps) => {
  const navigation = useNavigation();

  const onPressMovie = useCallback((movie: MovieType) => {
    navigation.navigate(SCREENS.DETAIL, {
      movie,
    });
  }, []);

  switch (section.type) {
    case HomeScreenCarouselTypeEnum.SMAILL_ITEMS:
      return (
        <HomeSectionSmallCarousel
          section={section}
          onPressMovie={onPressMovie}
        />
      );

    case HomeScreenCarouselTypeEnum.BIG_ITEMS:
      return (
        <HomeSectionBigCarousel section={section} onPressMovie={onPressMovie} />
      );

    default:
      return (
        <HomeSectionSmallCarousel
          section={section}
          onPressMovie={onPressMovie}
        />
      );
  }
};
