import ActionTypes from './Types';
import Axios from '../../../Lib/Common/Axios';

export const userRegistered = () => ({
  type: ActionTypes.REGISTER_USER_SUCCESS,
});
export const startRegisterUser = () => ({
  type: ActionTypes.REGISTER_USER_START,
});
export const rejectedRegisterUser = () => ({
  type: ActionTypes.REGISTER_USER_FAILURE,
});

export const registerUser = user => (dispatch) => {
  dispatch(startRegisterUser());
  Axios.post('/users', user)
    .then(() => {
      dispatch(userRegistered());
    })
    .catch(() => {
      dispatch(rejectedRegisterUser());
    });
};

