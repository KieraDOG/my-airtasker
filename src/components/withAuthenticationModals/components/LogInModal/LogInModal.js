import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import validator from 'validator';
import logIn from '../../../../apis/logIn';
import Button from '../../../Button';
import ErrorMessage from '../../../ErrorMessage';
import FormItem from '../../../FormItem';
import Modal from '../../../Modal';
import TextInput from '../../../TextInput';
import withForm from '../../../withForm';
import logInCreator from '../../../../redux/authentication/actions/logInCreator';

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

const LogInModal = ({ 
  authentication,
  dispatchLogIn,
  onClose, 
  onSignUp, 
  onForgetPassword,
  data, 
  formDirty, 
  setData,
  submit,
  valid,
  getErrorMessage,
}) => (
  <Modal
    onClose={onClose}
    title="Log in"
    body={(
      <form
        onSubmit={submit(() => {
          dispatchLogIn({
            email: data.email.value,
            password: data.password.value
          });

          // logIn({
          //   email: data.email.value,
          //   password: data.password.value
          // })
          //   .then((data) => {
          //     onClose();
          //     dispatchLogIn(data);
          //   })
          //   .catch((error) => {
          //     const message = error.response && {
          //       404: 'Email and password does not match, please try again',
          //     }[error.response.status];
              
          //     this.setErrorMessage(message || 'Something wrong, please try again later');
          //   });
        })}
      >
        {authentication.message && (
          <FormItem>
            <ErrorMessage>{authentication.message}</ErrorMessage>
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

const mapStateToProps = (state) => ({
  authentication: state.authentication,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogIn: (data) => dispatch(logInCreator(data)),
})

const ConnectedLogInModal = connect(mapStateToProps, mapDispatchToProps)(LogInModal);
const WithFormLogInModal = withForm(FIELDS)(ConnectedLogInModal);

export default WithFormLogInModal;
