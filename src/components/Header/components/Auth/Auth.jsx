import React from 'react';
import styled from 'styled-components';
import Button from '../../../Button';
import HeaderItem from '../HeaderItem';
import SignUpModal from './components/SignUpModal';
import LoginModal from './components/LoginModal';
import ForgetPasswordModal from './components/ForgetPasswordModal';

// 简单的重复要好过复杂的抽象
const Layout = styled.div`
  display: flex;
  align-items: center;
`;

// Maintainable
// 如果这个 Button 是我们想象中的 Button，那我们何必新做一个 Button，而不是复用这个 Button

// Modal 是一个 动态渲染 的东西 -> state
// JSX, component, props, state, lifecycle
// Modal 一定是在 React 哲学中的 第三步：确定 UI state 的最小（且完整）表示
// 最小（且完整）-> 越小越好
// state 应该从最近的地方写起

// SOLID -> single responsibility
// Modal!!!
// Form
// Call API
// OAuth
// T&C 内容

// 1. Auth 写 state (动态渲染)
// a. 改写 class component
// b. constructor
// c. state handler, bind(this)
// d. render 调用 state
// 2. Overlay -> 半透明
// 3. Container -> 白色, styles, width: 500px
// 4. close button, font awesome icon
// 5. Modal 内容
// 6. Form, validation(errorMessage), value? (先不做)
// 5.a Email input
// 5.b Password input
// 5.c Submit button
// 5.d OAuth 登陆 (先不做)
// 5.e T&C (内容先不做)
// 5.f Footer to Login (功能先不做)

// display: inline, block
// inline: span, button...  元素宽度是元素本身
// block: div, p, form... 元素宽度 100%

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignUpModalShown: false,
      isLoginModalShown: false,
      isForgetPasswordModalShown: false,
    };

    this.handleSignUpButtonClick = this.handleSignUpButtonClick.bind(this);
    this.handleSignUpModalClose = this.handleSignUpModalClose.bind(this);
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
    this.handleLoginModalClose = this.handleLoginModalClose.bind(this);
    this.handleLoginFromSignUpModal = this.handleLoginFromSignUpModal.bind(this);
    this.handleSignUpFromLoginModal = this.handleSignUpFromLoginModal.bind(this);
    this.handleForgetPasswordClose = this.handleForgetPasswordClose.bind(this);
    this.handleForgetPasswordFromLoginModal = this.handleForgetPasswordFromLoginModal.bind(this);
  }

  handleSignUpButtonClick() {
    this.setState({
      isSignUpModalShown: true,
    });
  }

  handleSignUpModalClose() {
    this.setState({
      isSignUpModalShown: false,
    });
  }

  handleLoginButtonClick() {
    this.setState({
      isLoginModalShown: true,
    });
  }

  handleLoginModalClose() {
    this.setState({
      isLoginModalShown: false,
    });
  }

  handleLoginFromSignUpModal() {
    this.setState({
      isLoginModalShown: true,
      isSignUpModalShown: false,
    });
  }

  handleSignUpFromLoginModal() {
    this.setState({
      isLoginModalShown: false,
      isSignUpModalShown: true,
    });
  }

  handleForgetPasswordFromLoginModal() {
    this.setState({
      isLoginModalShown: false,
      isForgetPasswordModalShown: true,
    });
  }

  handleForgetPasswordClose() {
    this.setState({
      isForgetPasswordModalShown: false,
    });
  }

  render() {
    const { isSignUpModalShown, isLoginModalShown, isForgetPasswordModalShown } = this.state;

    return (
      <>
        <Layout>
          <HeaderItem onClick={this.handleSignUpButtonClick} as={Button} variant="naked">
            Sign up
          </HeaderItem>
          <HeaderItem onClick={this.handleLoginButtonClick} as={Button} variant="naked">
            Log in
          </HeaderItem>
          <HeaderItem>
            <Button size="sm" variant="secondary">Become a tasker</Button>
          </HeaderItem>
        </Layout>
        {isSignUpModalShown && (
          <SignUpModal
            onClose={this.handleSignUpModalClose}
            onLogin={this.handleLoginFromSignUpModal}
          />
        )}
        {isLoginModalShown && (
          <LoginModal
            onClose={this.handleLoginModalClose}
            onSignUp={this.handleSignUpFromLoginModal}
            onForgetPassword={this.handleForgetPasswordFromLoginModal}
          />
        )}
        {isForgetPasswordModalShown && (
          <ForgetPasswordModal
            onClose={this.handleForgetPasswordClose}
          />
        )}
      </>
    );
  }
}

export default Auth;
