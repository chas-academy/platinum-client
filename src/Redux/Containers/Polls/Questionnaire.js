import { connect } from 'react-redux';
import { activatePoll, closePoll } from '../../Actions/Polls/';
import { deleteQuestionnaire, fetchQuestionnaire } from '../../Actions/Questionnaires/';
import Questionnaire from '../../../Components/Questionnaires/Questionnaire';

function mapDispatchToProps(dispatch) {
  return {
    activatePoll: questionnaireId => dispatch(activatePoll(questionnaireId)),
    closePoll: id => dispatch(closePoll(id)),
    deleteQuestionnaire: id => dispatch(deleteQuestionnaire(id)),
    fetchQuestionnaire: id => dispatch(fetchQuestionnaire(id)),
  };
}

export default connect(null, mapDispatchToProps)(Questionnaire);
