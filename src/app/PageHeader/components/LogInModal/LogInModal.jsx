import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import ErrorMessage from '../../../../components/ErrorMessage';
import withForm from '../../../../components/Form';
import FormItem from '../../../../components/FormItem';
import Input from '../../../../components/Input';
import Modal, { CloseButton } from '../../../../components/Modal';
import validate from './validate';

const Wrapper = styled.form`
`;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

const LogInButton = styled(Button)`
  width: 100%;
`;

const LoginModal = ({
  onClose,
  data,
  error,
  hasError,
  handleDataChange,
  handleIsFormSubmitChange,
  handleFocusedChange,
  handleBlurredChange,
  getErrorMessage,
}) => (
  <Modal onClose={onClose}>
    <Title>Log In</Title>
    <CloseButton onClick={onClose} />
    <Wrapper
      onSubmit={(event) => {
        event.preventDefault();

        handleIsFormSubmitChange(true);

        if (hasError) {
          console.log('FORM HAS ERROR');

          return;
        }

        console.log('state', data);
      }}
    >
      {[
        { key: 'email', label: 'Email' },
        { key: 'password', label: 'Password' },
      ].map(({ key, label }) => (
        <FormItem key={key} label={label} htmlFor={`log-in-modal-${key}`}>
          <Input
            name={key}
            value={data[key].value}
            onChange={handleDataChange}
            onFocus={handleFocusedChange}
            onBlur={handleBlurredChange}
            error={getErrorMessage(error, key)}
            id={`log-in-modal-${key}`}
          />
          <ErrorMessage>{getErrorMessage(error, key)}</ErrorMessage>
        </FormItem>
      ))}
      <LogInButton size="md" variant="success">
        Log in
      </LogInButton>
    </Wrapper>
  </Modal>
);

export default withForm({
  names: ['email', 'password'],
  validate,
}, LoginModal);
