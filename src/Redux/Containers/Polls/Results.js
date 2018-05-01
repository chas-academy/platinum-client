import { connect } from 'react-redux';
import { fetchPoll } from '../../Actions/Polls/';
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
