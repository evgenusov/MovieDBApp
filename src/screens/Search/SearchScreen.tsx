import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { debounce } from 'lodash';
import { Chip, Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { SizedBox } from '../../components/Helpers';
import { ResourceRenderer } from '../../components/ResourceRenderer';
import { SearchResultItem } from '../../components/SearchResult';
import { GenreType, MovieType } from '../../core/types';
import { genresSelector } from '../../store/movie.ts/selector';
import { searchActions } from '../../store/search/reducer';
import {
  searchResultLoading,
  searchResultSelector,
} from '../../store/search/selector';
import { Loader } from '../../components/Loader';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../core/screens';

type SearchScreenGenrePickerProps = {
  onSelectGenre: (genre: GenreType) => void;
};

const SearchScreenGenrePicker = ({
  onSelectGenre,
}: SearchScreenGenrePickerProps) => {
  const genres = useSelector(genresSelector);

  const renderItem = useCallback((item: ListRenderItemInfo<GenreType>) => {
    return (
      <>
        {item.index === 0 && <SizedBox width={8} />}
        <Chip
          onPress={() => onSelectGenre(item.item)}
          accessibilityComponentType
          accessibilityTraits>
          {item.item.name}
        </Chip>
        <SizedBox width={8} />
      </>
    );
  }, []);

  return (
    <>
      <ResourceRenderer resource={genres}>
        {(items: GenreType[]) => (
          <>
            <SizedBox height={16} />
            <FlatList
              horizontal={true}
              data={items}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </>
        )}
      </ResourceRenderer>
    </>
  );
};

export const SearchScreen = () => {
  const searchResults = useSelector(searchResultSelector);
  const isLoading = useSelector(searchResultLoading);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchValue, SetSearchValue] = useState('');

  useEffect(() => {
    searchMovie(searchValue);

    return () => {
      dispatch(searchActions.init());
    };
  }, [searchValue]);

  const searchMovie = debounce(
    (query: string) => {
      if (query.length > 0) {
        dispatch(searchActions.init());
        dispatch(searchActions.search(query));
      }
    },
    700,
    {
      leading: false,
      trailing: true,
    },
  );

  const onPressSearchItem = useCallback((movie: MovieType) => {
    navigation.navigate(SCREENS.DETAIL, {
      movie,
    });
  }, []);

  const renderItem = (item: ListRenderItemInfo<MovieType>) => {
    return (
      <>
        <SearchResultItem movie={item.item} onPress={onPressSearchItem} />
        <SizedBox height={8} />
      </>
    );
  };

  const onSelectGenre = useCallback((genre: GenreType) => {
    dispatch(searchActions.init());
    dispatch(
      searchActions.discover({
        with_genres: genre.id.toString(),
      }),
    );
  }, []);

  const onChangeText = useCallback((text: string) => {
    SetSearchValue(text);
  }, []);

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Searchbar
            placeholder={'Search'}
            value={searchValue}
            onChangeText={onChangeText}
            accessibilityComponentType
            accessibilityTraits
          />
          <SearchScreenGenrePicker onSelectGenre={onSelectGenre} />
          <SizedBox height={56} />
          {isLoading && <Loader />}
        </>
      }
      data={searchResults}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
