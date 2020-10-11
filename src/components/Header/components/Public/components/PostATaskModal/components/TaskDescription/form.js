const form = {
  task: {
    label: 'What do you need done?',
    type: 'text',
    getErrorMessage: (value) => {
      if (value.length < 10 || value.length > 50) {
        return 'Please enter at least 10 characters and a maximum of 50';
      }

      return '';
    },
  },
  details: {
    label: 'Password',
    type: 'password',
    getErrorMessage: (value) => {
      if (value.length < 25) {
        return 'Please enter at least 25 characters';
      }

      return '';
    },
  },
};

export default form;
