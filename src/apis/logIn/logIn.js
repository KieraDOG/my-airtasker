import instance from '../../lib/instance';

const logIn = (data) => instance
  .post('/auth/sign-in', data)
  .then((response) => response.data);

export default logIn;
