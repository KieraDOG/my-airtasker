const form = {
  appointmentType: {
    label: 'Where do you need it done?',
  },
  address: {
    type: 'text',
    getErrorMessage: (value, data) => {
      if (data.type === 'Online') {
        return '';
      }

      if (!value) {
        return 'Please enter an address';
      }

      return '';
    },
  },
  details: {
    label: 'When do you need it done?',
    type: 'date',
    getErrorMessage: (value) => {
      if (!value) {
        return 'Please select the date you would like the task to be done';
      }

      return '';
    },
  },
};

export default form;
