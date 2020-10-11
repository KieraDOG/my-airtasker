import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin-top: -1px;
  background: #dadada;
`;

const Bar = styled.div`
  height: 3px;
  background-color: #7db343;
  width: ${(props) => props.value};
`;

const Progress = ({
  value,
}) => (
  <Container>
    <Bar value={value} />
  </Container>
);

Progress.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Progress;
