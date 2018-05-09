import { connect } from 'react-redux';
import { fetchPoll, pollFetched } from '../../Actions/Polls/';
import Results from '../../../Components/Results/Results';


function mapStateToProps(state) {
  return {
    poll: state.Polls.poll,
    isFetching: state.Polls.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPoll: id => dispatch(fetchPoll(id)),
    pollFetched: poll => dispatch(pollFetched(poll)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
