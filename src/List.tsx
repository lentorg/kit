import React, { FC } from 'react';
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
  flexbox,
  FlexboxProps,
  flex,
  FlexProps,
} from 'styled-system';
import Heading from './Heading';

interface IList {
  title?: string;
}

type StyledSystemProps = SpaceProps &
  ColorProps &
  BorderProps &
  LayoutProps &
  FlexboxProps &
  FlexProps;

export type ListProps = IList & StyledSystemProps;

const ListContainer = styled.View.attrs<StyledSystemProps>(props => ({
  width: '100%',
  ...props,
}))<StyledSystemProps>`
  ${color}
  ${space}
  ${border}
  ${layout}
`;

export const ListItem = styled.View.attrs<StyledSystemProps>(props => ({
  width: '100%',
  p: 4,
  flexDirection: 'row',
  alignSelf: 'center',
  alignItems:"center",
  justifyContent:"space-between",
  borderTopWidth:"2px",
  borderTopColor:"border",
  ...props,
}))<StyledSystemProps>`
  ${color}
  ${space}
  ${border}
  ${layout}
  ${flexbox}
  ${flex}
`;

export const List: FC<ListProps> = ({ title, children, ...rest }) => (
  <ListContainer {...rest}>
    {title && <Heading>{title}</Heading>}
    {children}
  </ListContainer>
);
