import PropTypes from 'prop-types';
import React from 'react';
import Appointment from './components/Appointment';
import Budget from './components/Budget';
import Introduction from './components/Introduction';
import TaskDescription from './components/TaskDescription';

class PostATaskModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      data: {},
    };

    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        ...data,
      },
    }));
  }

  handleNext(event) {
    if (event) {
      event.preventDefault();
    }

    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  handleBack(event) {
    if (event) {
      event.preventDefault();
    }

    this.setState((prevState) => ({
      step: prevState.step - 1,
    }));
  }

  render() {
    const { onClose } = this.props;
    const { step } = this.state;

    return [
      (
        <Introduction
          onNext={this.handleNext}
          onClose={onClose}
        />
      ),
      (
        <TaskDescription
          onBack={this.handleBack}
          onNext={this.handleNext}
          onSubmit={this.handleSubmit}
          onClose={onClose}
        />
      ),
      (
        <Appointment
          onBack={this.handleBack}
          onNext={this.handleNext}
          onSubmit={this.handleSubmit}
          onClose={onClose}
        />
      ),
      (
        <Budget
          onBack={this.handleBack}
          onClose={onClose}
        />
      ),
    ][step];
  }
}

PostATaskModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PostATaskModal;
