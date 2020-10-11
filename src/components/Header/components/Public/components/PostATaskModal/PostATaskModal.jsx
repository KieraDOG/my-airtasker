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
      step: 1,
    };

    this.handelNext = this.handelNext.bind(this);
    this.handelBack = this.handelBack.bind(this);
  }

  handelNext(event) {
    if (event) {
      event.preventDefault();
    }

    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  handelBack(event) {
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
          onNext={this.handelNext}
          onClose={onClose}
        />
      ),
      (
        <TaskDescription
          onBack={this.handelBack}
          onNext={this.handelNext}
          onClose={onClose}
        />
      ),
      (
        <Appointment
          onBack={this.handelBack}
          onNext={this.handelNext}
          onClose={onClose}
        />
      ),
      (
        <Budget
          onBack={this.handelBack}
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
