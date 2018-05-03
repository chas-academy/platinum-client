import actionTypes from '../Actions/Questionnaires/Types';
import Immutable from 'immutable';
import Questionnaire from '../Models/Questionnaire';

const DEFAULT_STATE = {
  questionnaires: Immutable.OrderedMap(),
  isCreating: false,
  isFetching: false,

};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONNAIRES_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_QUESTIONNAIRES_SUCCESS:
      return {
        ...state,
        questionnaires:
        action.questionnaires
          .map(questionnaire => new Questionnaire(questionnaire)),
        isFetching: false,
      };
    case actionTypes.FETCH_QUESTIONNAIRES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case actionTypes.CREATE_QUESTIONNAIRE_START:
      return {
        ...state,
        isCreating: true,
      };
    case actionTypes.CREATE_QUESTIONNAIRE_SUCCESS:
      return {
        ...state,
        isCreating: false,
      };
    case actionTypes.CREATE_QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        isCreating: false,
      };
    default:
      return { ...state };
  }
}
