import { connect } from 'react-redux';
import { createQuestionnaire } from '../../Actions/Questionnaires';
import CreateQuestionnaire from '../../../Components/Forms/Question/CreateQuestionnaire';

function mapDispatchToProps(dispatch) {
  return {
    createQuestionnaire: data => dispatch(createQuestionnaire(data)),
  };
}

export default connect(null, mapDispatchToProps)(CreateQuestionnaire);
