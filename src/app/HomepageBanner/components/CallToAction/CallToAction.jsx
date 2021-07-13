import React from 'react';
import withModal from '../../../../components/withModal';
import Button from '../../../../components/Button';
import UserContext from '../../../UserContext';
import LogInModal from '../../../LogInModal';

const CallToAction = ({
  showModal,
  handleShowModalChange,
  closeModal,
}) => (
  <UserContext.Consumer>
    {({ user, handleUserChange }) => (
      <div>
        {user ? (
          <Button>Get started now</Button>
        ) : (
          <>
            <Button onClick={() => handleShowModalChange('logIn')}>
              Log in
            </Button>
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
      </div>
    )}
  </UserContext.Consumer>
);

export default withModal(CallToAction);
