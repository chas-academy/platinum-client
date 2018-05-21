import { connect } from 'react-redux';
import { fetchPolls } from '../../Actions/Polls/';
import ListablePolls from '../../../Components/Poll/Listable/ListablePolls';


function mapStateToProps(state) {
  return {
    polls: state.Polls.myPolls,
    isFetching: state.Polls.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPolls: () => dispatch(fetchPolls()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListablePolls);
