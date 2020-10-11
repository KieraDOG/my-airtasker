import PropTypes from 'prop-types';
import React from 'react';
import compose from '../../../../../../../../utils/compose';
import FormItem from '../../../../../../../FormItem';
import Input from '../../../../../../../Input';
import Modal from '../../../../../../../Modal';
import withForm from '../../../../../../../withForm';
import Button from '../Button';
import Footer from '../Footer';
import Progress from '../Progress';
import form from './form';

const TaskDescription = ({
  onClose,
  onNext,
  onSubmit,
  formData,
  getData,
  getErrorMessage,
  handleFormDataChange,
  isFormValid,
}) => (
  <form
    onSubmit={(event) => {
      event.preventDefault();

      if (!isFormValid()) {
        return;
      }

      const data = getData();

      onSubmit(data);
    }}
  >
    <Modal onClose={onClose}>
      <Modal.Header>Tell us what you need done?</Modal.Header>
      <Progress value={`${(100 / 3)}%`} />
      <Modal.Body>
        {Object.keys(form).map((key) => {
          const { label, type, helper } = form[key];
          const { value, touched } = formData[key];

          const errorMessage = touched ? getErrorMessage(key) : '';

          return (
            <FormItem
              key={key}
              htmlFor={key}
              label={label}
              helper={helper}
              errorMessage={errorMessage}
            >
              <Input
                id={key}
                type={type}
                error={errorMessage}
                value={value}
                onChange={handleFormDataChange(key)}
              />
            </FormItem>
          );
        })}
      </Modal.Body>
      <Footer>
        <Button
          disabled={!isFormValid()}
          variant="success"
          onClick={onNext}
        >
          Next
        </Button>
      </Footer>
    </Modal>
  </form>
);

TaskDescription.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formData: PropTypes.objectOf(PropTypes.shape({
    value: PropTypes.string,
    touched: PropTypes.bool,
  })).isRequired,
  getData: PropTypes.func.isRequired,
  getErrorMessage: PropTypes.func.isRequired,
  handleFormDataChange: PropTypes.func.isRequired,
  isFormValid: PropTypes.func.isRequired,
};

const EnhancedTaskDescription = compose(
  withForm(form),
)(TaskDescription);

export default EnhancedTaskDescription;
