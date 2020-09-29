import React from 'react';
import styled from 'styled-components';
import NavigationButton from '../NavigationButton';
import NavigationLink from '../NavigationLink';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';
import NakedButton from '../../../NakedButton';
import Link from '../../../Link';

const Layout = styled.div`
  display: flex;
`;

const MODAL = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  EMPTY: null,
};

class Private extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: MODAL.EMPTY,
    };

    this.showModal = this.showModal.bind(this);
  }

  showModal(target) {
    return (event) => {
      event.preventDefault();

      this.setState({
        showModal: target,
      });
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Layout>
          <NavigationLink as={NakedButton} onClick={this.showModal(MODAL.SIGN_IN)}>
            Sign in
          </NavigationLink>
          <NavigationLink as={NakedButton} onClick={this.showModal(MODAL.SIGN_UP)}>
            Sign up
          </NavigationLink>
          <NavigationButton as={Link} variant="secondary" href="/enroll">
            Become a Tasker
          </NavigationButton>
        </Layout>
        {showModal === MODAL.SIGN_IN && (
          <SignInModal
            onClose={this.showModal(MODAL.EMPTY)}
            onSignUp={this.showModal(MODAL.SIGN_UP)}
          />
        )}
        {showModal === MODAL.SIGN_UP && (
          <SignUpModal
            onClose={this.showModal(MODAL.EMPTY)}
            onSignIn={this.showModal(MODAL.SIGN_IN)}
          />
        )}
      </>
    );
  }
}

export default Private;
