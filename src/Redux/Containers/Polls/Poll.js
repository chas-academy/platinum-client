import { connect } from 'react-redux';
import { fetchPoll, createAnswer } from '../../Actions/Polls/';
import Poll from '../../../Components/Poll/Poll';


function mapStateToProps(state) {
  return {
    poll: state.Polls.poll,
    isFetching: state.Polls.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPoll: id => dispatch(fetchPoll(id)),
    createAnswer: id => dispatch(createAnswer(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
