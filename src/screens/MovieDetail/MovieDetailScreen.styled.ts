import styled from 'styled-components/native';
import { Container } from '../../components/Helpers';

export const MovieTitle = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  overflow: visible;
`;

export const PlayButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  padding-left: 4px;
  background-color: green;
  justify-content: center;
  align-items: center;
`;

export const PlayButtonArea = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 16px;
  padding-right: 32px;
  height: 0;
`;
