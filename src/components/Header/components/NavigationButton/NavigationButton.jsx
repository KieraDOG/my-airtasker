import styled from 'styled-components';
import Button from '../../../Button';

const NavigationButton = styled(Button)`
  margin: 8px 16px;
`;

NavigationButton.defaultProps = {
  variant: 'primary',
  size: 'small',
};

export default NavigationButton;
