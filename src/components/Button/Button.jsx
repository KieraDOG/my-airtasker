import styled, { css } from 'styled-components';

// props -> 两个不同的渲染
const Button = styled.button`
  outline: 0;
  border-radius: 200px;
  cursor: pointer;

  ${(props) => ({
    sm: css`
      font-size: 12px;
      padding: 8px 14px;
    `,
    default: css`
      padding: 12px 16px;
    `,
  })[props.size || 'default']}

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
    success: css`
      background-color: rgb(125, 179, 67);
      border: 1px solid rgb(125, 179, 67);
      color: white;
    `,
    naked: css`
      color: inherit;
      border-radius: 0;
      border: 0;
      font-size: inherit;
      padding: 0;
      background-color: transparent;
    `,
    link: css`
      color: #008fb4;
      border-radius: 0;
      border: 0;
      font-size: inherit;
      padding: 0;
      background-color: transparent;

      &:hover {
        text-decoration: underline;
      }
    `,
  }[props.variant])}
  
  &:disabled {
    filter: grayscale(50%);
    cursor: not-allowed;
  }
`;

export default Button;
