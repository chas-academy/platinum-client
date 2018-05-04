import { connect } from 'react-redux';
import { createAnswer } from '../../Actions/Polls/';
import Answer from '../../../Components/Poll/Answer/Answer';


function mapStateToProps(state) {
  return {
    answer: state.Polls.answer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createAnswer: id => dispatch(createAnswer(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
