import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../Button';
import Modal from '../../../../../Modal';
import Input from '../../../../../Input';
import FormItem from '../../../../../FormItem';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const ForgetPasswordModal = ({
  onClose,
}) => (
  <Modal
    onClose={onClose}
    header="Forget password"
  >
    <form>
      <FormItem label="Email">
        <Input type="text" />
      </FormItem>
      <FormItem>
        <FullWidthButton variant="success">Send reset password email</FullWidthButton>
      </FormItem>
    </form>
  </Modal>
);

export default ForgetPasswordModal;
