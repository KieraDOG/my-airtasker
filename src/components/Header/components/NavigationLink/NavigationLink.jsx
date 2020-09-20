import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  padding: 16px;
`;

const NavigationLink = {};

NavigationLink.Naked = ({
  href,
  children,
}) => (
  <Link href={href}>{children}</Link>
);

NavigationLink.Naked.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Text = styled.span`
  color: #545a77;
  
  &:hover {
    color: #008fb4;
  }
`;

NavigationLink.Text = ({
  href,
  children,
}) => (
  <Link href={href}>
    <Text>{children}</Text>
  </Link>
);

NavigationLink.Text.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Button = styled.span`
  border-radius: 200px;
  font-size: 14px;
  padding: 8px 18px;

  ${(props) => {
    const style = {
      primary: css`
        background: #e0446d;
        color: white;
      `,
      secondary: css`
        background: #f5f8fd;
        color: #008fb4;
      `,
    }[props.variant];

    return style;
  }}
`;

NavigationLink.Button = ({
  href,
  variant,
  children,
}) => (
  <Link href={href}>
    <Button variant={variant}>{children}</Button>
  </Link>
);

NavigationLink.Button.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationLink;
