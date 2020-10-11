import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../../../../../../Modal';
import Button from '../Button';
import Footer from '../Footer';
import Progress from '../Progress';

const Budget = ({
  onClose,
  onPrevious,
}) => (
  <Modal onClose={onClose}>
    <Modal.Header>Suggest how much</Modal.Header>
    <Progress value={`${(100 / 3) * 3}%`} />
    <Modal.Body>Budget</Modal.Body>
    <Footer>
      <Button variant="secondary" onClick={onPrevious}>Previous</Button>
      <Button variant="success" onClick={onClose}>Quote</Button>
    </Footer>
  </Modal>
);

Budget.propTypes = {
  onClose: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default Budget;
