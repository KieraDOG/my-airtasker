import React from 'react';
import styled from 'styled-components';
import Button from '../../../Button';
import HeaderItem from '../HeaderItem';
import SignUpModal from './components/SignUpModal';
import LoginModal from './components/LoginModal';
import ForgetPasswordModal from './components/ForgetPasswordModal';

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const MODAL = {
  EMPTY: '',
  LOGIN: 'LOGIN',
  SIGN_UP: 'SIGN_UP',
  FORGET_PASSWORD: 'FORGET_PASSWORD',
};

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentShownModal: MODAL.EMPTY,
    };
  }

  handleShowCurrentModal(modalToShow) {
    this.setState({
      currentShownModal: modalToShow,
    });
  }

  handleCloseCurrentModal() {
    this.handleShowCurrentModal(MODAL.EMPTY);
  }

  render() {
    const { currentShownModal } = this.state;

    return (
      <>
        <Layout>
          <HeaderItem onClick={() => this.handleShowCurrentModal(MODAL.SIGN_UP)} as={Button} variant="naked">
            Sign up
          </HeaderItem>
          <HeaderItem onClick={() => this.handleShowCurrentModal(MODAL.LOGIN)} as={Button} variant="naked">
            Log in
          </HeaderItem>
          <HeaderItem>
            <Button size="sm" variant="secondary">Become a tasker</Button>
          </HeaderItem>
        </Layout>
        {currentShownModal === MODAL.SIGN_UP && (
          <SignUpModal
            onClose={() => this.handleCloseCurrentModal()}
            onLogin={() => this.handleShowCurrentModal(MODAL.LOGIN)}
          />
        )}
        {currentShownModal === MODAL.LOGIN && (
          <LoginModal
            onClose={() => this.handleCloseCurrentModal()}
            onSignUp={() => this.handleShowCurrentModal(MODAL.SIGN_UP)}
            onForgetPassword={() => this.handleShowCurrentModal(MODAL.FORGET_PASSWORD)}
          />
        )}
        {currentShownModal === MODAL.FORGET_PASSWORD && (
          <ForgetPasswordModal
            onClose={() => this.handleCloseCurrentModal()}
          />
        )}
      </>
    );
  }
}

export default Auth;
