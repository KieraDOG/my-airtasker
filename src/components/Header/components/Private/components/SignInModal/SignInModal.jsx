import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 500px;
  background: white;
`;

const Header = styled.div`
  padding: 16px 24px;
  text-align: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Close = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  padding: 0 24px 0 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const HorizontalRule = styled.hr`
  margin: 0;
  border-color: #dadada;
`;

const Body = styled.div`
  padding: 16px 24px;
`;

const Footer = styled.div`
  padding: 16px 24px;
`;

const SignUpButton = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  color: #008fb4;
`;

const SignInModal = ({
  onClose,
  onSignUp,
}) => (
  <Overlay onClick={onClose}>
    <Modal onClick={(event) => event.stopPropagation()}>
      <Header>
        <Title>Sign In</Title>
        <Close onClick={onClose}>X</Close>
      </Header>
      <HorizontalRule />
      <Body>This is sign in body</Body>
      <HorizontalRule />
      <Footer>
        Not a member yet?&nbsp;
        <SignUpButton onClick={onSignUp}>Sign up now</SignUpButton>
      </Footer>
    </Modal>
  </Overlay>
);

SignInModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default SignInModal;
