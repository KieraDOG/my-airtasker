import instance from '../../lib/instance';

const getAuth = () => instance
  .get('/auth')
  .then((response) => response.data);

export default getAuth;
