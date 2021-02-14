import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { Container } from '../../components/Helpers';
import { Theme } from '../../themes/main';

export const MovieTitle = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  overflow: visible;
`;

export const PlayButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  padding-left: 4px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
`;

export const PlayButtonArea = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 16px;
  padding-right: 32px;
  height: 0;
  margin-top: 16px;
`;

export const StyledScrollView = styled(Animated.ScrollView)`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
`;
