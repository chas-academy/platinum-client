import ActionTypes from './Types';
import Axios from '../../../Lib/Common/Axios';

export const questionnairesFetched = questionnaires => ({
  type: ActionTypes.FETCH_QUESTIONNAIRES,
  questionnaires,
});
/* eslint-disable no-console, no-unused-vars */
export const fetchQuestionnaires = () => (dispatch) => {
  Axios.get('/my-questionnaires')
    .then((response) => {
      dispatch(questionnairesFetched(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createQuestionnaire = data => (dispatch) => {
  Axios.post('/my-questionnaires', data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
