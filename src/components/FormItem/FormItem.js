import React from 'react';
import styled from 'styled-components';

// styled-components 语法 sass
const Wrapper = styled.div`
  & ~ & {
    margin-top: 14px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  letter-spacing: 0.25px;
  margin-bottom: 8px;
  color: rgb(41, 43, 50);
`;

const Error = styled.div`
  margin-top: 2px;
  color: #e0446d;
`;

const FormItem = ({
  label,
  children,
  htmlFor,
  error,
}) => (
  <Wrapper>
    {label && (<Label htmlFor={htmlFor}>{label}</Label>)}
    {children}
    {error && (<Error>{error}</Error>)}
  </Wrapper>
);

export default FormItem;
