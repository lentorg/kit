import { TypographyProps, typography, space, SpaceProps, color, ColorProps } from 'styled-system';
import styled from 'styled-components/native';
import { TextProps as NativeTextProps } from 'react-native';

export type TextProps = TypographyProps & SpaceProps & NativeTextProps & ColorProps;

const Text = styled.Text.attrs<TextProps>(props => ({
  mb: 6,
  fontSize: 2,
  ...props,
}))<TextProps>`
  ${color}
  ${typography}
  ${space}
`;

export default Text;
