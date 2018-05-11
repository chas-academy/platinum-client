import { connect } from 'react-redux';
import { createQuestion, fetchQuestionnaire, updateQuestion, deleteOption } from '../../Actions/Questionnaires';
import CreateQuestion from '../../../Components/Forms/Question/CreateQuestion';


function mapDispatchToProps(dispatch) {
  return {
    createQuestion: data => dispatch(createQuestion(data)),
    fetchQuestionnaire: id => dispatch(fetchQuestionnaire(id)),
    updateQuestion: (data, id) => dispatch(updateQuestion(data, id)),
    deleteOption: (id, questionId) => dispatch(deleteOption(id, questionId)),
  };
}

export default connect(null, mapDispatchToProps)(CreateQuestion);
