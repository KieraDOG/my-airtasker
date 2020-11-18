import React from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem';
import Button from '../../../Button';
import NakedButton from '../../../NakedButton';
import LogInModal from './components/LogInModal';
import SignUpModal from './components/SignUpModal';

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const BecomeATasker = styled(NavItem)`
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 0;
`;

// Component, Props, State
// 要不要划分 Component
// 划分 Component 之后 Props
// State
// 1. state 位置?
// 2. function -> class
// 3. 初始化 state -> handler
// 4. state & handler -> render

// - 与用户互动
// - 页面根据不同的条件渲染不同的UI
// - 页面要动起来
// -> state (想得简单一些)
// 1. function component -> class component
// 2. state 放在哪里? (哪里互动放在哪里，最小 state)
// 3. 初始化 state, constructor -> this.state = {};
// 4. 创建 handler, 理论上讲，每个 state 都带有自己的 handler
// 5. 将 state 和 handler 作用于 render

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: null,
    };
  }

  setShowLogInModal() {
    this.setState({ showModal: 'LOG_IN' });
  }

  setShowSignUpModal() {
    this.setState({ showModal: 'SIGN_UP' });
  }

  setCloseModal() {
    this.setState({ showModal: null });
  }

  render() {
    const { showModal } = this.state;

    return (
      <Layout>
        {/* <Dropdown 
          visible={showModal === 'SIGN_UP'}
          items={[{
            key: 'dashboard',
            content: 'Dashboard'
          }, {
            key: 'profile',
            content: 'Profile',
          }, {
            key: 'logout',
            content: 'Logout',
          }]}
        >
          <NavItem 
            as={NakedButton} 
            highlight
            onClick={() => showModal === 'SIGN_UP' ? this.setCloseModal() : this.setShowSignUpModal()}
          >
            Sign up
          </NavItem>
        </Dropdown> */}
        <NavItem 
            as={NakedButton} 
            highlight
            onClick={() => showModal === 'SIGN_UP' ? this.setCloseModal() : this.setShowSignUpModal()}
          >
            Sign up
          </NavItem>
        {showModal === 'SIGN_UP' && (
          <SignUpModal 
            onClose={() => this.setCloseModal()} 
            onLogIn={() => this.setShowLogInModal()}
          />
        )}
        <NavItem 
          as={NakedButton} 
          highlight 
          onClick={() => this.setShowLogInModal()}
        >
          Log in
        </NavItem>
        {showModal === 'LOG_IN' && (
          <LogInModal 
            onClose={() => this.setCloseModal()} 
            onSignUp={() => this.setShowSignUpModal()}
          />
        )}
        <BecomeATasker>
          <Button size="sm" variant="secondary">Become a Tasker</Button>
        </BecomeATasker>
      </Layout>
    );
  }
}

export default Authentication;
