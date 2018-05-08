import { connect } from 'react-redux';
import { createQuestion, fetchQuestionnaire } from '../../Actions/Questionnaires';
import CreateQuestion from '../../../Components/Forms/Question/CreateQuestion';


function mapDispatchToProps(dispatch) {
  return {
    createQuestion: data => dispatch(createQuestion(data)),
    fetchQuestionnaire: id => dispatch(fetchQuestionnaire(id)),
  };
}

export default connect(null, mapDispatchToProps)(CreateQuestion);
