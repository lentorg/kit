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
  flex,
  FlexProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
} from 'styled-system';

export type BoxProps = ViewProps &
  LayoutProps &
  SpaceProps &
  ColorProps &
  BackgroundProps &
  FlexProps &
  FlexboxProps &
  BorderProps;

const Box = styled.View<BoxProps>`
  ${flex}
  ${flexbox}
  ${border}
  ${layout}
  ${space}
  ${color}
  ${background}
`;

export default Box;
