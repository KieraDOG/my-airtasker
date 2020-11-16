import React from 'react';
import styled from 'styled-components';
import validator from 'validator';
import Modal from '../../../../../Modal';
import Button from '../../../../../Button';
import TextInput from '../../../../../TextInput';
import FormItem from '../../../../../FormItem';

// 简单的重复优于复杂的抽象
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

/**
 * 肌肉记忆 -> 千篇一律的一般化代码 -> RMR by SOLID -> apply 高级写法 -> 优雅的代码
 * 1. constructor this.state
 * 2. handler
 * 3. state & handler -> render (event binds || lifecycle)
 * 自我驱动更新 -> lifecycle
 * 和用户交互有关 -> event
 * 当一个 classComponent 已经有 state 的时候，你的动态数据是不是 Source of truth，
 * 还是说你的数据是衍生数据？
 * 
 * 优化的目的：Readable, Maintainable, Reusable
 * 优化的方法：SOLID
 * 
 *  */

// 1. Connect API 实践化
// - 后端错误怎么处理
// - Axios instance

// 2. 知识点 HOC (Higher Order Component) 高阶组件

const FIELDS = [{
  key: 'email',
  label: 'Email',
  type: 'text',
  validations: [{
    message: 'Please enter you email address',
    validator: (value) => !validator.isEmpty(value),
  }, {
    message: 'Please enter a valid email address',
    validator: (value) => validator.isEmail(value),
  }],
}, {
  key: 'password',
  label: 'Password',
  type: 'password',
  validations: [{
    message: 'Please enter you password',
    validator: (value) => !validator.isEmpty(value),
  }, {
    message: 'Password must be at least 8 characters',
    validator: (value) => validator.isLength(value, { min: 8 }),
  }],
}, {
  key: 'confirmPassword',
  label: 'Confirm password',
  type: 'password',
  validations: [{
    message: 'Please confirm your password',
    validator: (value) => !validator.isEmpty(value),
  }, {
    message: 'Confirm password is different to your password',
    validator: (value, data) => value === data.password.value,
  }],
}];

const getInitialData = () => FIELDS.reduce((data, f) => ({
  ...data,
  [f.key]: {
    value: '',
    dirty: false,
  },
}), {});

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitialData(),
      formDirty: false,
    };
  }
 
  setFormDirty(value) {
    this.setState({
      formDirty: value,
    });
  }

  setData(key) {
    return (event) => {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          [key]: {
            value: event.target.value,
            dirty: true,
          },
        },
      }));
    };
  }

  getErrorMessage(field) {
    const { data } = this.state;
    const { key, validations } = field;

    const { value } = data[key];
    const invalidValidation = validations.find((v) => !v.validator(value, data));

    if (!invalidValidation) {
      return null;
    }

    return invalidValidation.message;
  }

  valid() {
    const fieldHasErrorMessage = FIELDS.find((f) => this.getErrorMessage(f));

    return !fieldHasErrorMessage;
  }

  render() {
    const { onClose, onLogIn } = this.props;
    const { data, formDirty } = this.state;
    
    const valid = this.valid();
    
    return (
      <Modal
        onClose={onClose}
        title="Sign up"
        body={(
          <form
            onSubmit={(event) => {
              event.preventDefault();
              
              this.setFormDirty(true);

              if (!valid) {
                return;
              }

              console.log('Submitted');
              console.log(data);
            }}
          >
            {FIELDS.map((f) => (
              <FormItem 
                key={f.key} 
                htmlFor={f.key}
                label={f.label}
                error={(formDirty || data[f.key].dirty) && this.getErrorMessage(f)}
              >
                <TextInput id={f.key} type={f.type} onChange={this.setData(f.key)} />
              </FormItem>
            ))}
            <FormItem>
              <Button 
                disabled={!valid}
                block 
                size="lg"
                variant="success"
              >
                SIGN UP
              </Button>
            </FormItem>
          </form>
        )}
        footer={(
          <Footer>
            <div>Already have an account?</div>
            <Button variant="link" onClick={onLogIn}>Log in</Button>
          </Footer>
        )}
      />
    );
  }
}

export default SignUpModal;
