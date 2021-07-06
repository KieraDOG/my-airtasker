import styled, { css } from 'styled-components';
import NakedButton from '../NakedButton';

const Button = styled(NakedButton)`
  border-radius: 160px;
  font-weight: bold;

  ${(props) => ({
    primary: css`
      background-color: rgb(224, 68, 109);
      border: 2px solid rgb(224, 68, 109);
      color: white;
    `,
    success: css`
      background-color: rgb(125, 179, 67);
      border: 2px solid rgb(125, 179, 67);
      color: white;
    `,
    transparent: css`
      color: white;
      border: 2px solid white;
      background-color: transparent;
    `,
  }[props.variant || 'primary'])}

  ${(props) => ({
    sm: css`
      font-size: 14px;
      padding: 4px 16px;
    `,
    md: css`
      font-size: 16px;
      padding: 8px 18px;
    `,
    lg: css`
      font-size: 18px;
      padding: 16px 24px;
    `,
  }[props.size || 'lg'])}

`;

export default Button;
