import React from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation';

const Wrapper = styled.div`
  height: 100vh;
  background: #f6f8fd;
`;

function App() {
  return (
    <Wrapper>
      <Navigation />
    </Wrapper>
  );
}

export default App;
