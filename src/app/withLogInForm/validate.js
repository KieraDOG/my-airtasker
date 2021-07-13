const validate = (name, data) => {
  const value = data[name].value;

  switch (name) {
    case 'email': {
      if (!value) {
        return 'Please input your email';
      }

      return '';
    }

    case 'password': {
      if (!value) {
        return 'Please input your password';
      }

      return '';
    }

    default:
      return '';
  }
};

export default validate;
