import { connect } from 'react-redux';
import { castVote } from '../../Actions/Polls/';
import Vote from '../../../Components/Poll/Answer/Vote/Vote';

function mapDispatchToProps(dispatch) {
  return {
    castVote: vote => dispatch(castVote(vote)),
  };
}

export default connect(null, mapDispatchToProps)(Vote);
