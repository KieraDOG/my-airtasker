import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../../../../../Modal';
import NakedButton from '../../../../../NakedButton';
import Button from '../../../../../Button';
import FormItem from '../../../../../FormItem';
import Input from '../../../../../Input';
import Alert from '../../../../../Alert';
import signIn, { error as ERROR } from '../../../../../../apis/signIn';
import form from './form';

const Form = styled.form`
  padding: 16px 0;
`;

class SignInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: false,
      formData: {
        email: {
          value: '',
          touched: false,
        },
        password: {
          value: '',
          touched: false,
        },
      },
    };

    this.handleFormDataChange = this.handleFormDataChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  getData() {
    const { formData } = this.state;
    const data = Object
      .keys(formData)
      .reduce((obj, key) => ({
        ...obj,
        [key]: formData[key].value,
      }), {});

    return data;
  }

  getErrorMessage(target) {
    const { formData } = this.state;

    const { getErrorMessage } = form[target];
    const { value } = formData[target];
    const data = this.getData();

    const errorMessage = getErrorMessage(value, data);

    return errorMessage;
  }

  handleFormDataChange(target) {
    return (event) => {
      event.preventDefault();
      const { value } = event.target;

      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [target]: {
            value,
            touched: true,
          },
        },
      }));
    };
  }

  handleFormSubmit(event) {
    const { onClose, onSignInSuccess } = this.props;

    event.preventDefault();

    this.setState({
      error: null,
      loading: true,
    });

    if (!this.isFormValid()) {
      return;
    }

    const data = this.getData();

    signIn(data)
      .then((res) => {
        this.setState({
          loading: false,
        });

        if (!res.ok) {
          throw res;
        }

        return res.json();
      })
      .then((user) => {
        onClose();
        onSignInSuccess(user);
      })
      .catch((error) => {
        if (ERROR[error.status]) {
          this.setState({
            error: ERROR[error.status],
          });

          return;
        }

        throw error;
      });
  }

  isFormValid() {
    const { formData } = this.state;

    const errorMessages = Object
      .keys(formData)
      .map((key) => {
        const errorMessage = this.getErrorMessage(key);

        return errorMessage;
      })
      .filter((v) => !!v);

    return !errorMessages.length;
  }

  render() {
    const { onClose, onSignUp } = this.props;
    const { formData, error, loading } = this.state;

    return (
      <Modal onClose={onClose}>
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
            {error && (
              <FormItem>
                <Alert>{error}</Alert>
              </FormItem>
            )}
            {Object.keys(form).map((key) => {
              const { label, type } = form[key];
              const { value, touched } = formData[key];

              const errorMessage = touched ? this.getErrorMessage(key) : '';

              return (
                <FormItem
                  key={key}
                  htmlFor={key}
                  label={label}
                  errorMessage={errorMessage}
                >
                  <Input
                    id={key}
                    type={type}
                    error={errorMessage}
                    value={value}
                    onChange={this.handleFormDataChange(key)}
                  />
                </FormItem>
              );
            })}
            <FormItem>
              <Button
                disabled={!this.isFormValid() || loading}
                width="100%"
                variant="success"
              >
                Sign n
              </Button>
            </FormItem>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Not a member yet?&nbsp;
          <NakedButton variant="link" onClick={onSignUp}>Sign up now</NakedButton>
        </Modal.Footer>
      </Modal>
    );
  }
}

SignInModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignInSuccess: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default SignInModal;
