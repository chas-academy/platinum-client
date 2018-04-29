import Immutable from 'immutable';
import actionTypes from '../Actions/Polls/Types';

const DEFAULT_STATE = {
  activePolls: Immutable.Record(),
  isActivatingPoll: false,
  isClosingPoll: false,
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.ACTIVATE_POLL_START:
      return { ...state, isActivatingPoll: true };
    case actionTypes.ACTIVATE_POLL_SUCCESS:
      return { ...state, isActivatingPoll: false };
    case actionTypes.ACTIVATE_POLL_FAILURE:
      return { ...state, isActivatingPoll: false };
    case actionTypes.CLOSE_POLL_START:
      return { ...state, isClosingPoll: true };
    case actionTypes.CLOSE_POLL_SUCCESS:
      return { ...state, isClosingPoll: false };
    case actionTypes.CLOSE_POLL_FAILURE:
      return { ...state, isClosingPoll: false };
    default:
      return { ...state };
  }
}
