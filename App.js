import React from "react";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import AppContainer from "./components/AppContainer";

import configureStore from "./redux/configureStore";

const { persistor, store } = configureStore();

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
  _loadAssetsAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("images/logo.png"),
        require("images/logo-white.png"),
        require("images/noPhoto.jpg"),
        require("images/photoPlaceholder.png"),
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font,
      }),
    ]);
  };
  _handleLoadingError = (error) => {
    console.error(error);
  };
  _handleFinishLoading = async () => {
    this.setState({
      isLoadingComplete: true,
    });
  };
}

export default App;
