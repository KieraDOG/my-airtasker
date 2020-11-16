import instance from '../../lib/instance';

const signUp = (data) => instance
  .post('/auth/sign-up', data)
  .then((response) => response.data);

export default signUp;
