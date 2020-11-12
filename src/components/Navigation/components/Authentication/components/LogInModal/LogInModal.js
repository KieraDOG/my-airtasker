import React from 'react';
import styled from 'styled-components';
import Modal from '../../../../../Modal';
import Button from '../../../../../Button';

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogInModal = ({
  onClose,
  onSignUp,
}) => (
  <Modal 
    onClose={onClose}
    title="Log in"
    body="My Log in"
    footer={(
      <Footer>
        <div>Don't have a account?</div>
        <Button variant="link" onClick={onSignUp}>Sign up</Button>
      </Footer>
    )}
  />
)

export default LogInModal;
