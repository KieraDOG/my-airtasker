import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../../Modal';
import NakedButton from '../../../../../NakedButton';

const SignInModal = ({
  onClose,
  onSignUp,
}) => (
  <Modal onClose={onClose}>
    <Modal.Header>Sign In</Modal.Header>
    <Modal.Body>This is sign in body</Modal.Body>
    <Modal.Footer>
      Not a member yet?&nbsp;
      <NakedButton variant="link" onClick={onSignUp}>Sign up now</NakedButton>
    </Modal.Footer>
  </Modal>
);

SignInModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default SignInModal;
