import { connect } from 'react-redux';
import { createQuestion, updateQuestion, deleteOption } from '../../Actions/Questionnaires';
import CreateQuestion from '../../../Components/Forms/Question/CreateQuestion';


function mapDispatchToProps(dispatch) {
  return {
    createQuestion: data => dispatch(createQuestion(data)),
    updateQuestion: (
      data,
      id,
      questionnaireId,
    ) => dispatch(updateQuestion(data, id, questionnaireId)),
    deleteOption: (id, questionId) => dispatch(deleteOption(id, questionId)),
  };
}

export default connect(null, mapDispatchToProps)(CreateQuestion);
