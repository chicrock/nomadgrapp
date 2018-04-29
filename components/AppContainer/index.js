import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;

  return {
    isLoggedIn: user.isLoggedIn,
    profile: user.profile,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      /// getFeed
      dispatch(photoActions.getFeed());
      /// getSearch
      dispatch(photoActions.getSearch());
      /// getNotifications
      dispatch(userActions.getNotifications());
      /// getProfile
      dispatch(userActions.getOwnProfile());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
