import React from 'react';
import styled from 'styled-components';
import NakedButton from '../../../NakedButton';

const Button = styled(NakedButton)`
  position: absolute;
  font-size: 18px;
  padding: 16px;
  right: 0;
  top: 0;
`;

const CloseButton = ({
  onClick,
}) => (
  <Button onClick={onClick}>X</Button>
);

export default CloseButton;
