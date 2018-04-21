import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import LogInScreen from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: "",
    isSubmitting: false,
  };
  static propTypes = {
    login: PropTypes.func.isRequired,
    facebookLogin: PropTypes.func.isRequired,
  };
  static navigationOptions = ({ navigation }) => ({
    // title: "Log In",
    header: null,
  });

  render() {
    return (
      <LogInScreen
        {...this.state}
        {...this.props}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
        facebookLogin={this._handleFacebookLogin}
      />
    );
  }

  _changeUsername = text => {
    this.setState({ username: text });
  };
  _changePassword = text => {
    this.setState({ password: text });
  };
  _submit = async () => {
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;

    if (!isSubmitting) {
      if (username && password) {
        this.setState({
          isSubmitting: true,
        });
        /// redux action
        const loginResult = await login(username, password);
        if (!loginResult) {
          Alert.alert("Something went wrong, try again");
          this.setState({
            isSubmitting: false,
          });
        }
      } else if (!username) {
        Alert.alert("Username is required");
      } else if (!password) {
        Alert.alert("Password is required");
      }
    }
  };

  _handleFacebookLogin = async () => {
    const { facebookLogin } = this.props;
    this.setState({
      isSubmitting: true,
    });
    const facebookResult = await facebookLogin();
    if (!facebookResult) {
      this.setState({
        isSubmitting: false,
      });
    }
  };
}

export default Container;
