import ActionTypes from './Types';
import Axios from '../../../Lib/Common/Axios';

export const questionnairesFetched = questionnaires => ({
  type: ActionTypes.FETCH_QUESTIONNAIRES,
  questionnaires,
});
/* eslint-disable no-console */
export const fetchQuestionnaires = () => (dispatch) => {
  Axios.get('/my-questionnaires')
    .then((response) => {
      dispatch(questionnairesFetched(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

