import { connect } from 'react-redux';
import { createQuestionnaire, fetchQuestionnaire, removeActiveQuestionnaire, updateQuestionnaire } from '../../Actions/Questionnaires';
import CreateQuestionnaire from '../../../Components/Forms/Question/CreateQuestionnaire';


function mapStateToProps(state) {
  return {
    activeQuestionnaire: state.Questionnaires.activeQuestionnaire,
    morePages: state.Questionnaires.morePages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createQuestionnaire: data => dispatch(createQuestionnaire(data)),
    fetchQuestionnaire: (id, page) => dispatch(fetchQuestionnaire(id, page)),
    removeActiveQuestionnaire: () => dispatch(removeActiveQuestionnaire()),
    updateQuestionnaire: (id, data, page) => dispatch(updateQuestionnaire(id, data, page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionnaire);
