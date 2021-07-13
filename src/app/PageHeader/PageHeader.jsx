import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Modal, { CloseButton } from '../../components/Modal';
import NakedButton from '../../components/NakedButton';
import SignUpModal from './components/SignUpModal';
import LogInModal from '../LogInModal';
import UserContext from '../UserContext';
import withModal from '../../components/withModal';

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

const PageHeader = ({
  showModal,
  handleShowModalChange,
  closeModal,
}) => (
  <UserContext.Consumer>
    {({ user, handleUserChange }) => (
      <Wrapper>
        <Container>
          <Left>
            <Logo>My Airtasker</Logo>
            <Button size="sm" onClick={() => handleShowModalChange('postATask')}>Post a task</Button>
            {showModal === 'postATask' && (
              <Modal onClose={closeModal}>
                <CloseButton onClick={closeModal} />
                Post a task
              </Modal>
            )}
            <Item>Categories</Item>
            <Item as="a">Browse tasks</Item>
            <Item as="a">How it works</Item>
          </Left>
          <Right>
            {user ? (
              <Item>{user.email}</Item>
            ) : (
              <>
                <Item as={NakedButton} onClick={() => handleShowModalChange('signUp')}>
                  Sign up
                </Item>
                {showModal === 'signUp' && (
                  <SignUpModal
                    onClose={closeModal}
                  />
                )}
                <Item as={NakedButton} onClick={() => handleShowModalChange('logIn')}>
                  Log in
                </Item>
                {showModal === 'logIn' && (
                  <LogInModal
                    onClose={closeModal}
                    onLogIn={(newUser) => {
                      handleUserChange(newUser);
                      closeModal();
                    }}
                  />
                )}
              </>
            )}
            <Button variant="transparent" size="sm">Become a Tasker</Button>
          </Right>
        </Container>
      </Wrapper>
    )}
  </UserContext.Consumer>
);

export default withModal(PageHeader);
