const signIn = ({
  email,
  password,
}) => fetch('http://localhost:8000/auth/sign-in', {
  method: 'POST',
  body: JSON.stringify({
    email,
    password,
  }),
  headers: {
    'content-type': 'application/json',
  },
});

export default signIn;
