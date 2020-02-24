import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  color,
  ColorProps,
} from 'styled-system';
import styled from 'styled-components/native';

export type HeadingProps = SpaceProps & LayoutProps & TypographyProps & ColorProps;

const Heading = styled.Text.attrs<HeadingProps>(props => ({
  mb: 3,
  fontSize: 4,
  fontWeight: 500,
  ...props,
}))<HeadingProps>`
    ${layout}
    ${space}
    ${typography}
    ${color}
  `;

export default Heading;
