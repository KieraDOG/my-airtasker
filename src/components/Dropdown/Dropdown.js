import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: relative;
`;

const Layout = styled.div`
  position: absolute;
  left: 0;
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(41,43,50,.1);
  min-width: 100px;
`;

const Item = styled.div`
  padding: 10px 20px;

  & ~ & {
    border-top: 1px solid rgba(41,43,50,.1);
  }
`;

const Dropdown = ({
  items,
  children,
  visible,
}) => (
  <Box>
    {children}
    {visible && (
      <Layout>
        {items.map((i) => (<Item key={i.key}>{i.content}</Item>))}
      </Layout>
    )}
  </Box>
);

export default Dropdown;
