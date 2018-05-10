import actionTypes from '../Actions/Questionnaires/Types';
import Immutable from 'immutable';
import Questionnaire from '../Models/Questionnaire';

const DEFAULT_STATE = {
  questionnaires: Immutable.OrderedMap(),
  activeQuestionnaire: Immutable.Record(),
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
        activeQuestionnaire: new Questionnaire(action.questionnaire),
        isCreating: false,
      };
    case actionTypes.CREATE_QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        isCreating: false,
      };
    case actionTypes.FETCH_QUESTIONNAIRE_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_QUESTIONNAIRE_SUCCESS:
      return {
        ...state,
        activeQuestionnaire: new Questionnaire(action.questionnaire),
        isFetching: false,
      };
    case actionTypes.FETCH_QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case actionTypes.CREATE_QUESTION_START:
      return {
        ...state,
        isCreating: true,
      };
    case actionTypes.CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        isCreating: false,
      };
    case actionTypes.CREATE_QUESTION_FAILURE:
      return {
        ...state,
        isCreating: false,
      };
    case actionTypes.REMOVE_ACTIVEQUESTIONNAIRE:
      return {
        ...state,
        activeQuestionnaire: Immutable.Record(),
      };
    default:
      return { ...state };
  }
}
