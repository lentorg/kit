import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
} from 'styled-system';

export type InputProps = TextInputProps & SpaceProps & ColorProps & BorderProps & LayoutProps;

const Input = styled.TextInput.attrs<InputProps>(props => ({
  borderRadius: 2,
  borderWidth: 2,
  borderColor: 'border',
  width: '100%',
  p: 3,
  ...props,
}))<InputProps>`
  ${color}
  ${space}
  ${border}
  ${layout}
`;

export default Input;
