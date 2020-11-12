import React from 'react';
import styled from 'styled-components';
import Modal from '../../../../../Modal';
import Button from '../../../../../Button';

// 简单的重复优于复杂的抽象
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SignUpModal = ({
  onClose,
  onLogIn,
}) => (
  <Modal
    onClose={onClose}
    title="Sign up"
    body="My Sign up"
    footer={(
      <Footer>
        <div>Already have an account?</div>
        <Button variant="link" onClick={onLogIn}>Log in</Button>
      </Footer>
    )}
  />
)

export default SignUpModal;
