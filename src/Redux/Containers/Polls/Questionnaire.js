import { connect } from 'react-redux';
import { activatePoll, closePoll } from '../../Actions/Polls/';
import { fetchQuestionnaires, deleteQuestionnaire } from '../../Actions/Questionnaires/';
import Questionnaire from '../../../Components/Questionnaires/Questionnaire';

function mapDispatchToProps(dispatch) {
  return {
    activatePoll: questionnaireId => dispatch(activatePoll(questionnaireId)),
    closePoll: id => dispatch(closePoll(id)),
    fetchQuestionnaires: () => dispatch(fetchQuestionnaires()),
    deleteQuestionnaire: id => dispatch(deleteQuestionnaire(id)),
  };
}

export default connect(null, mapDispatchToProps)(Questionnaire);
