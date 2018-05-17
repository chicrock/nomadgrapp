import React, { Component } from "react";
import PropTypes from "prop-types";
import Notification from "./presenter";

class Container extends Component {
  state = {
    isFollowing: this.props.creator.following,
  };
  static propTypes = {
    followUser: PropTypes.func.isRequired,
    unfollowUser: PropTypes.func.isRequired,
  };
  render() {
    return (
      <Notification
        handleFollowPress={this._handleFollowPress}
        {...this.props}
        {...this.state}
      />
    );
  }
  _handleFollowPress = async () => {
    const { isFollowing } = this.state;
    const { followUser, unfollowUser } = this.props;
    if (isFollowing) {
      this.setState({
        isFollowing: false,
      });
      if (await unfollowUser()) {
        this.setState({
          isFollowing: true,
        });
      }
    } else {
      this.setState({
        isFollowing: true,
      });
      if (await followUser()) {
        this.setState({
          isFollowing: false,
        });
      }
    }
  };
}

export default Container;
