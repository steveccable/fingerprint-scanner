import { connect } from 'react-redux';
import { login, manualLogin } from '../actions/actions';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import Login from '../components/Login';
import { Alert, AsyncStorage } from 'react-native';

const mapStateToProps = (state) => {
  return {
    credentials: state.auth.credentials,
    hasLoggedInManually: state.auth.hasLoggedInManually,
    firebaseApp: state.firebaseApp
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginWithFinger: (credentials) => loginWithFinger(dispatch, credentials),
    loginManually: (credentials) => loginManually(dispatch, credentials)
  };
};

const loginWithFinger = (dispatch, firebaseApp) => {
  // const storedCredentials = { username: 'steve@steve.steve', password: 'Aaaaaa' };
  const fetchCredentials = () => AsyncStorage.getItem('userCredentials');
  const dispatchCallback = (credentialsJSON) => {
    const storedCredentials = JSON.parse(credentialsJSON);
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(storedCredentials.username, storedCredentials.password)
      .then(() => dispatch(login(storedCredentials)))
      .catch((error) => {
        Alert.alert('Login Failed', error.message);
      });
  };
  FingerprintScanner
    .authenticate({ description: 'Scan your fingerprint to login'})
    .then(fetchCredentials).then(dispatchCallback).catch((error) => {
      Alert.alert('Finger Login Failed', error.message);
    });
};

const loginManually = (dispatch, credentials) => {
  dispatch(manualLogin(credentials));
  AsyncStorage.setItem('userCredentials', JSON.stringify(credentials));
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (Login);

export default LoginContainer;