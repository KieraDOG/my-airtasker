import React from 'react';
import styled from 'styled-components';
import { isEmail } from 'validator';
import axios from 'axios';
import Button from '../../../../../Button';
import Modal from '../../../../../Modal';
import Input from '../../../../../Input';
import FormItem from '../../../../../FormItem';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMessage = styled.div`
  color: rgb(231, 82, 69);
  font-size: 12px;
  margin-top: 8px;
  font-weight: bold;
`;

const ServerErrorMessage = styled.div`
  background: rgb(231, 82, 69);
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  margin-bottom: 18px;
`;

const FIELD = {
  email: {
    label: 'Email',
    type: 'text',
    validations: [{
      validator: (data) => isEmail(data.email),
      errorMessage: 'Please input a valid email address',
    }, {
      validator: (data) => !!data.email,
      errorMessage: 'Please input your email',
    }],
  },
  password: {
    label: 'Password',
    type: 'password',
    validations: [{
      validator: (data) => !!data.password,
      errorMessage: 'Please input your password',
    }],
  },
  confirmPassword: {
    label: 'Confirm password',
    type: 'password',
    validations: [{
      validator: (data) => data.password === data.confirmPassword,
      errorMessage: 'Please confirm your password',
    }, {
      validator: (data) => !!data.confirmPassword,
      errorMessage: 'Please input your confirm password',
    }],
  },
};

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      isFormTouched: false,
      isServerRequesting: false,
      serverResponse: undefined,
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleFormTouch = this.handleFormTouch.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleServerResponse = this.handleServerResponse.bind(this);
    this.handleServerRequest = this.handleServerRequest.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  getError() {
    const { data } = this.state;

    const error = {};

    Object.keys(FIELD).forEach((key) => {
      const { validations } = FIELD[key];
      validations.forEach(({ validator, errorMessage }) => {
        const valid = validator(data);

        if (valid) {
          return;
        }

        error[key] = errorMessage;
      });
    });

    return error;
  }

  handleServerResponse(serverResponse) {
    this.setState({
      serverResponse,
    });
  }

  handleServerRequest(isServerRequesting) {
    this.setState({
      isServerRequesting,
    });
  }

  handleFormTouch() {
    this.setState({
      isFormTouched: true,
    });
  }

  handleDataChange(key) {
    return (event) => {
      const dataToChange = {
        [key]: event.target.value,
      };

      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          ...dataToChange,
        },
      }));
    };
  }

  validateForm() {
    const error = this.getError();

    return Object.keys(error).length === 0;
  }

  handleFormSubmit(event) {
    const { data } = this.state;
    const { onClose } = this.props;

    event.preventDefault();

    this.handleFormTouch();
    this.handleServerResponse();

    const valid = this.validateForm();
    if (!valid) {
      return;
    }

    this.handleServerRequest(true);

    axios
      .post('http://localhost:8000/auth/sign-up', data)
      .then(() => onClose())
      .catch((error) => {
        this.handleServerRequest(false);
        this.handleServerResponse(error.response);
      });
  }

  render() {
    const { onClose, onLogin } = this.props;
    const { isFormTouched, serverResponse, isServerRequesting } = this.state;

    const error = this.getError();

    return (
      <Modal
        onClose={onClose}
        header="Join us"
        footer={(
          <Footer>
            <div>
              Already have an account?
            </div>
            <Button variant="link" onClick={onLogin}>
              Log in
            </Button>
          </Footer>
        )}
      >
        {serverResponse && (
          <ServerErrorMessage>
            {{
              409: 'Email address is already been taken, please try another one.',
            }[serverResponse.status] || 'Something wrong, please try again later.'}
          </ServerErrorMessage>
        )}
        <form onSubmit={this.handleFormSubmit}>
          {Object.keys(FIELD).map((key) => {
            const { label, type } = FIELD[key];

            const isFieldOnError = error[key] && isFormTouched;

            return (
              <FormItem key={key} label={label}>
                <Input type={type} error={isFieldOnError} onChange={this.handleDataChange(key)} />
                {isFieldOnError && (<ErrorMessage>{error[key]}</ErrorMessage>)}
              </FormItem>
            );
          })}
          <FormItem>
            <FullWidthButton
              variant="success"
              disabled={isServerRequesting}
            >
              {isServerRequesting ? 'Signing up...' : 'Sign up'}
            </FullWidthButton>
          </FormItem>
        </form>
      </Modal>
    );
  }
}

export default SignUpModal;
