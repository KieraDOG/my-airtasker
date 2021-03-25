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
      currentShownModal: MODAL.SIGN_UP,
    };

    this.handleCloseCurrentModal = this.handleCloseCurrentModal.bind(this);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
  }

  handleShowCurrentModal(modalToShow) {
    this.setState({
      currentShownModal: modalToShow,
    });
  }

  handleCloseCurrentModal() {
    this.handleShowCurrentModal(MODAL.EMPTY);
  }

  handleLoginSuccess(user) {
    const { setUser } = this.props;

    this.handleCloseCurrentModal();
    setUser(user);
  }

  render() {
    const { currentShownModal } = this.state;
    const { user } = this.props;

    return (
      <>
        <Layout>
          {user ? (
            <HeaderItem>{user.email}</HeaderItem>
          ) : (
            <>
              <HeaderItem onClick={() => this.handleShowCurrentModal(MODAL.SIGN_UP)} as={Button} variant="naked">
                Sign up
              </HeaderItem>
              <HeaderItem onClick={() => this.handleShowCurrentModal(MODAL.LOGIN)} as={Button} variant="naked">
                Log in
              </HeaderItem>
            </>
          )}
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
            onClose={this.handleCloseCurrentModal}
            onSuccess={this.handleLoginSuccess}
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
