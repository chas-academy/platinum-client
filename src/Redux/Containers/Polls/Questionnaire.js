import { connect } from 'react-redux';
import { activatePoll, closePoll } from '../../Actions/Polls/';
import { fetchQuestionnaires } from '../../Actions/Questionnaires/';
import Questionnaire from '../../../Components/Questionnaires/Questionnaire';

function mapDispatchToProps(dispatch) {
  return {
    activatePoll: questionnaireId => dispatch(activatePoll(questionnaireId)),
    closePoll: id => dispatch(closePoll(id)),
    fetchQuestionnaires: () => dispatch(fetchQuestionnaires()),
  };
}

export default connect(null, mapDispatchToProps)(Questionnaire);
