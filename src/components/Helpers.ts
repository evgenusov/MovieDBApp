import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
`;

type SizedBoxProps = {
  width?: number;
  height?: number;
};
export const SizedBox = styled.View`
  width: ${({ width = 0 }: SizedBoxProps) => width}px;
  height: ${({ height = 0 }: SizedBoxProps) => height}px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Column = styled.View`
  flex: ${({ size = 1 }: { size?: number }) => size};
`;

export const Spacer = styled.View`
  flex: 1;
`;
