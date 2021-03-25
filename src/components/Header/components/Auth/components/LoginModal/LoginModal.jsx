import axios from 'axios';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import styled from 'styled-components';
import Button from '../../../../../Button';
import ErrorMessage from '../../../../../ErrorMessage';
import FormItem from '../../../../../FormItem';
import Input from '../../../../../Input';
import Modal from '../../../../../Modal';
import ServerErrorMessage from '../../../../../ServerErrorMessage';
import withForm from '../../../../../withForm';

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
};

const getInitialData = (field) => Object
  .keys(field)
  .reduce((acc, cur) => ({
    ...acc,
    [cur]: '',
  }), {});

const useForm = (field, onSubmit) => {
  const [data, setData] = useState(getInitialData(field));
  const [isFormTouched, setIsFormTouched] = useState(false);

  const handleDataChange = useCallback((key) => (event) => {
    const dataToChange = {
      [key]: event.target.value,
    };

    setData((prevData) => ({
      ...prevData,
      ...dataToChange,
    }));
  }, []);

  const error = useMemo(() => {
    const result = {};

    Object.keys(field).forEach((key) => {
      const { validations } = field[key];
      validations.forEach(({ validator, errorMessage }) => {
        const valid = validator(data);

        if (valid) {
          return;
        }

        result[key] = errorMessage;
      });
    });

    return result;
  }, [data, field]);

  const validateForm = useCallback(() => Object.keys(error).length === 0, [error]);

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault();

    setIsFormTouched(true);

    const valid = validateForm();
    if (!valid) {
      return;
    }

    onSubmit(data);
  }, [data, onSubmit, validateForm]);

  return {
    data,
    error,
    isFormTouched,
    handleDataChange,
    handleFormSubmit,
  };
};

const useAPI = (fn, {
  onSuccess,
  onFail,
} = {}) => {
  const [serverResponse, setServerResponse] = useState();
  const [isServerRequesting, setIsServerRequesting] = useState(false);

  const callAPI = useCallback(async (...args) => {
    setServerResponse();
    setIsServerRequesting(true);

    try {
      const response = await fn(...args);

      setServerResponse(response);
      setIsServerRequesting(false);

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setServerResponse(error.response);
      setIsServerRequesting(false);

      if (onFail) {
        onFail();
      }
    }
  }, [fn, onSuccess, onFail]);

  return {
    serverResponse,
    isServerRequesting,
    callAPI,
  };
};

const LoginModal = ({
  onClose,
  onSuccess,
  onSignUp,
}) => {
  const requestSignIn = useCallback((data) => axios.post('http://localhost:8000/auth/sign-in', data), []);

  const {
    callAPI,
    serverResponse,
    isServerRequesting,
  } = useAPI(requestSignIn);

  const {
    data,
    error,
    isFormTouched,
    handleDataChange,
    handleFormSubmit,
  } = useForm(FIELD, callAPI);

  useEffect(() => {
    if (!serverResponse || serverResponse.status !== 200) {
      return;
    }

    onSuccess(serverResponse.data);
  }, [serverResponse, onSuccess]);

  return (
    <Modal
      onClose={onClose}
      header="Log in"
      footer={(
        <Footer>
          <div>
            {'Don\'t have an account? '}
          </div>
          <Button variant="link" onClick={onSignUp}>
            Sign up
          </Button>
        </Footer>
      )}
    >
      {serverResponse && (
        <ServerErrorMessage>
          {{
            404: 'Email address and password does not match, please try again.',
          }[serverResponse.status] || 'Something wrong, please try again later.'}
        </ServerErrorMessage>
      )}
      <form onSubmit={handleFormSubmit}>
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
            {isServerRequesting ? 'Logging in...' : 'Log in'}
          </FullWidthButton>
        </FormItem>
      </form>
    </Modal>
  );
};

export default withForm(FIELD)(LoginModal);
