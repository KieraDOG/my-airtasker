import validator from 'validator';

const Fields = [{
  key: 'email',
  label: 'Email',
  type: 'text',
  validations: [{
    message: 'Please enter you email address',
    validator: (value) => !validator.isEmpty(value),
  }, {
    message: 'Please enter a valid email address',
    validator: (value) => validator.isEmail(value),
  }],
}, {
  key: 'password',
  label: 'Password',
  type: 'password',
  validations: [{
    message: 'Please enter you password',
    validator: (value) => !validator.isEmpty(value),
  }, {
    message: 'Password must be at least 8 characters',
    validator: (value) => validator.isLength(value, { min: 8 }),
  }],
}, {
  key: 'confirmPassword',
  label: 'Confirm password',
  type: 'password',
  validations: [{
    message: 'Please confirm your password',
    validator: (value) => !validator.isEmpty(value),
  }, {
    message: 'Confirm password is different to your password',
    validator: (value, data) => value === data.password.value,
  }],
}];

export default Fields;
