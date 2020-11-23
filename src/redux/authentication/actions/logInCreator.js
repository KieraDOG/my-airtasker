import { LOG_IN_REQUEST, LOG_IN_SUCCESSFUL, LOG_IN_FAILED } from '../types';
import logIn from '../../../apis/logIn';

const logInCreator  = ({
  email,
  password,
}) => (dispatch) => {
  dispatch({
    type: LOG_IN_REQUEST,
  });

  return logIn({ email, password })
    .then((data) => {
      dispatch({
        type: LOG_IN_SUCCESSFUL,
        payload: data,
      });
    })
    .catch((error) => {
      const message = error.response && {
        404: 'Email and password does not match, please try again',
      }[error.response.status];

      dispatch({
        type: LOG_IN_FAILED,
        payload: message,
      });
    });
};

export default logInCreator;
