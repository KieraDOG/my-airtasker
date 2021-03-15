import React from 'react';
import styled from 'styled-components';

const Animation = styled.div`
  position: absolute;
  left: 0;
  transition: all 300ms ease-in-out;

  &.enter-active {
    top: 55px;
    opacity: 0;
  }

  &.enter {
    top: 45px;
    opacity: 1;
  }
`;

const StyledDropdown = styled.div`
  background: white;
  border: 1px solid #dadada;
  border-radius: 4px;
  color: initial;
  padding: 12px 16px;
  width: 200px;
  cursor: initial;
`;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transition: 'enter-active',
    };
  }

  componentDidMount() {
    this.startTransition();
  }

  handleTransitionChange(transitionToChange, cb) {
    this.setState({
      transition: transitionToChange,
    }, cb);
  }

  startTransition() {
    setTimeout(() => {
      this.handleTransitionChange('enter');
    });
  }

  render() {
    const { children } = this.props;
    const { transition } = this.state;

    return (
      <Animation className={transition}>
        <StyledDropdown>
          {children}
        </StyledDropdown>
      </Animation>
    );
  }
}

export default Dropdown;
