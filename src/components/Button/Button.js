import styled,  { css } from 'styled-components';
import NakedButton from '../NakedButton';

const Button = styled(NakedButton)`
  padding: 6px 12px;
  border-radius: 200px;
  cursor: pointer;
  border: 2px solid rgba(41,43,50,.1);

  ${(props) => props.disabled && css`
    cursor: not-allowed;
    filter: grayscale(0.5);
  `}

  ${(props) => props.block && css`
    display: block;
    width: 100%;
  `}

  ${(props) => ({
    sm: css`
      font-size: 14px;
    `,
    default: css`
      font-size: 16px;
    `,
    lg: css`
      font-size: 18px;
      padding: 12px 24px;
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
    success: css`
      background: rgb(125, 179, 67);
      color: white;
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
