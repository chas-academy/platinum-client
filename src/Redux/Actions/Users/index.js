import ActionTypes from './Types';
import Axios from '../../../Lib/Common/Axios';
import * as Session from '../../../Lib/Helpers/Session';
import JWT from 'jsonwebtoken';

export const userRegistered = () => ({
  type: ActionTypes.REGISTER_USER_SUCCESS,
});
export const startRegisterUser = () => ({
  type: ActionTypes.REGISTER_USER_START,
});
export const rejectedRegisterUser = () => ({
  type: ActionTypes.REGISTER_USER_FAILURE,
});

export const userLogedin = redirect => ({
  type: ActionTypes.LOGIN_USER_SUCCESS,
  redirect,
});
export const startLoginUser = () => ({
  type: ActionTypes.LOGIN_USER_START,
});
export const rejectedLoginUser = () => ({
  type: ActionTypes.LOGIN_USER_FAILURE,
});

export const loginUser = data => (dispatch) => {
  dispatch(startLoginUser());
  const tempToken = JWT.sign(data, process.env.REACT_APP_API_JWT_SECRET);
  Axios.post(process.env.REACT_APP_API_SIGN_IN_URL, { token: tempToken })
    .then((response) => {
      const { token, redirect } = response.data;
      dispatch(userLogedin(redirect));
      Session.store({ token });
    })
    .catch(() => {
      dispatch(rejectedLoginUser());
    });
};

export const registerUser = user => (dispatch) => {
  dispatch(startRegisterUser());
  Axios.post('/users', user)
    .then(() => {
      dispatch(userRegistered());
      dispatch(loginUser(user));
    })
    .catch(() => {
      dispatch(rejectedRegisterUser());
    });
};
