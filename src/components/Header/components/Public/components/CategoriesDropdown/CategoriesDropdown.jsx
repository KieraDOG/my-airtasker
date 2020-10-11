import React from 'react';
import styled from 'styled-components';
import NavigationLink from '../../../NavigationLink';
import NakedButton from '../../../../../NakedButton';

const Wrapper = styled.div`
  position: relative;
  cursor: initial;
`;

const CursorWrapper = styled.div`
  margin: 16px;
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  left: 0;
  background: white;
  padding: 16px 24px;
  border: 1px solid #dadada;
  border-radius: 4px;
  margin-top: -6px;
  margin-left: 8px;
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 25px;
  border-right: 1px solid #dadada;
  width: 150px;
`;

const Right = styled.div`
  width: 200px;
`;

class CategoriesDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      showContent: 'POSTER',
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  handleContentItemClick(target) {
    return (event) => {
      event.preventDefault();

      this.setState({
        showContent: target,
      });
    };
  }

  render() {
    const { show, showContent } = this.state;

    return (
      <Wrapper
        onMouseEnter={this.toggleMenu}
        onMouseLeave={this.toggleMenu}
      >
        <NavigationLink as={CursorWrapper}>
          Categories
        </NavigationLink>
        {show && (
          <Menu>
            <Left>
              <NakedButton onClick={this.handleContentItemClick('POSTER')}>
                As a poster
              </NakedButton>
              &nbsp;
              <NakedButton onClick={this.handleContentItemClick('TASKER')}>
                As a Tasker
              </NakedButton>
            </Left>
            <Right>
              {showContent === 'POSTER' && (
                <div>Poster content</div>
              )}
              {showContent === 'TASKER' && (
                <div>Tasker content</div>
              )}
            </Right>
          </Menu>
        )}
      </Wrapper>
    );
  }
}

export default CategoriesDropdown;
