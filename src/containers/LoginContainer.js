import { connect } from 'react-redux';
import { login, manualLogin } from '../actions/actions';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import Login from '../components/Login';

const mapStateToProps = (state) => {
  return {
    credentials: state.auth.credentials,
    hasLoggedInManually: state.auth.hasLoggedInManually
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginWithFinger: (credentials) => loginWithFinger(dispatch, credentials),
    loginManually: (credentials) => loginManually(dispatch, credentials)
  };
};

const loginWithFinger = (dispatch, storedCredentials) => {
  const dispatchCallback = () => dispatch(login(storedCredentials));
  FingerprintScanner.authenticate({ description: 'Scan your fingerprint to login'}).then(dispatchCallback);
};

const loginManually = (dispatch, credentials) => {
  dispatch(manualLogin(credentials));
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (Login);

export default LoginContainer;