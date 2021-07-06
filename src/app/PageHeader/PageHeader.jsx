import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Modal, { CloseButton } from '../../components/Modal';
import NakedButton from '../../components/NakedButton';
import SignUpModal from './components/SignUpModal';

const Wrapper = styled.div`
  margin-bottom: -60px;
`;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  height: 60px;
  display: flex;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-right: 32px;
`;

const Item = styled.div`
  color: white;
  font-size: 14px;
  padding: 12px 0;
  margin: 0 16px;
  font-weight: bold;
  cursor: pointer;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  &:hover {
    color: rgba(255, 255, 255, 0.8);

    border-top-color: white;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

class PageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: undefined,
      user: undefined,
    };

    this.handleShowModalChange = this.handleShowModalChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleShowModalChange(newShowModal) {
    this.setState({
      showModal: newShowModal,
    });
  }

  handleUserChange(newUser) {
    this.setState({
      user: newUser,
    });
  }

  closeModal() {
    this.handleShowModalChange();
  }

  render() {
    const { showModal, user } = this.state;

    return (
      <Wrapper>
        <Container>
          <Left>
            <Logo>My Airtasker</Logo>
            <Button size="sm" onClick={() => this.handleShowModalChange('postATask')}>Post a task</Button>
            {showModal === 'postATask' && (
              <Modal onClose={this.closeModal}>
                <CloseButton onClick={this.closeModal} />
                Post a task
              </Modal>
            )}
            <Item>Categories</Item>
            <Item as="a">Browse tasks</Item>
            <Item as="a">How it works</Item>
          </Left>
          <Right>
            <Item as={NakedButton} onClick={() => this.handleShowModalChange('signUp')}>
              Sign up
            </Item>
            {showModal === 'signUp' && (
              <SignUpModal
                onClose={this.closeModal}
                onSignUp={(data) => this.handleUserChange(data)}
              />
            )}
            <Item as={NakedButton} onClick={() => this.handleShowModalChange('logIn')}>
              Log in
            </Item>
            {showModal === 'logIn' && (
              <Modal onClose={this.closeModal}>
                <CloseButton onClick={this.closeModal} />
                Log in
              </Modal>
            )}
            <Button variant="transparent" size="sm">Become a Tasker</Button>
          </Right>
        </Container>
      </Wrapper>
    );
  }
}

export default PageHeader;
