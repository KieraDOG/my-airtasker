import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationLink from '../NavigationLink';
import NavigationItem from '../NavigationItem';

const Button = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const NavigationButton = ({
  onClick,
  children,
}) => (
  <NavigationItem>
    <NavigationLink.Text as={Button} onClick={onClick}>
      {children}
    </NavigationLink.Text>
  </NavigationItem>
);

NavigationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationButton;
