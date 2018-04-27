import ActionTypes from './Types';
import Axios from '../../../Lib/Common/Axios';

export const startActivatePoll = () => ({
  type: ActionTypes.ACTIVATE_POLL_START,
});

export const pollActivated = poll => ({
  type: ActionTypes.ACTIVATE_POLL_SUCCESS,
  poll,
});

export const rejectedActivatePoll = () => ({
  type: ActionTypes.ACTIVATE_POLL_FAILURE,
});

export const startClosePoll = () => ({
  type: ActionTypes.CLOSE_POLL_START,
});

export const pollClosed = poll => ({
  type: ActionTypes.CLOSE_POLL_SUCCESS,
  poll,
});

export const rejectedClosePoll = () => ({
  type: ActionTypes.CLOSE_POLL_FAILURE,
});
/* eslint-disable no-unused-vars */
export const activatePoll = questionnaireId => (dispatch) => {
  dispatch(startActivatePoll());
  Axios.post('/my-polls', { questionnaireId })
    .then((response) => {
      dispatch(pollActivated(response.data.data));
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

/* todo update backend to beable to fetch closed/active polls
and then create func to get thoes polls to the store */
