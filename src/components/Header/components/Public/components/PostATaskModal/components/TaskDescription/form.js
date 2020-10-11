const form = {
  task: {
    label: 'What do you need done?',
    helper: "This'll be the title of your task - e.g. Help move my sofa",
    type: 'text',
    getErrorMessage: (value) => {
      if (value.length < 10 || value.length > 50) {
        return 'Please enter at least 10 characters and a maximum of 50';
      }

      return '';
    },
  },
  details: {
    label: 'What are the details?',
    helper: 'Be as specific as you can about what needs doing',
    getErrorMessage: (value) => {
      if (value.length < 25) {
        return 'Please enter at least 25 characters';
      }

      return '';
    },
  },
};

export default form;
