const getUser = () => fetch('http://localhost:8000/auth', {
  method: 'GET',
  headers: {
    'X-Auth-Token': localStorage.getItem('token'),
  },
});

export default getUser;
