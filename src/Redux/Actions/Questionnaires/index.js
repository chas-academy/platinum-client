import ActionTypes from './Types';
import Axios from '../../../Lib/Common/Axios';

// funktionen för att sedan hämta datan i containern-.

export const questionnairesFetched = questionnaires => ({
  type: ActionTypes.FETCH_QUESTIONNAIRES,
  questionnaires,
});

export const fetchQuestionnaires = () => (dispatch) => {
  Axios.get('/my-questionnaires')
    .then((response) => {
      dispatch(questionnairesFetched(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

