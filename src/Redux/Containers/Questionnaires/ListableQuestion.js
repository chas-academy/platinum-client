import { connect } from 'react-redux';
import { deleteQuestion } from '../../Actions/Questionnaires';
import ListableQuestion from '../../../Components/Questions/ListableQuestion';

function mapDispatchToProps(dispatch) {
  return {
    deleteQuestion:
    (id, questionnaireId, page) => dispatch(deleteQuestion(id, questionnaireId, page)),
  };
}

export default connect(null, mapDispatchToProps)(ListableQuestion);
