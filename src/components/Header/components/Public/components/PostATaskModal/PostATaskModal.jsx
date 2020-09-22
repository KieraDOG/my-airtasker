import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../../Modal';

const PostATaskModal = ({
  onClose,
}) => (
  <Modal onClose={onClose}>
    <Modal.Body>This is post a task body</Modal.Body>
    <Modal.Footer>This is post a task footer</Modal.Footer>
  </Modal>
);

PostATaskModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PostATaskModal;
