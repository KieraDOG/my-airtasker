import React from 'react';
import { shallow } from 'enzyme';
import { Authentication, mapStateToProps } from './Authentication';
import NavItem from '../NavItem';
import Button from '../../../Button';
import UserDropdown from './components/UserDropdown';

describe('mapStateToProps', () => {
  it('returns props', () => {
    const state = {
      foo: 'bar',
      authentication: { user: null },
    };

    // toBe === reference check
    // toEqual === value check
    expect(mapStateToProps(state)).toEqual({
      authentication: state.authentication,
    });
  });
});

describe('<Authentication />', () => {
  // 判断 authentication.user 来区分是否显示 Sign Up 和 Log In 或者 UserDropdown
  // 点击相应的 button，去调用相应的方法

  it('renders <UserDropdown /> when there is a user', () => {
    const wrapper = shallow((
      <Authentication 
        authentication={{ user: { id: '0' } }}
      />
    ));

    expect(wrapper.find(NavItem)).toHaveLength(0);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(UserDropdown)).toHaveLength(1);
  });

  it('renders "Log In" and "Sign In" NavItems when there is no user', () => {
    const setShowSignUpModal = jest.fn();
    const setShowLogInModal = jest.fn();

    const wrapper = shallow((
      <Authentication  
        authentication={{ user: null }}
        setShowSignUpModal={setShowSignUpModal}
        setShowLogInModal={setShowLogInModal}
      />
    ));

    expect(wrapper.find(NavItem)).toHaveLength(2);
    expect(wrapper.find(UserDropdown)).toHaveLength(0);
    expect(wrapper.find(Button)).toHaveLength(1);

    expect(wrapper.find(NavItem).at(0).prop('children')).toBe('Sign up');
    expect(setShowSignUpModal).not.toBeCalled();
    wrapper.find(NavItem).at(0).simulate('click');
    expect(setShowSignUpModal).toBeCalled();

    expect(wrapper.find(NavItem).at(1).prop('children')).toBe('Log in');
    expect(setShowLogInModal).not.toBeCalled();
    wrapper.find(NavItem).at(1).simulate('click');
    expect(setShowLogInModal).toBeCalled();
  });
});