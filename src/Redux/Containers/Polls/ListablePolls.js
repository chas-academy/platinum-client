import { connect } from 'react-redux';
import { fetchPolls } from '../../Actions/Polls/';
import ListablePolls from '../../../Components/Poll/Listable/ListablePolls';


function mapStateToProps(state) {
  return {
    polls: state.Polls.myPolls,
    isFetching: state.Polls.isFetching,
    morePages: state.Polls.morePages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPolls: page => dispatch(fetchPolls(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListablePolls);
