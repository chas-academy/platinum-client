import { connect } from 'react-redux';
import { activatePoll, closePoll } from '../../Actions/Polls/';
import { deleteQuestionnaire, fetchQuestionnaire } from '../../Actions/Questionnaires/';
import Questionnaire from '../../../Components/Questionnaires/Questionnaire';

function mapDispatchToProps(dispatch) {
  return {
    activatePoll: (questionnaireId, page) => dispatch(activatePoll(questionnaireId, page)),
    closePoll: (id, page) => dispatch(closePoll(id, page)),
    deleteQuestionnaire: (id, page) => dispatch(deleteQuestionnaire(id, page)),
    fetchQuestionnaire: id => dispatch(fetchQuestionnaire(id)),
  };
}

export default connect(null, mapDispatchToProps)(Questionnaire);
