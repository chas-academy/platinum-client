import { connect } from 'react-redux';
import { deletePoll, fetchPolls } from '../../Actions/Polls/';
import ListablePoll from '../../../Components/Poll/Listable/ListablePoll';

function mapDispatchToProps(dispatch) {
  return {
    deletePoll: id => dispatch(deletePoll(id)),
    fetchPolls: () => dispatch(fetchPolls()),
  };
}

export default connect(null, mapDispatchToProps)(ListablePoll);
