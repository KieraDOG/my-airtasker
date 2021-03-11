import React from 'react';
import styled from 'styled-components';
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

const ForgetPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LoginModal = ({
  onClose,
  onSignUp,
  onForgetPassword,
}) => (
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
    <form>
      <FormItem label="Email">
        <Input type="text" />
      </FormItem>
      <FormItem label="Password">
        <Input type="password" />
      </FormItem>
      <FormItem>
        <ForgetPasswordContainer>
          <Button type="button" variant="link" onClick={onForgetPassword}>
            Forget password?
          </Button>
        </ForgetPasswordContainer>
      </FormItem>
      <FormItem>
        <FullWidthButton variant="success">Log in</FullWidthButton>
      </FormItem>
    </form>
  </Modal>
);

export default LoginModal;
