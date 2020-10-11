import api from '../../lib/api';

const signIn = ({
  email,
  password,
}) => api.post('/auth/sign-in', {
  email,
  password,
});

export default signIn;
