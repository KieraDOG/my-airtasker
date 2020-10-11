import PropTypes from 'prop-types';
import React from 'react';
import RouterContext from './RouterContext';

const Route = ({
  path,
  render,
}) => (
  <RouterContext.Consumer>
    {(router) => router.path === path && render()}
  </RouterContext.Consumer>
);

Route.propTypes = {
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default Route;
