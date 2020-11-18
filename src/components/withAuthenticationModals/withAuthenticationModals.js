import React from 'react';
import LogInModal from './components/LogInModal';
import SignUpModal from './components/SignUpModal';
import ForgetPasswordModal from './components/ForgetPasswordModal';
import AuthenticationContext from '../AuthenticationContext';

// persist 登录状态, refresh, tabs close, tabs change
// localStorage

const withAuthenticationModals = (Component) => {
  class AuthenticationModals extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        showModal: null,
      };

      this.setShowLogInModal = this.setShowLogInModal.bind(this);
      this.setShowSignUpModal = this.setShowSignUpModal.bind(this);
      this.setShowForgetPasswordModal = this.setShowForgetPasswordModal.bind(this);
    }

  
    setShowLogInModal() {
      this.setState({ showModal: 'LOG_IN' });
    }
  
    setShowSignUpModal() {
      this.setState({ showModal: 'SIGN_UP' });
    }
  
    setShowForgetPasswordModal() {
      this.setState({ showModal: 'FORGET_PASSWORD' });
    }
  
    setCloseModal() {
      this.setState({ showModal: null });
    }

    render() {
      const { showModal } = this.state;

      return (
        <AuthenticationContext.Consumer>
          {({ setUser }) => (
            <React.Fragment>
              <Component 
                {...this.props}
                setShowLogInModal={this.setShowLogInModal}
                setShowSignUpModal={this.setShowSignUpModal}
                setShowForgetPasswordModal={this.setShowForgetPasswordModal}
              />
              {showModal === 'SIGN_UP' && (
                <SignUpModal 
                  onClose={() => this.setCloseModal()} 
                  onSignUp={(data) => setUser(data)}
                  onLogIn={() => this.setShowLogInModal()}
                />
              )}
              {showModal === 'LOG_IN' && (
                <LogInModal 
                  onClose={() => this.setCloseModal()} 
                  onLogIn={(data) => setUser(data)}
                  onSignUp={() => this.setShowSignUpModal()}
                  onForgetPassword={() => this.setShowForgetPasswordModal()}
                />
              )}
              {showModal === 'FORGET_PASSWORD' && (
                <ForgetPasswordModal 
                  onClose={() => this.setCloseModal()} 
                  onSignUp={() => this.setShowSignUpModal()}
                />
              )}
            </React.Fragment>
          )}
        </AuthenticationContext.Consumer>
      )
    }
  }

  return AuthenticationModals;
};

export default withAuthenticationModals;
