import styled, { css } from 'styled-components';

// props -> 两个不同的渲染
const Button = styled.button`
  outline: 0;
  padding: 8px 14px;
  border-radius: 200px;
  font-size: 12px;
  cursor: pointer;

  ${(props) => ({
    primary: css`
      color: white;
      background-color: #e0446d;
      border: 1px solid #e0446d;
    `,
    secondary: css`
      color: #008fb4;
      background-color: #f6f8fd;
      border: 1px solid #e1e3e8;
    `,
  }[props.variant])}
`;

export default Button;
