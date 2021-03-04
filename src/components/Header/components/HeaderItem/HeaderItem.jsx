import styled, { css } from 'styled-components';

const HeaderItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  
  &:hover {
    color: #008fb4;
  }

  & ~ & {
    margin-left: 16px;
  }

  ${(props) => props.highlight && css`
    &:hover {
      border-top-color: #008fb4;
    }
  `}
`;

export default HeaderItem;
