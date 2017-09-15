import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    authed: state.auth,
    firebaseApp: state.firebaseApp
  };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;