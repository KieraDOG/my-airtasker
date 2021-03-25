import React from 'react';
import styled from 'styled-components';
import { isEmail } from 'validator';
import axios from 'axios';
import Button from '../../../../../Button';
import Modal from '../../../../../Modal';
import Input from '../../../../../Input';
import FormItem from '../../../../../FormItem';
import ErrorMessage from '../../../../../ErrorMessage';
import ServerErrorMessage from '../../../../../ServerErrorMessage';
import withForm from '../../../../../withForm';
import withAPI from '../../../../../withAPI';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
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

const SignUpModal = ({
  handleDataChange, getError, isFormTouched, handleFormTouch, validateForm,
  serverResponse, isServerRequesting, callAPI,
  onClose, onLogin,
}) => {
  const error = getError();

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
      <form
        onSubmit={(event) => {
          event.preventDefault();

          handleFormTouch();

          const valid = validateForm();
          if (!valid) {
            return;
          }

          callAPI();
        }}
      >
        {Object.keys(FIELD).map((key) => {
          const { label, type } = FIELD[key];

          const isFieldOnError = error[key] && isFormTouched;

          return (
            <FormItem key={key} label={label}>
              <Input type={type} error={isFieldOnError} onChange={handleDataChange(key)} />
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
};

const compose = (...fns) => (initial) => {
  let result;

  for (let i = fns.length - 1; i >= 0; i--) {
    const fn = fns[i];

    result = fn(result || initial);
  }

  return result;
};

export default compose(
  withForm(FIELD),
  withAPI({
    callAPI: ({ data }) => axios.post('http://localhost:8000/auth/sign-up', data),
    onSuccess: ({ onClose }) => onClose(),
    onError: () => {},
  }),
)(SignUpModal);
