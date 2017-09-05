import { connect } from 'react-redux';
import { logout } from '../actions/actions';
import Account from '../components/Account';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    firebaseApp: state.firebaseApp
  };
};

const AccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (Account);

export default AccountContainer;