import { connect } from 'react-redux';
import { activatePoll, closePoll } from '../../Actions/Polls/';
import Questionnaire from '../../../Components/Questionnaires/Questionnaire';

function mapStateToProps(state) {
  return { polls: state.Polls };
}

function mapDispatchToProps(dispatch) {
  return {
    activatePoll: questionnaireId => dispatch(activatePoll(questionnaireId)),
    closePoll: id => dispatch(closePoll(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
