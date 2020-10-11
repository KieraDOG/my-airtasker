import React from 'react';
import PropTypes from 'prop-types';
import RouterContext from './RouterContext';

const Link = ({
  to,
  children,
  className,
}) => (
  <RouterContext.Consumer>
    {(router) => (
      <a
        href={to}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          router.push(to);
        }}
      >
        {children}
      </a>
    )}
  </RouterContext.Consumer>
);

Link.defaultProps = {
  className: undefined,
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
