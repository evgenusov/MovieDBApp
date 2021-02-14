import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Subheading, Title } from 'react-native-paper';
import { Carousel } from '../../components/Carousel';
import { Container } from '../../components/Helpers';
import { WideMovieCard } from '../../components/WideMovieCard';
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
      <Carousel data={section.data} renderItem={renderItem} itemWidth={342} />
    </>
  );
};
