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
// 数据验证
// 根据数据，做相应的验证，比如 email 不能为空，如果验证失败，显示相应的错误信息，以及阻止 submit form
// 数据是不是动态的?
// state

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        password: '',
        confirmPassword: '',
      },
    };

    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleDataChange(key) {
    return (event) => {
      const dataToChange = {
        [key]: event.target.value,
      };

      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          ...dataToChange,
        },
      }));
    };
  }

  render() {
    const { onClose, onLogin } = this.props;
    const { data } = this.state;

    return (
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
        <form
          onSubmit={(event) => {
            event.preventDefault();

            console.log(data);
          }}
        >
          <FormItem label="Email">
            <Input
              type="text"
              onChange={this.handleDataChange('email')}
            />
          </FormItem>
          <FormItem label="Password">
            <Input
              type="password"
              onChange={this.handleDataChange('password')}
            />
          </FormItem>
          <FormItem label="Confirm password">
            <Input
              type="password"
              onChange={this.handleDataChange('confirmPassword')}
            />
          </FormItem>
          <FormItem>
            <FullWidthButton variant="success">Sign up</FullWidthButton>
          </FormItem>
        </form>
      </Modal>
    );
  }
}

export default SignUpModal;
