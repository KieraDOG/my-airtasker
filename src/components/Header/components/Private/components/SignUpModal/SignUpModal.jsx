import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../../Modal';
import NakedButton from '../../../../../NakedButton';

const SignUpModal = ({
  onClose,
  onSignIn,
}) => (
  <Modal onClose={onClose}>
    <Modal.Header>Sign Up</Modal.Header>
    <Modal.Body>This is sign up body</Modal.Body>
    <Modal.Footer>
      Already a member?&nbsp;
      <NakedButton variant="link" onClick={onSignIn}>Sign in now</NakedButton>
    </Modal.Footer>
  </Modal>
);

SignUpModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

export default SignUpModal;
