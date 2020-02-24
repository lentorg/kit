import styled from 'styled-components/native';
import { ViewProps } from 'react-native';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  color,
  ColorProps,
  background,
  BackgroundProps,
} from 'styled-system';

export type ContainerProps = ViewProps & LayoutProps & SpaceProps & ColorProps & BackgroundProps;

const Container = styled.View.attrs<ContainerProps>(props => ({
  p: 6,
  ...props,
}))<ContainerProps>`
  ${layout}
  ${space}
  ${color}
  ${background}
`;

export default Container;