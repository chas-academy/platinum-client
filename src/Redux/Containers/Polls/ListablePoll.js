import { connect } from 'react-redux';
import { deletePoll } from '../../Actions/Polls/';
import ListablePoll from '../../../Components/Poll/Listable/ListablePoll';

function mapDispatchToProps(dispatch) {
  return {
    deletePoll: id => dispatch(deletePoll(id)),
  };
}

export default connect(null, mapDispatchToProps)(ListablePoll);
