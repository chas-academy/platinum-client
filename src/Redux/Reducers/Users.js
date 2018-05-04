import actionTypes from '../Actions/Users/Types';

const DEFAULT_STATE = {
  isRegistering: false,
  isRegistered: false,
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
    default:
      return { ...state };
  }
}
