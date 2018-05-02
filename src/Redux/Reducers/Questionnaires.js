import actionTypes from '../Actions/Questionnaires/Types';
import Immutable from 'immutable';
import Questionnaire from '../Models/Questionnaire';

const DEFAULT_STATE = {
  questionnaires: Immutable.OrderedMap(),

};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONNAIRES:
      return {
        ...state,
        questionnaires:
        action.questionnaires
          .map(questionnaire => new Questionnaire(questionnaire)),
      };
    default:
      return { ...state };
  }
}
