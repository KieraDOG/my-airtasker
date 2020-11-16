import React from 'react';
import styled from 'styled-components';
import validator from 'validator';
import logIn from '../../../../../../apis/logIn';
import Modal from '../../../../../Modal';
import Button from '../../../../../Button';
import TextInput from '../../../../../TextInput';
import FormItem from '../../../../../FormItem';
import ErrorMessage from '../../../../../ErrorMessage';

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FIELDS = [{
  key: 'email',
  label: 'Email',
  type: 'text',
  validations: [{
    message: 'Please enter you email address',
    validator: (value) => !validator.isEmpty(value),
  }],
}, {
  key: 'password',
  label: 'Password',
  type: 'password',
  validations: [{
    message: 'Please enter you password',
    validator: (value) => !validator.isEmpty(value),
  }],
}];

const getInitialData = () => FIELDS.reduce((data, f) => ({
  ...data,
  [f.key]: {
    value: '',
    dirty: false,
  },
}), {});

class LogInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitialData(),
      formDirty: false,
      errorMessage: '',
    };
  }

  setErrorMessage(message) {
    this.setState({
      errorMessage: message,
    });
  }
 
  setFormDirty(value) {
    this.setState({
      formDirty: value,
    });
  }

  setData(key) {
    return (event) => {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          [key]: {
            value: event.target.value,
            dirty: true,
          },
        },
      }));
    };
  }

  getErrorMessage(field) {
    const { data } = this.state;
    const { key, validations } = field;

    const { value } = data[key];
    const invalidValidation = validations.find((v) => !v.validator(value, data));

    if (!invalidValidation) {
      return null;
    }

    return invalidValidation.message;
  }

  valid() {
    const fieldHasErrorMessage = FIELDS.find((f) => this.getErrorMessage(f));

    return !fieldHasErrorMessage;
  }

  render() {
    const { onClose, onSignUp } = this.props;
    const { data, formDirty, errorMessage } = this.state;
    
    const valid = this.valid();
    
    return (
      <Modal
        onClose={onClose}
        title="Log in"
        body={(
          <form
            onSubmit={(event) => {
              event.preventDefault();
              
              this.setFormDirty(true);

              if (!valid) {
                return;
              }

              logIn({
                email: data.email.value,
                password: data.password.value
              })
                .then(() => onClose())
                .catch((error) => {
                  const message = error.response && {
                    404: 'Email and password does not match, please try again',
                  }[error.response.status];
                  
                  this.setErrorMessage(message || 'Something wrong, please try again later');
                });
            }}
          >
            {errorMessage && (
              <FormItem>
                <ErrorMessage>{errorMessage}</ErrorMessage>
              </FormItem>
            )}
            {FIELDS.map((f) => (
              <FormItem 
                key={f.key} 
                htmlFor={f.key}
                label={f.label}
                error={(formDirty || data[f.key].dirty) && this.getErrorMessage(f)}
              >
                <TextInput id={f.key} type={f.type} onChange={this.setData(f.key)} />
              </FormItem>
            ))}
            <FormItem>
              <Button 
                disabled={!valid}
                block 
                size="lg"
                variant="success"
              >
                LOG IN
              </Button>
            </FormItem>
          </form>
        )}
        footer={(
          <Footer>
            <div>Don't have a account?</div>
            <Button variant="link" onClick={onSignUp}>Sign up</Button>
          </Footer>
        )}
      />
    );
  }
}

export default LogInModal;
