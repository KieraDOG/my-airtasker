import styled, { css } from 'styled-components';

const NavItem = styled.div`
  padding: 20px 14px;
  
  ${(props) => props.indictable && css`
    &:hover {
      position: relative;
  
      &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: 0;
        height: 2px;
        background-color: #008fb4;
      }
    }
  `}

  ${(props) => props.highlight && css`
    &:hover {
      color: #008fb4;
    }
  `}
`;

export default NavItem;
