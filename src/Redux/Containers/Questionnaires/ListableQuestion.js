import { connect } from 'react-redux';
import { deleteQuestion } from '../../Actions/Questionnaires';
import ListableQuestion from '../../../Components/Questions/ListableQuestion';

function mapDispatchToProps(dispatch) {
  return {
    deleteQuestion: (id, questionnaireId) => dispatch(deleteQuestion(id, questionnaireId)),
  };
}

export default connect(null, mapDispatchToProps)(ListableQuestion);
