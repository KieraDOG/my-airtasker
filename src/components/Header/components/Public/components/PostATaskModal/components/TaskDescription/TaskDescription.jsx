import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../../../../../../Modal';
import Button from '../Button';
import Footer from '../Footer';
import Progress from '../Progress';

const TaskDescription = ({
  onClose,
  onNext,
}) => (
  <Modal onClose={onClose}>
    <Modal.Header>Tell us what you need done?</Modal.Header>
    <Progress value={`${(100 / 3)}%`} />
    <Modal.Body>Task Description</Modal.Body>
    <Footer>
      <Button variant="success" onClick={onNext}>Next</Button>
    </Footer>
  </Modal>
);

TaskDescription.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default TaskDescription;
