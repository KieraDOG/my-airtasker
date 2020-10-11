import React from 'react';
import PropTypes from 'prop-types';
import withAuthentication from '../../components/withAuthentication';
import compose from '../../utils/compose';

const Dashboard = ({
  authentication,
}) => (
  <div>{authentication.user.email}</div>
);

Dashboard.propTypes = {
  authentication: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
  }).isRequired,
};

const EnhancedDashboard = compose(
  withAuthentication,
)(Dashboard);

export default EnhancedDashboard;
