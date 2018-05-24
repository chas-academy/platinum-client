import { connect } from 'react-redux';
import { createQuestion, updateQuestion, deleteOption } from '../../Actions/Questionnaires';
import CreateQuestion from '../../../Components/Forms/Question/CreateQuestion';


function mapDispatchToProps(dispatch) {
  return {
    createQuestion: (data, page) => dispatch(createQuestion(data, page)),
    updateQuestion: (
      data,
      id,
      questionnaireId,
      page,
    ) => dispatch(updateQuestion(data, id, questionnaireId, page)),
    deleteOption: (id, questionId) => dispatch(deleteOption(id, questionId)),
  };
}

export default connect(null, mapDispatchToProps)(CreateQuestion);
