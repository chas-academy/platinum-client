import actionTypes from '../Actions/Users/Types';
import Immutable from 'immutable';
import Redirect from '../Models/Redirect';

const DEFAULT_STATE = {
  isRegistering: false,
  isRegistered: false,
  isSigningIn: false,
  redirect: Immutable.Record(),
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.REGISTER_USER_START:
      return {
        ...state,
        isRegistering: true,
      };
    case actionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        isRegistered: true,
      };
    case actionTypes.REGISTER_USER_FAILURE:
      return {
        ...state,
        isRegistering: false,
      };
    case actionTypes.LOGIN_USER_START:
      return {
        ...state,
        isSigningIn: true,
      };
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        redirect: new Redirect({ to: action.redirect }),
        isSigningIn: false,
      };
    case actionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        isSigningIn: false,
      };
    default:
      return { ...state };
  }
}
