import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ResourceRenderer } from '../../components/ResourceRenderer';
import { homeScreenActions } from '../../store/home/reducer';
import { homeScreensStateSelector } from '../../store/home/selector';
import { HomeScreenSection } from '../../store/home/types';
import { genresActions } from '../../store/movie.ts/reducer';
import { HomeSectionConstructor } from './HomeSection';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const homeScreenState = useSelector(homeScreensStateSelector);

  useEffect(() => {
    dispatch(genresActions.run());
    dispatch(homeScreenActions.run());
  }, []);

  const renderItem = useCallback(
    (item: ListRenderItemInfo<HomeScreenSection>) => {
      return <HomeSectionConstructor section={item.item} />;
    },
    [],
  );

  return (
    <ResourceRenderer resource={homeScreenState}>
      {(results: HomeScreenSection[]) => (
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </ResourceRenderer>
  );
};
