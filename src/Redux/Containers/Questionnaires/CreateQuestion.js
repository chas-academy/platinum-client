import { connect } from 'react-redux';
import { createQuestion, fetchQuestionnaire, updateQuestion } from '../../Actions/Questionnaires';
import CreateQuestion from '../../../Components/Forms/Question/CreateQuestion';


function mapDispatchToProps(dispatch) {
  return {
    createQuestion: data => dispatch(createQuestion(data)),
    fetchQuestionnaire: id => dispatch(fetchQuestionnaire(id)),
    updateQuestion: (data, id) => dispatch(updateQuestion(data, id)),
  };
}

export default connect(null, mapDispatchToProps)(CreateQuestion);
