import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import FormItem from '../../../../components/FormItem';
import ErrorMessage from '../../../../components/ErrorMessage';
import Modal, { CloseButton } from '../../../../components/Modal';
import validate from './validate';

const Form = styled.form`
`;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

const SignUpButton = styled(Button)`
  width: 100%;
`;

const initialData = {
  value: '',
  blurred: false,
  touched: false,
  focused: false,
};

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: initialData,
        password: initialData,
        confirmPassword: initialData,
      },
      isFormSubmit: false,
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
    this.handleFocusedChange = this.handleFocusedChange.bind(this);
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
      const errorOfName = validate(name, data);

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
    const { onClose } = this.props;
    const { data } = this.state;

    const error = this.getError(data);

    const hasError = Object.keys(error).length > 0;

    return (
      <Modal onClose={onClose}>
        <Title>Join Us</Title>
        <CloseButton onClick={onClose} />
        <Form
          onSubmit={(event) => {
            event.preventDefault();

            this.handleIsFormSubmitChange(true);

            if (hasError) {
              console.log('FORM HAS ERROR');

              return;
            }

            console.log('state', this.state);
          }}
        >
          {[
            { key: 'email', label: 'Email' },
            { key: 'password', label: 'Password' },
            { key: 'confirmPassword', label: 'Confirm password' },
          ].map(({ key, label }) => (
            <FormItem key={key} label={label} htmlFor={`sign-up-modal-${key}`}>
              <Input
                name={key}
                value={data[key].value}
                onChange={this.handleDataChange}
                onFocus={this.handleFocusedChange}
                onBlur={this.handleBlurredChange}
                error={this.getErrorMessage(error, key)}
                id={`sign-up-modal-${key}`}
              />
              <ErrorMessage>{this.getErrorMessage(error, key)}</ErrorMessage>
            </FormItem>
          ))}
          <SignUpButton size="md" variant="success">
            Join Airtasker
          </SignUpButton>
        </Form>
      </Modal>
    );
  }
}

export default SignUpModal;
