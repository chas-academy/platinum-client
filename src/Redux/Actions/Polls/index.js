import ActionTypes from './Types';
import Axios from '../../../Lib/Common/Axios';
import openSocket from 'socket.io-client';

export const startActivatePoll = () => ({
  type: ActionTypes.ACTIVATE_POLL_START,
});

export const pollActivated = () => ({
  type: ActionTypes.ACTIVATE_POLL_SUCCESS,
});

export const rejectedActivatePoll = () => ({
  type: ActionTypes.ACTIVATE_POLL_FAILURE,
});

export const startClosePoll = () => ({
  type: ActionTypes.CLOSE_POLL_START,
});

export const pollClosed = () => ({
  type: ActionTypes.CLOSE_POLL_SUCCESS,
});

export const rejectedClosePoll = () => ({
  type: ActionTypes.CLOSE_POLL_FAILURE,
});

export const startFetchPoll = () => ({
  type: ActionTypes.FETCH_POLL_START,
});

export const pollFetched = poll => ({
  type: ActionTypes.FETCH_POLL_SUCCESS,
  poll,
});

export const rejectedFetchPoll = () => ({
  type: ActionTypes.FETCH_POLL_FAILURE,
});

export const startCreateAnswer = () => ({
  type: ActionTypes.CREATE_ANSWER_START,
});

export const AnswerCreated = answer => ({
  type: ActionTypes.CREATE_ANSWER_SUCCESS,
  answer,
});

export const rejectedCreateAnswer = () => ({
  type: ActionTypes.CREATE_ANSWER_FAILURE,
});

export const startCastVote = () => ({
  type: ActionTypes.CAST_VOTE_START,
});

export const VoteCast = () => ({
  type: ActionTypes.CAST_VOTE_SUCCESS,
});

export const rejectedCastVote = () => ({
  type: ActionTypes.CAST_VOTE_FAILURE,
});

/* eslint-disable no-unused-vars */
export const activatePoll = questionnaireId => (dispatch) => {
  dispatch(startActivatePoll());
  Axios.post('/my-polls', { questionnaireId })
    .then((response) => {
      dispatch(pollActivated());
    })
    .catch((error) => {
      dispatch(rejectedActivatePoll());
    });
};

export const closePoll = id => (dispatch) => {
  dispatch(startClosePoll());
  Axios.put(`/my-polls/${id}`)
    .then((response) => {
      dispatch(pollClosed());
    })
    .catch((error) => {
      dispatch(rejectedClosePoll());
    });
};

export const fetchPoll = url => (dispatch) => {
  dispatch(startFetchPoll());
  Axios.get(url)
    .then((response) => {
      dispatch(pollFetched(response.data.poll));
    })
    .catch((error) => {
      dispatch(rejectedFetchPoll());
    });
};

export const createAnswer = pollId => (dispatch) => {
  dispatch(startCreateAnswer());
  Axios.post('/my-answer', { pollId })
    .then((response) => {
      dispatch(AnswerCreated(response.data.data));
    })
    .catch((error) => {
      dispatch(rejectedCreateAnswer());
    });
};

export const castVote = vote => (dispatch) => {
  const socket = openSocket('http://localhost:7770');

  dispatch(startCastVote());
  Axios.post('/my-vote', vote)
    .then((response) => {
      socket.emit('/my-vote', vote.pollId);
      dispatch(VoteCast());
    })
    .catch((error) => {
      dispatch(rejectedCastVote());
    });
};
