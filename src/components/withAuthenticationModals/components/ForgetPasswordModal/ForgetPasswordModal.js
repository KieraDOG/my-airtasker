import React from 'react';
import styled from 'styled-components';
import validator from 'validator';
import Modal from '../../../Modal';
import Button from '../../../Button';
import TextInput from '../../../TextInput';
import FormItem from '../../../FormItem';
import withForm from '../../../withForm';

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
}];

const ForgetPasswordModal = ({ 
  onClose, 
  onSignUp, 
  data, 
  formDirty, 
  setData,
  submit,
  valid,
  getErrorMessage,
}) => (
  <Modal
    onClose={onClose}
    title="Forget password"
    body={(
      <form
        onSubmit={submit(() => {
          console.log(data);
        })}
      >
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
          <Button 
            disabled={!valid}
            block 
            size="lg"
            variant="success"
          >
            Forget Password
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

const WithFormForgetPasswordModal = withForm(FIELDS)(ForgetPasswordModal);

export default WithFormForgetPasswordModal;
