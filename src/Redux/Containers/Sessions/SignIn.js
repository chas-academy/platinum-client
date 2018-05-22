import { connect } from 'react-redux';
import { auth } from '../../Actions/Sessions';
import { loginUser } from '../../Actions/Users';
import SignInForm from '../../../Components/Forms/SignIn';

function mapStateToProps(state) {
  return {
    isSignedIn: state.IsSignedIn,
    isSigningIn: state.Users.isSigningIn,
    redirect: state.Users.redirect,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    auth: IsSignedIn => dispatch(auth(IsSignedIn)),
    loginUser: data => dispatch(loginUser(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
