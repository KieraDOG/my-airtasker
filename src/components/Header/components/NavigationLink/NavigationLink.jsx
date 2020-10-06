import styled, { css } from 'styled-components';
import { Link } from '../../../Router';

const NavigationLink = styled(Link)`
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
