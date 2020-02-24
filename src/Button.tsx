import React from 'react';
import { TouchableHighlightProps } from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  variant,
  layout,
  LayoutProps,
  border,
  BorderProps,
  typography,
  TypographyProps,
} from 'styled-system';

import Text, { TextProps } from './Text';

export type ButtonProps = TouchableHighlightProps &
  SpaceProps &
  BorderProps &
  ColorProps &
  LayoutProps &
  TypographyProps &
  VariantProps<'primary' | 'secondary' | 'disabled'>;

export interface VariantProps<T> {
  variant?: T;
}

interface IButton {
  label: string;
}

const ButtonContainer = styled.TouchableHighlight.attrs<ButtonProps>(props => ({
  borderRadius: 5,
  variant: 'primary',
  p: 5,
  ...props,
}))<ButtonProps>`
  ${border}
  ${color}
  ${space}
  ${layout}
  ${variant({
    variants: {
      primary: {
        backgroundColor: 'brand',
      },
      secondary: {
        border: '1px solid',
        borderColor: 'brand',
        bg: 'transparent',
      },
      disabled: {
        bg: 'border',
      },
    },
  })}
`;

const Label = styled(Text)<
  TextProps & TypographyProps & ColorProps & VariantProps<'disabled' | 'primary' | 'secondary'>
>`
  ${color}
  ${typography}
  ${variant({
    variants: {
      primary: {
        color: 'white',
        textAlign: 'center',
        mb: 0,
      },
      secondary: {
        color: 'black',
        textAlign: 'center',
        mb: 0,
      },
      disabled: {
        color: 'black',
        textAlign: 'center',
        mb: 0,
      },
    },
  })}
`;

const Button = ({
  label,
  color,
  fontSize = 3,
  fontStyle,
  disabled,
  variant = 'primary',
  ...rest
}: ButtonProps & IButton) => (
  <ButtonContainer variant={disabled ? 'disabled' : variant} {...rest}>
    <Label color={color} variant={disabled ? 'disabled' : variant} fontSize={fontSize}>
      {label}
    </Label>
  </ButtonContainer>
);

export default Button;