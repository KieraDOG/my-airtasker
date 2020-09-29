const signUp = ({
  email,
  password,
}) => fetch('http://localhost:8000/auth/sign-up', {
  method: 'POST',
  body: JSON.stringify({
    email,
    password,
  }),
  headers: {
    'content-type': 'application/json',
  },
});

export default signUp;
