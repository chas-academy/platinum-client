import { connect } from 'react-redux';
import { deleteQuestion, fetchQuestionnaire } from '../../Actions/Questionnaires';
import ListableQuestion from '../../../Components/Questions/ListableQuestion';

function mapDispatchToProps(dispatch) {
  return {
    deleteQuestion: id => dispatch(deleteQuestion(id)),
    fetchQuestionnaire: id => dispatch(fetchQuestionnaire(id)),
  };
}

export default connect(null, mapDispatchToProps)(ListableQuestion);
