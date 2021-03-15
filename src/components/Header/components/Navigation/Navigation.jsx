import React from 'react';
import styled from 'styled-components';
import Button from '../../../Button';
import HeaderItem from '../HeaderItem';

const Layout = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Toggler = styled.div`
  cursor: pointer;
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  left: 0;
  background: white;
  border: 1px solid #dadada;
  border-radius: 4px;
  color: initial;
  padding: 12px 16px;
  width: 200px;
  cursor: initial;
  top: 45px;
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownShown: false,
    };

    this.handleShowDropdown = this.handleShowDropdown.bind(this);
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
  }

  handleShowDropdown() {
    this.setState({
      isDropdownShown: true,
    });
  }

  handleCloseDropdown() {
    this.setState({
      isDropdownShown: false,
    });
  }

  render() {
    const { isDropdownShown } = this.state;

    return (
      <>
        <Layout>
          <HeaderItem>
            <Button size="sm" variant="primary">Post a task</Button>
          </HeaderItem>
          <HeaderItem
            as={Toggler}
            onMouseEnter={this.handleShowDropdown}
            onMouseLeave={this.handleCloseDropdown}
            highlight
          >
            Categories
            {isDropdownShown && (
              <Dropdown>
                This is my dropdown
              </Dropdown>
            )}
          </HeaderItem>
          <HeaderItem highlight as={Link} href="/tasks">
            Browse tasks
          </HeaderItem>
          <HeaderItem highlight as={Link} href="/faq">
            How it works
          </HeaderItem>
        </Layout>
      </>
    );
  }
}

export default Navigation;
