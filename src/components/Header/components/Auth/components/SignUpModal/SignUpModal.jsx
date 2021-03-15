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

// 根据用户的输入 (onChange)，submit form (onSubmit) 的时候做数据验证，如果失败，显示错误信息，成功则把相应的数据发送给后端(console.log)
// 数据是不是动态的?
// state

// class SignUpModal extends React.Component {
//   constructor(props) {
//     super(props);
//   }
// }

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
