import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  static propTypes = {
    profileObject: PropTypes.object.isRequired,
    refresh: PropTypes.func.isRequired,
  };
  state = {
    isFetching: true,
  };

  componentDidMount = () => {
    const { profileObject } = this.props;

    if (profileObject) {
      this.setState({
        ...this.state,
        isFetching: false,
      });
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.profileObject) {
      this.setState({
        ...this.state,
        isFetching: false,
      });
    }
  };
  render() {
    const { isFetching } = this.state;
    return <Profile {...this.props} isFetching={isFetching} />;
  }
}

export default Container;
