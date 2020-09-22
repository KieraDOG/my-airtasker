import React from 'react';
import PropTypes from 'prop-types';
import NavigationLink from '../NavigationLink';
import NavigationItem from '../NavigationItem';
import NakedButton from '../../../NakedButton';

const NavigationButton = {};

NavigationButton.Text = ({
  indictable,
  onClick,
  children,
}) => (
  <NavigationItem indictable={indictable}>
    <NavigationLink.Text as={NakedButton} onClick={onClick}>
      {children}
    </NavigationLink.Text>
  </NavigationItem>
);

NavigationButton.Text.defaultProps = {
  indictable: false,
};

NavigationButton.Text.propTypes = {
  indictable: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

NavigationButton.Button = ({
  onClick,
  children,
}) => (
  <NavigationLink.Button
    as="button"
    variant="primary"
    onClick={onClick}
  >
    {children}
  </NavigationLink.Button>
);

NavigationButton.Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationButton;
