import { combineReducers } from 'redux';
import { LOGIN, LOGOUT, MANUAL_LOGIN } from '../actions/actions';

function auth(state = {}, action) {
  if (action.type === LOGIN) {
    return { ...state, credentials: action.credentials };
  }
  if (action.type === LOGOUT) {
    return { ...state, credentials: null };
  }
  if (action.type === MANUAL_LOGIN) {
    return { ...state, credentials: action.credentials, hasLoggedInManually: true };
  }
  return state;
}

function firebaseApp(state = {}, action) {
  // Nothing.... FOR NOW
  return state;
}

const fingerprintScannerApp = combineReducers({
  auth,
  firebaseApp
});
export default fingerprintScannerApp;
