import Immutable from 'immutable';
import actionTypes from '../Actions/Polls/Types';
import Poll from '../Models/Poll';
import Answer from '../Models/Answer';

const DEFAULT_STATE = {
  poll: Immutable.Record(),
  myPolls: Immutable.OrderedMap(),
  answer: Immutable.Record(),
  isActivatingPoll: false,
  isClosingPoll: false,
  isFetching: false,
  isCreatingAnswer: false,
  isCastingVote: false,
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
    case actionTypes.FETCH_POLL_START:
      return { ...state, isFetching: true };
    case actionTypes.FETCH_POLL_SUCCESS:
      return { ...state, poll: new Poll(action.poll), isFetching: false };
    case actionTypes.FETCH_POLL_FAILURE:
      return { ...state, isFetching: false };
    case actionTypes.FETCH_POLLS_START:
      return { ...state, isFetching: true };
    case actionTypes.FETCH_POLLS_SUCCESS:
      return { ...state, myPolls: action.polls.map(poll => new Poll(poll)), isFetching: false };
    case actionTypes.FETCH_POLLS_FAILURE:
      return { ...state, isFetching: false };
    case actionTypes.CREATE_ANSWER_START:
      return { ...state, isCreatingAnswer: true };
    case actionTypes.CREATE_ANSWER_SUCCESS:
      return { ...state, answer: new Answer(action.answer), isCreatingAnswer: false };
    case actionTypes.CREATE_ANSWER_FAILURE:
      return { ...state, isCreatingAnswer: false };
    case actionTypes.CAST_VOTE_START:
      return { ...state, isCastingVote: true };
    case actionTypes.CAST_VOTE_SUCCESS:
      return { ...state, isCastingVote: false };
    case actionTypes.CAST_VOTE_FAILURE:
      return { ...state, isCastingVote: false };
    default:
      return { ...state };
  }
}
