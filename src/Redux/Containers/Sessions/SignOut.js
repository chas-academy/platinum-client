import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { auth } from '../../Actions/Sessions';
import RedirectToSlash from '../../../Components/RedirectToSlash';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ auth }, dispatch);
}

export default connect(null, mapDispatchToProps)(RedirectToSlash);
