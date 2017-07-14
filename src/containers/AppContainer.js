import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    authed: state.auth
  };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;