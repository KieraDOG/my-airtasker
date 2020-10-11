import api from '../../lib/api';

const signUp = ({
  email,
  password,
}) => api.post('/auth/sign-up', {
  email,
  password,
});

export default signUp;
