import { connect } from 'react-redux';
import { fetchQuestionnaires } from '../../Actions/Questionnaires';
import Questionnaires from '../../../Components/Questionnaires/Questionnaires';

function mapStateToProps(state) {
  return {
    questionnaires: state.Questionnaires.questionnaires,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuestionnaires: () => dispatch(fetchQuestionnaires()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaires);
