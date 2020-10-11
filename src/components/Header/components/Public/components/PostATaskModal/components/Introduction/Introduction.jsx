import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import AuthenticationModals from '../../../../../../../AuthenticationModals';
import Button from '../Button';
import Modal from '../../../../../../../Modal';
import { AuthenticationContext } from '../../../../../../../withAuthentication';

const Body = styled.div`
  padding: 80px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
`;

const Title = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  text-align: center;
  line-height: 1.35;
`;

const Footer = styled(Modal.Footer)`
  text-align: center;
`;

class Introduction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAuthenticationModals: false,
    };

    this.toggleShowAuthenticationModals = this.toggleShowAuthenticationModals.bind(this);
  }

  toggleShowAuthenticationModals(event) {
    if (event) {
      event.preventDefault();
    }

    this.setState((prevState) => ({
      showAuthenticationModals: !prevState.showAuthenticationModals,
    }));
  }

  render() {
    const { onNext, onClose } = this.props;
    const { showAuthenticationModals } = this.state;

    if (showAuthenticationModals) {
      return (
        <AuthenticationModals
          initialModal="signUp"
          onClose={this.toggleShowAuthenticationModals}
        />
      );
    }

    return (
      <Modal onClose={onClose}>
        <Body>
          <Image src="https://www.airtasker.com/images/taylor/on-boarding.png" alt="On boarding" />
          <Title>Start getting offers in no time</Title>
          <SubTitle>
            We&amp;re just going to ask a few questions to help you find the right Tasker
            - it will only take a few minutes!
          </SubTitle>
        </Body>
        <Footer>
          <AuthenticationContext.Consumer>
            {({ user }) => (user ? (
              <Button variant="success" onClick={onNext}>
                Next
              </Button>
            ) : (
              <Button variant="secondary" onClick={this.toggleShowAuthenticationModals}>
                Register Now
              </Button>
            ))}
          </AuthenticationContext.Consumer>
          <p>Connect with experts to get the job done</p>
        </Footer>
      </Modal>
    );
  }
}

Introduction.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Introduction;
