import React from 'react';
import styled from 'styled-components';

const Types = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 45%;
  background-color: #f5f8fd;
  padding: 8px;
`;

const Title = styled.div`
  margin-bottom: 6px;
`;

const Subtitle = styled.div`
  color: #545a77;
`;

const Type = () => (
  <Types>
    <Item>
      <Title>In person</Title>
      <Subtitle>Select this if you need the Tasker physically there.</Subtitle>
    </Item>
    <Item>
      <Title>Online</Title>
      <Subtitle>Select this if the Tasker can do it from home</Subtitle>
    </Item>
  </Types>
);

export default Type;
