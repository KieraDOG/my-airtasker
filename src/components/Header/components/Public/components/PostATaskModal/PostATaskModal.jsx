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
    };

    this.handelNext = this.handelNext.bind(this);
    this.handelPrevious = this.handelPrevious.bind(this);
  }

  handelNext(event) {
    if (event) {
      event.preventDefault();
    }

    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  handelPrevious(event) {
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
          onPrevious={this.handelPrevious}
          onNext={this.handelNext}
          onClose={onClose}
        />
      ),
      (
        <Appointment
          onPrevious={this.handelPrevious}
          onNext={this.handelNext}
          onClose={onClose}
        />
      ),
      (
        <Budget
          onPrevious={this.handelPrevious}
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
