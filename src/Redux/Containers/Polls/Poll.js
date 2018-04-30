import { connect } from 'react-redux';
import { fetchActivePoll } from '../../Actions/Polls/';
import Poll from '../../../Components/Poll/Poll';


function mapStateToProps(state) {
  return {
    poll: state.Polls.activePoll,
    isFetching: state.Polls.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchActivePoll: id => dispatch(fetchActivePoll(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
