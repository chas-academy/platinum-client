import { connect } from 'react-redux';
import { registerUser } from '../../Actions/Users';
import SignUp from '../../../Components/Forms/SignUp';

function mapStateToProps(state) {
  return {
    isRegistering: state.Users.isRegistering,
    isRegistered: state.Users.isRegistered,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: user => dispatch(registerUser(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
