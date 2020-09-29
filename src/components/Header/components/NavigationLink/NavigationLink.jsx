import styled, { css } from 'styled-components';

const NavigationLink = styled.a`
  text-decoration: none;
  color: #545a77;
  margin: 16px;

  &:hover {
    color: #008fb4;
  }

  ${(props) => props.indictable && css`
    &:hover {
      border-bottom: 2px solid #008fb4;
      margin-bottom: -2px;
    }
  `}
`;

export default NavigationLink;
