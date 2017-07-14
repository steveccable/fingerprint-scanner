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

const AccountContainer = connect(
  null,
  mapDispatchToProps
) (Account);

export default AccountContainer;