import React from 'react';
import UserContext from '../../UserContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
    };

    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(newUser) {
    this.setState({
      user: newUser,
    });
  }

  render() {
    const { children } = this.props;
    const { user } = this.state;

    const value = {
      user,
      handleUserChange: this.handleUserChange,
    };

    return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    );
  }
}

export default Provider;
