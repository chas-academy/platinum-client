import ActionTypes from './Types';
import Axios from '../../../Lib/Common/Axios';

export const startFetchingQuestionnaires = () => ({
  type: ActionTypes.FETCH_QUESTIONNAIRES_START,
});
export const questionnairesFetched = questionnaires => ({
  type: ActionTypes.FETCH_QUESTIONNAIRES_SUCCESS,
  questionnaires,
});
export const rejectedFetchingQuestionnaires = () => ({
  type: ActionTypes.FETCH_QUESTIONNAIRES_FAILURE,
});
export const questionnaireCreated = () => ({
  type: ActionTypes.CREATE_QUESTIONNAIRE_SUCCESS,
});
export const startCreateQuestionnaire = () => ({
  type: ActionTypes.CREATE_QUESTIONNAIRE_START,
});
export const rejectedCreateQuestionnaire = () => ({
  type: ActionTypes.CREATE_QUESTIONNAIRE_FAILURE,
});
export const startDeleteQuestionnaire = () => ({
  type: ActionTypes.DELETE_QUESTIONNAIRE_START,
});
export const questionnaireDeleted = () => ({
  type: ActionTypes.DELETE_QUESTIONNAIRE_SUCCESS,
});
export const rejectedDeleteQuestionnaire = () => ({
  type: ActionTypes.DELETE_QUESTIONNAIRE_FAILURE,
});


/* eslint-disable no-console */
export const fetchQuestionnaires = () => (dispatch) => {
  dispatch(startFetchingQuestionnaires());
  Axios.get('/my-questionnaires')
    .then((response) => {
      dispatch(questionnairesFetched(response.data));
    })
    .catch(() => {
      dispatch(rejectedFetchingQuestionnaires());
    });
};

export const createQuestionnaire = data => (dispatch) => {
  dispatch(startCreateQuestionnaire());
  Axios.post('/my-questionnaires', data)
    .then(() => {
      dispatch(questionnaireCreated());
    })
    .catch(() => {
      dispatch(rejectedCreateQuestionnaire());
    });
};

export const deleteQuestionnaire = id => (dispatch) => {
  dispatch(startDeleteQuestionnaire());
  Axios.delete(`/my-questionnaires/${id}`)
    .then(() => {
      dispatch(questionnaireDeleted());
    })
    .catch(() => {
      dispatch(rejectedDeleteQuestionnaire());
    });
};
