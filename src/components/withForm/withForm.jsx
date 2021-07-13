import React from 'react';

const initialData = {
  value: '',
  blurred: false,
  touched: false,
  focused: false,
};

const withForm = ({
  names,
  validate,
}) => (Component) => {
  class Form extends React.Component {
    constructor(props) {
      super(props);

      const data = {};

      names.forEach((name) => {
        data[name] = initialData;
      });

      this.validate = validate;

      this.state = {
        data,
        isFormSubmit: false,
      };

      this.handleDataChange = this.handleDataChange.bind(this);
      this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
      this.handleBlurredChange = this.handleBlurredChange.bind(this);
      this.handleFocusedChange = this.handleFocusedChange.bind(this);
      this.getErrorMessage = this.getErrorMessage.bind(this);
    }

    getErrorMessage(error, name) {
      const { data, isFormSubmit } = this.state;

      const showInputError = data[name].blurred;

      return (showInputError || isFormSubmit) && error[name];
    }

    getError() {
      const { data } = this.state;

      const error = {};

      Object.keys(data).forEach((name) => {
        const errorOfName = this.validate(name, data);

        if (!errorOfName) {
          return;
        }

        error[name] = errorOfName;
      });

      return error;
    }

    setData(name, newData) {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          [name]: {
            ...prevState.data[name],
            ...newData,
          },
        },
      }));
    }

    handleIsFormSubmitChange(newIsFormSubmit) {
      this.setState({
        isFormSubmit: newIsFormSubmit,
      });
    }

    handleFocusedChange(event) {
      const { name } = event.target;

      this.setData(name, {
        focused: true,
      });
    }

    handleBlurredChange(event) {
      const { name } = event.target;

      this.setData(name, {
        blurred: true,
        focused: false,
      });
    }

    handleDataChange(event) {
      const { name, value } = event.target;

      this.setData(name, {
        value,
        touched: true,
      });
    }

    render() {
      const { data, isFormSubmit } = this.state;

      const error = this.getError(data);

      const hasError = Object.keys(error).length > 0;

      return (
        <Component
          {...this.props}
          data={data}
          error={error}
          hasError={hasError}
          isFormSubmit={isFormSubmit}
          handleDataChange={this.handleDataChange}
          handleFocusedChange={this.handleFocusedChange}
          handleBlurredChange={this.handleBlurredChange}
          getErrorMessage={this.getErrorMessage}
          handleIsFormSubmitChange={this.handleIsFormSubmitChange}
        />
      );
    }
  }

  return Form;
}

export default withForm;
