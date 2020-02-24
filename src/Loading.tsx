import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import theme from './theme';
import Text from './Text';
import Container from './Container';

const NotFound: FC = () => (
  <Container>
    <ActivityIndicator size="large" color={theme.colors.brand} />
  </Container>
);

export default NotFound;
