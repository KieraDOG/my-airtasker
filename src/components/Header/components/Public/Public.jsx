import React from 'react';
import styled from 'styled-components';
import NavigationLink from '../NavigationLink';
import NavigationButton from '../NavigationButton';
import PostATaskModal from './components/PostATaskModal/PostATaskModal';

const Layout = styled.div`
  display: flex;
`;

const Divider = styled.div`
  width: 1px;
  border-right: 1px solid #dadada;
`;

const Logo = styled.span`
  color: #008fb4;
`;

class Public extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPostATaskModal: false,
    };

    this.togglePostATaskModal = this.togglePostATaskModal.bind(this);
  }

  togglePostATaskModal(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      showPostATaskModal: !prevState.showPostATaskModal,
    }));
  }

  render() {
    const { showPostATaskModal } = this.state;

    return (
      <Layout>
        <NavigationLink.Naked href="/">
          <Logo>LOGO</Logo>
        </NavigationLink.Naked>
        <Divider />
        <NavigationButton.Button
          variant="primary"
          href="/post-a-task"
          onClick={this.togglePostATaskModal}
        >
          Post a task
        </NavigationButton.Button>
        {showPostATaskModal && (
          <PostATaskModal onClose={this.togglePostATaskModal} />
        )}
        <NavigationLink.Text indictable href="/categories">
          Categories
        </NavigationLink.Text>
        <NavigationLink.Text indictable href="/browse-tasks">
          Browse tasks
        </NavigationLink.Text>
        <NavigationLink.Text indictable href="/how-it-works">
          How it works
        </NavigationLink.Text>
      </Layout>
    );
  }
}

export default Public;
