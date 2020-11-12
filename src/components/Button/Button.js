import styled,  { css } from 'styled-components';

const Button = styled.button`
  border: 0;
  padding: 6px 12px;
  border-radius: 200px;
  cursor: pointer;
  border: 2px solid rgba(41,43,50,.1);

  ${(props) => ({
    sm: css`
      font-size: 14px;
    `,
    default: css`
      font-size: 16px;
    `,
  }[props.size || 'default'])}

  ${(props) => ({
    primary: css`
      background: #e0446d;
      color: white;
    `,
    secondary: css`
      background-color: #f6f8fd;
      color: #008fb4;
    `,
    link: css` 
      padding: 0;
      border: 0;
      background: transparent;
      color: #008fb4;

      &:hover {
        text-decoration: underline;
      }
    `,
  }[props.variant])}
`;

export default Button;
