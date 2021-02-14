import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Subheading, Title } from 'react-native-paper';
import { Carousel } from '../../components/Carousel';
import { Container } from '../../components/Helpers';
import { MovieCard } from '../../components/MovieCard';
import { MovieType } from '../../core/types';
import { HomeScreenSection } from '../../store/home/types';

type HomeSectionSmallCarouselProps = {
  section: HomeScreenSection;
  onPressMovie: (movie: MovieType) => void;
};

export const HomeSectionSmallCarousel = ({
  section,
  onPressMovie,
}: HomeSectionSmallCarouselProps) => {
  const renderItem = useCallback(
    (item: ListRenderItemInfo<MovieType>) => (
      <MovieCard movie={item.item} onPress={onPressMovie} />
    ),
    [section],
  );

  return (
    <>
      <Container>
        <Title>{section.title}</Title>
        {section.subtitle && <Subheading>{section.subtitle}</Subheading>}
      </Container>
      <Carousel data={section.data} renderItem={renderItem} itemWidth={200} />
    </>
  );
};
