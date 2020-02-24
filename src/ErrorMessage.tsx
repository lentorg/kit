import React, { FC } from 'react';
import Text from './Text';
import Container from './Container';

type ErrorMessageProps = {
  error?: Error;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => (
  <Container>
    <Text>En feil oppsto</Text>
    <Text>{error.message}</Text>
  </Container>
);

export default ErrorMessage;
