import styled, { css } from 'styled-components';

const NavItem = styled.div`
  padding: 18px 14px;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  
  ${(props) => props.indictable && css`
    &:hover {
      border-top-color: #008fb4;
    }
  `}

  ${(props) => props.highlight && css`
    &:hover {
      color: #008fb4;
    }
  `}
`;

export default NavItem;
