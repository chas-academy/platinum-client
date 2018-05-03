import { connect } from 'react-redux';
import { createQuestionnaire } from '../../Actions/Polls/';
import CreateQuestion from '../../../Components/Forms/Question/CreateQuestion';

function mapDispatchToProps(dispatch) {
  return {
    createQuestionnaire: data => dispatch(createQuestionnaire(data)),
  };
}

export default connect(null, mapDispatchToProps)(CreateQuestion);
