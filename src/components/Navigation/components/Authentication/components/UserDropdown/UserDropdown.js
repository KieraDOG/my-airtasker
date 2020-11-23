import React from 'react';
import { withAuthentication } from '../../../../../AuthenticationProvider';
import Dropdown from '../../../../../Dropdown';
import NakedButton from '../../../../../NakedButton';
import NavItem from '../../../NavItem';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    };
  }

  toggleDropdown() {
    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown,
    }));
  }
  
  render() {
    const {
      authentication,
    } = this.props;

    const { showDropdown } = this.state;

    return (
      <Dropdown 
        visible={showDropdown}
        items={[{
          key: 'dashboard',
          content: 'Dashboard'
        }, {
          key: 'profile',
          content: 'Profile',
        }, {
          key: 'logout',
          content: (
            <NakedButton onClick={() => authentication.setUser()}>
              Logout
            </NakedButton>
          ),
        }]}
      >
        <NavItem 
          as={NakedButton} 
          highlight
          onClick={() => this.toggleDropdown()}
        >
          {authentication.user.email}
        </NavItem>
      </Dropdown>
    );
  }
}

const WithAuthenticationUserDropdown = withAuthentication(UserDropdown);

export default WithAuthenticationUserDropdown;
