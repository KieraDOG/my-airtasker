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

const SignUpModal = ({
  onClose,
  onLogin,
}) => (
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
    <form>
      <FormItem label="Email">
        <Input type="text" />
      </FormItem>
      <FormItem label="Password">
        <Input type="password" />
      </FormItem>
      <FormItem label="Confirm password">
        <Input type="password" />
      </FormItem>
      <FormItem>
        <FullWidthButton variant="success">Sign up</FullWidthButton>
      </FormItem>
    </form>
  </Modal>
);

export default SignUpModal;
