import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { border, BorderProps } from 'styled-system';
import { Ionicons } from '@expo/vector-icons';

const AddButtonContainer = styled.View.attrs<BorderProps>(props => ({
  borderColor: 'brand',
  borderWidth: 2,
  borderRadius: 5,
  justifyContent: 'center',
  ...props,
}))<BorderProps>`
  ${border}
`;

const AddButton = withTheme(({ theme, onPress }) => (
  <AddButtonContainer>
    <Ionicons name="ios-add" color={theme.colors.black} size={40} style={{ textAlign: 'center' }} />
  </AddButtonContainer>
));

export default AddButton;
