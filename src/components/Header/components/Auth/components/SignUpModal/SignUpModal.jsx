import React from 'react';
import styled from 'styled-components';
import { isEmail } from 'validator';
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

const ErrorMessage = styled.div`
  color: rgb(231, 82, 69);
  font-size: 12px;
  margin-top: 8px;
  font-weight: bold;
`;

const FIELD = {
  email: {
    label: 'Email',
    type: 'text',
    validations: [{
      validator: (data) => isEmail(data.email),
      errorMessage: 'Please input a valid email address',
    }, {
      validator: (data) => !!data.email,
      errorMessage: 'Please input your email',
    }],
  },
  password: {
    label: 'Password',
    type: 'password',
    validations: [{
      validator: (data) => !!data.password,
      errorMessage: 'Please input your password',
    }],
  },
  confirmPassword: {
    label: 'Confirm password',
    type: 'password',
    validations: [{
      validator: (data) => data.password === data.confirmPassword,
      errorMessage: 'Please confirm your password',
    }, {
      validator: (data) => !!data.confirmPassword,
      errorMessage: 'Please input your confirm password',
    }],
  },
};

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    // 最小且完整
    // errorMessage 的状态改变，一定来自于 data 状态的改变
    // 衍生状态，Derived State
    // 一个状态可以由另外一个状态计算出来
    // Source of truth
    this.state = {
      isFormTouched: false,
      data: {
        email: '',
        password: '',
        confirmPassword: '',
      },
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleFormTouch = this.handleFormTouch.bind(this);
  }

  getError() {
    const { data } = this.state;

    const error = {};

    Object.keys(FIELD).forEach((key) => {
      const { validations } = FIELD[key];
      validations.forEach(({ validator, errorMessage }) => {
        const valid = validator(data);

        if (valid) {
          return;
        }

        error[key] = errorMessage;
      });
    });

    return error;
  }

  handleFormTouch() {
    this.setState({
      isFormTouched: true,
    });
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
    const { isFormTouched } = this.state;

    const error = this.getError();

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

            this.handleFormTouch();
          }}
        >
          {Object.keys(FIELD).map((key) => {
            const { label, type } = FIELD[key];

            const isFieldOnError = error[key] && isFormTouched;

            return (
              <FormItem key={key} label={label}>
                <Input type={type} error={isFieldOnError} onChange={this.handleDataChange(key)} />
                {isFieldOnError && (<ErrorMessage>{error[key]}</ErrorMessage>)}
              </FormItem>
            );
          })}
          <FormItem>
            <FullWidthButton variant="success">Sign up</FullWidthButton>
          </FormItem>
        </form>
      </Modal>
    );
  }
}

export default SignUpModal;
