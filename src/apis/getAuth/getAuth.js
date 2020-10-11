import api from '../../lib/api';

const getUser = () => api.get('/auth');

export default getUser;
