import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import FormItem from '../../../../components/FormItem';
import Modal, { CloseButton } from '../../../../components/Modal';

const Form = styled.form`
`;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

const SignUpButton = styled(Button)`
  width: 100%;
`;

const Error = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 4px;
  color: rgb(231, 82, 69);
  letter-spacing: 0.25px;
`;

const validate = (name, data) => {
  const value = data[name];

  switch (name) {
    case 'email': {
      if (!value) {
        return 'Please input your email';
      }

      const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
      if (!EMAIL_REGEXP.test(value)) {
        return 'Please input a valid email';
      }

      return '';
    }

    case 'password': {
      if (!value) {
        return 'Please input your password';
      }

      if (value.toString().length < 8) {
        return 'Password must be at least 8 characters';
      }

      return '';
    }

    case 'confirmPassword': {
      if (!value) {
        return 'Please input your confirm password';
      }

      if (value !== data.password) {
        return 'Confirm password does not match to password';
      }

      return '';
    }

    default:
      return '';
  }
};

const initialData = {
  value: '',
  blurred: false,
  touched: false,
  focused: false,
};

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: initialData,
        password: initialData,
        confirmPassword: initialData,
      },
      isFormSubmit: false,
      // 1. 叫什么，2. 什么时候被设置，3. 怎么被使用
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
    this.handleFocusedChange = this.handleFocusedChange.bind(this);
  }

  getErrorMessage(error, name) {
    const { data, isFormSubmit } = this.state;

    const showInputError = data[name].blurred;

    return (showInputError || isFormSubmit) && error[name];
  }

  // 衍生状态 Derived State
  // Context
  // SignUpModal.validate 这是对 SignUpModal validate
  // validate 这是单独的 validate

  // 需要一个东西，针对性的去选择什么时候渲染 errorMessage
  // Dynamic
  // 这个 input 有没有被输入
  // 或者 这个表单 有没有被 submit

  // 如果有人和 input 不合法，不应该 submit
  getError() {
    const { data } = this.state;

    const error = {};

    Object.keys(data).forEach((name) => {
      const errorOfName = validate(name, data);

      if (!errorOfName) {
        return;
      }

      error[name] = errorOfName;
    });

    return error;
  }

  handleIsFormSubmitChange(newIsFormSubmit) {
    this.setState({
      isFormSubmit: newIsFormSubmit,
    });
  }

  handleFocusedChange(event) {
    const { name } = event.target;

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: {
          ...prevState.data[name],
          focused: true,
        },
      },
    }));
  }

  handleBlurredChange(event) {
    const { name } = event.target;

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: {
          ...prevState.data[name],
          blurred: true,
          focused: false,
        },
      },
    }));
  }

  handleDataChange(event) {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: {
          ...prevState.data[name],
          value,
          touched: true,
        },
      },
    }), () => {
      // 基于 data 被设置的结果，设置 error 状态
    });
  }

  // 第一次输入的时候不显示错误
  // 只有 isFormSubmit 之后才显示错误

  // RMR
  // SOLID

  // 状态要小要合理要单一职责，反思状态是否可以衍生

  render() {
    const { onClose } = this.props;
    const {
      data, touched, isFormSubmit, blurred,
    } = this.state;

    const error = this.getError(data);

    // 衍生状态 data -> error -> invalidateForm
    const hasError = Object.keys(error).length > 0;

    return (
      <Modal onClose={onClose}>
        <Title>Join Us</Title>
        <CloseButton onClick={onClose} />
        <Form
          onSubmit={(event) => {
            event.preventDefault();

            this.handleIsFormSubmitChange(true);

            if (hasError) {
              console.log('FORM HAS ERROR');

              return;
            }

            console.log('state', this.state);
          }}
        >
          <FormItem label="Email" htmlFor="sign-up-modal-email">
            <Input
              name="email"
              value={data.email.value}
              onChange={this.handleDataChange}
              onFocus={this.handleFocusedChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, 'email')}
              id="sign-up-modal-email"
            />
            <Error>{this.getErrorMessage(error, 'email')}</Error>
          </FormItem>
          <FormItem label="Password" htmlFor="sign-up-modal-password">
            <Input
              name="password"
              value={data.password.value}
              onChange={this.handleDataChange}
              onFocus={this.handleFocusedChange}
              onBlur={this.handleBlurredChange}
              type="password"
              error={this.getErrorMessage(error, 'password')}
              id="sign-up-modal-password"
            />
            <Error>{this.getErrorMessage(error, 'password')}</Error>
          </FormItem>
          <FormItem label="Confirm password" htmlFor="sign-up-modal-confirm-password">
            <Input
              name="confirmPassword"
              value={data.confirmPassword.value}
              onChange={this.handleDataChange}
              onFocus={this.handleFocusedChange}
              onBlur={this.handleBlurredChange}
              type="password"
              error={this.getErrorMessage(error, 'confirmPassword')}
              id="sign-up-modal-confirm-password"
            />
            <Error>{this.getErrorMessage(error, 'confirmPassword')}</Error>
          </FormItem>
          <SignUpButton size="md" variant="success">
            Join Airtasker
          </SignUpButton>
        </Form>
      </Modal>
    );
  }
}

export default SignUpModal;
