import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import withAuthenticationModals from '../withAuthenticationModals';

const Layout = styled.div`
  padding: 36px 0;
`;

const Banner = ({
  setShowSignUpModal,
}) => (
  <Layout>
    <Button variant="primary" onClick={setShowSignUpModal}>Join us now</Button>
  </Layout>
);

const WithAuthenticationModalsBanner = withAuthenticationModals(Banner);

export default WithAuthenticationModalsBanner;