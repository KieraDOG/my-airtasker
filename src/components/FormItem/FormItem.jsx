import React from 'react';
import styled from 'styled-components';
import Label from '../Label';

const Layout = styled.div`
  & ~ & {
    margin-top: 16px;
  }
`;

const FormItem = ({
  label,
  children,
}) => (
  <Layout>
    {label && (<Label>{label}</Label>)}
    {children}
  </Layout>
);

export default FormItem;
