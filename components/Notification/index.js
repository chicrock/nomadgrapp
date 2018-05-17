import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    creator: { id },
  } = ownProps;
  return {
    followUser: () => {
      dispatch(userActions.followUser(id));
    },
    unfollowUser: () => {
      dispatch(userActions.unfollowUser(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Container);
