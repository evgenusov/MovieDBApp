import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Subheading, Title } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { Container } from '../../components/Helpers';
import { WideMovieCard } from '../../components/WideMovieCard';
import { SCREEN_WIDTH } from '../../constants';
import { MovieType } from '../../core/types';
import { HomeScreenSection } from '../../store/home/types';

type HomeSectionBigCarouselProps = {
  section: HomeScreenSection;
  onPressMovie: (movie: MovieType) => void;
};

export const HomeSectionBigCarousel = ({
  section,
  onPressMovie,
}: HomeSectionBigCarouselProps) => {
  const renderItem = useCallback(
    (item: ListRenderItemInfo<MovieType>) => (
      <WideMovieCard movie={item.item} onPress={onPressMovie} />
    ),
    [section],
  );

  return (
    <>
      <Container>
        <Title>{section.title}</Title>
        {section.subtitle && <Subheading>{section.subtitle}</Subheading>}
      </Container>
      <Carousel
        data={section.data}
        renderItem={renderItem}
        sliderWidth={SCREEN_WIDTH}
        keyExtractor={(item) => item.id.toString()}
        itemWidth={SCREEN_WIDTH - 60}
      />
    </>
  );
};
