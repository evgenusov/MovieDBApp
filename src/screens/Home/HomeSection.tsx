import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { SCREENS } from '../../core/screens';
import { MovieType } from '../../core/types';
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
