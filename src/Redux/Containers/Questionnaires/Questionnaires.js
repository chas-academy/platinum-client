// Connecta questionnaires komponenenten till store, första null
// (ska ersättas med mapstatetoprops (bra att kolla först att den
// fungerar eftersom man behöver ha ngt i den, börja därför med null.)),
// mapDispatchToProps som kopplas till -> (Questionnaires).
// Sen: använd den här funktionen i komponentnen
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
