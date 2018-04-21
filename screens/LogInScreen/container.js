import React, { Component } from "react";
import { Alert } from "react-native";
import LogInScreen from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: "",
    isSubmitting: false,
  };
  static navigationOptions = ({ navigation }) => ({
    // title: "Log In",
    header: null,
  });

  render() {
    return (
      <LogInScreen
        {...this.state}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
      />
    );
  }

  _changeUsername = text => {
    this.setState({ username: text });
  };
  _changePassword = text => {
    this.setState({ password: text });
  };
  _submit = () => {
    const { username, password, isSubmitting } = this.state;
    if (!isSubmitting) {
      if (username && password) {
        this.setState({
          isSubmitting: true,
        });
        /// redux action
      } else if (!username) {
        Alert.alert("Username is required");
      } else if (!password) {
        Alert.alert("Password is required");
      }
    }
  };
}

export default Container;
