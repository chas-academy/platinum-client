import { connect } from 'react-redux';
import { fetchQuestionnaires } from '../../Actions/Questionnaires';
import Questionnaires from '../../../Components/Questionnaires/Questionnaires';

function mapStateToProps(state) {
  return {
    questionnaires: state.Questionnaires.questionnaires,
    morePages: state.Questionnaires.morePages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuestionnaires: page => dispatch(fetchQuestionnaires(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaires);
