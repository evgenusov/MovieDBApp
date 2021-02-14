import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
import { SCREENS } from '../core/screens';

const HomeScreenHeaderRightContainer = styled.View`
  margin: 0 16px;
`;
export const HomeScreenHeaderRight = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const onTouchSearch = useCallback(() => {
    navigation.navigate(SCREENS.SEARCH);
  }, []);

  return (
    <HomeScreenHeaderRightContainer>
      <Icon
        name="search"
        size={16}
        color={theme.colors.text}
        onPress={onTouchSearch}
      />
    </HomeScreenHeaderRightContainer>
  );
};
