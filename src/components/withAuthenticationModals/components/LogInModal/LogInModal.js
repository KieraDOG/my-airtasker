import React from 'react';
import styled from 'styled-components';
import validator from 'validator';
import logIn from '../../../../apis/logIn';
import Modal from '../../../Modal';
import Button from '../../../Button';
import TextInput from '../../../TextInput';
import FormItem from '../../../FormItem';
import ErrorMessage from '../../../ErrorMessage';
import withForm from '../../../withForm';
import { withAuthentication } from '../../../AuthenticationProvider';

// HOC: Higher Order Component 高阶组件 component render component
// HOF: Higher Order Function 高阶函数 function return function

// <Button /> -> jsx
// <Foo /> -> <Button /> -> jsx

// scope

// Foo // 职责A
// state 相关

// Button // 职责B
// 渲染方式

// setData(key) -> event callback -> fn

/**
 * 1. LogInModal SignUpModal (80% 相似)
 * 2. ForgetPasswordModal (Copy LogInModal -> 改 20% 代码)
 * 3. ? (component, props, state)
 * 
 *  */

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ForgetPassword = styled.div`
  text-align: right;
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

class LogInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: '',
    };
  }

  setErrorMessage(message) {
    this.setState({
      errorMessage: message,
    });
  }

  render() {
    const { errorMessage } = this.state;

    const { 
      authentication,
      onClose, 
      onSignUp, 
      onForgetPassword,
      data, 
      formDirty, 
      setData,
      submit,
      valid,
      getErrorMessage,
    } = this.props;
    
    return (
      <Modal
        onClose={onClose}
        title="Log in"
        body={(
          <form
            onSubmit={submit(() => {
              logIn({
                email: data.email.value,
                password: data.password.value
              })
                .then((data) => {
                  onClose();
                  authentication.setUser(data);
                })
                .catch((error) => {
                  const message = error.response && {
                    404: 'Email and password does not match, please try again',
                  }[error.response.status];
                  
                  this.setErrorMessage(message || 'Something wrong, please try again later');
                });
            })}
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
                error={(formDirty || data[f.key].dirty) && getErrorMessage(f)}
              >
                <TextInput id={f.key} type={f.type} onChange={setData(f.key)} />
              </FormItem>
            ))}
            <FormItem>
              <ForgetPassword>
                <Button type="button" variant="link" onClick={onForgetPassword}>
                  Forget password?
                </Button>
              </ForgetPassword>
            </FormItem>
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

const WithAuthenticationLogInModal = withAuthentication(LogInModal);
const WithFormLogInModal = withForm(FIELDS)(WithAuthenticationLogInModal);

export default WithFormLogInModal;
