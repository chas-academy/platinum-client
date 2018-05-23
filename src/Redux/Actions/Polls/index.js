import ActionTypes from './Types';
import Axios from '../../../Lib/Common/Axios';
import { saveVoteToLocalStorage } from '../../../Lib/Helpers/Session';
import openSocket from 'socket.io-client';
import { fetchQuestionnaires } from '../Questionnaires';

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

export const startDeletePoll = () => ({
  type: ActionTypes.DELETE_POLL_START,
});

export const pollDeleted = () => ({
  type: ActionTypes.DELETE_POLL_SUCCESS,
});

export const rejectedDeletePoll = () => ({
  type: ActionTypes.DELETE_POLL_FAILURE,
});

export const startFetchPoll = () => ({
  type: ActionTypes.FETCH_POLL_START,
});

export const pollFetched = poll => ({
  type: ActionTypes.FETCH_POLL_SUCCESS,
  poll,
});

export const rejectedFetchPoll = () => ({
  type: ActionTypes.FETCH_POLLS_FAILURE,
});

export const startFetchPolls = () => ({
  type: ActionTypes.FETCH_POLLS_START,
});

export const pollsFetched = polls => ({
  type: ActionTypes.FETCH_POLLS_SUCCESS,
  polls,
});

export const rejectedFetchPolls = () => ({
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
export const activatePoll = (questionnaireId, page) => (dispatch) => {
  dispatch(startActivatePoll());
  Axios.post('/my-polls', { questionnaireId })
    .then((response) => {
      dispatch(fetchQuestionnaires(page));
      dispatch(pollActivated());
    })
    .catch((error) => {
      dispatch(rejectedActivatePoll());
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

export const fetchPolls = () => (dispatch) => {
  dispatch(startFetchPolls());
  Axios.get('/my-polls')
    .then((response) => {
      dispatch(pollsFetched(response.data));
    })
    .catch((error) => {
      dispatch(rejectedFetchPolls());
    });
};

export const closePoll = (id, page) => (dispatch) => {
  dispatch(startClosePoll());
  Axios.put(`/my-polls/${id}`)
    .then((response) => {
      dispatch(fetchQuestionnaires(page));
      dispatch(pollClosed());
    })
    .catch((error) => {
      dispatch(rejectedClosePoll());
    });
};

export const deletePoll = id => (dispatch) => {
  dispatch(startDeletePoll());
  Axios.delete(`/my-polls/${id}`)
    .then((response) => {
      dispatch(fetchPolls());
      dispatch(pollDeleted());
    })
    .catch((error) => {
      dispatch(rejectedDeletePoll());
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
  const socket = openSocket(process.env.REACT_APP_API_BASE_URL);

  dispatch(startCastVote());
  Axios.post('/my-vote', vote)
    .then((response) => {
      socket.emit('/my-vote', vote.pollId);
      dispatch(VoteCast());
      saveVoteToLocalStorage(vote);
    })
    .catch((error) => {
      dispatch(rejectedCastVote());
    });
};
