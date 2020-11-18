import React from 'react';
import styled from 'styled-components';
import NakedButton from '../NakedButton';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background: white;
  width: 500px;
  border-radius: 5px;
`;

const VERTICAL_GAP = '20px';
const HORIZONTAL_GAP = '20px';

const Header = styled.div`
  padding: ${VERTICAL_GAP} ${HORIZONTAL_GAP};
  border-bottom: 1px solid rgba(41,43,50,.1);
  position: relative;
`;

const Body = styled.div`
  padding: ${VERTICAL_GAP} ${HORIZONTAL_GAP};
`;

const Footer = styled.div`
  border-top: 1px solid rgba(41,43,50,.1);
  padding: ${VERTICAL_GAP} ${HORIZONTAL_GAP};
`;

const Title = styled.div`
  text-align: center;
  font-size: 22px;
`;

const CloseButton = styled(NakedButton)`
  font-size: 18px;
  padding: 0;
  position: absolute;
  right: ${HORIZONTAL_GAP};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if (event.code !== 'Escape') {
      return;
    }
    
    const { onClose } = this.props;

    onClose();
  }
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const {
      onClose,
      title,
      body,
      footer,
    } = this.props;
  
    return (
      <Overlay onClick={onClose}>
        <Box onClick={(event) => event.stopPropagation()}>
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={onClose}>
              X
            </CloseButton>
          </Header>
          <Body>{body}</Body>
          <Footer>{footer}</Footer>
        </Box>
      </Overlay>
    );
  }
}

export default Modal;
