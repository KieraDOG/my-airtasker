import React from 'react';
import styled from 'styled-components';
import signUp from '../../../../apis/signUp';
import Modal from '../../../Modal';
import { withAuthentication } from '../../../AuthenticationProvider';
import Button from '../../../Button';
import TextInput from '../../../TextInput';
import FormItem from '../../../FormItem';
import ErrorMessage from '../../../ErrorMessage';
import withForm from '../../../withForm';
import Fields from './Fields';

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: '',
    };
  }

  setErrorMessage(message) {
    this.setState({
      errorMessage: message,
    });
  }

  render() {
    const { errorMessage } = this.state;

    const { 
      authentication,
      onClose, 
      onLogIn, 
      data, 
      formDirty, 
      setData,
      submit,
      valid,
      getErrorMessage,
    } = this.props;
    
    return (
      <Modal
        onClose={onClose}
        title="Sign up"
        body={(
          <form
            onSubmit={submit(() => {
              signUp({
                email: data.email.value,
                password: data.password.value
              })
                .then((data) => {
                  onClose();
                  authentication.setUser(data);
                })
                .catch((error) => {
                  const message = error.response && {
                    409: 'Email address is already been taken, please choose another one',
                  }[error.response.status];
                  
                  this.setErrorMessage(message || 'Something wrong, please try again later');
                });
            })}
          >
            {errorMessage && (
              <FormItem>
                <ErrorMessage>{errorMessage}</ErrorMessage>
              </FormItem>
            )}
            {Fields.map((f) => (
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

// withForm 是 贴膜工厂
// Fields 是 想贴的膜
// SignUpModal 是 车

// 车 + 膜 -> 贴膜工厂 -> 贴好膜的车
// 车 + 套件 -> 改装工厂 -> 改装好的车

// const WithTintCar = withTint(myTint)(MyCar);
// const WithModCar = withMod(mod)(WithTintCar);

const WithAuthenticationSignUpModal = withAuthentication(SignUpModal);
const WithFormSignUpModal = withForm(Fields)(WithAuthenticationSignUpModal);

export default WithFormSignUpModal;
