import { connect } from 'react-redux';
import { deletePoll } from '../../Actions/Polls/';
import ListablePoll from '../../../Components/Poll/Listable/ListablePoll';

function mapDispatchToProps(dispatch) {
  return {
    deletePoll: (id, page) => dispatch(deletePoll(id, page)),
  };
}

export default connect(null, mapDispatchToProps)(ListablePoll);
