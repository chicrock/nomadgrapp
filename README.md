# nomadgrapp

Cloning instagram App with React Native

## Preloading

* Before render apps, the resource files like (images, fonts...etc) must be loaded

```js
import { AppLoading, Asset, Font } from "expo";
import { IonIcons, MaterialIcons } from "@expo/vector-icons";

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

_loadAssetsAsync = async () => {
  return Promise.all([
    Asset.loadAsync([require("./assets/images/logo.png")]),
    Font.loadAsync([...IonIcons.font, ...MaterialIcons.font]),
  ]);
};
_handleLoadingError = (error) => {
  cosole.log(error);
};
_handleFinishLoading = async () => {
  this.setState({
    isLoadingComplete: true,
  });
};
```

## Persist the Redux store on phone

* Restore app data(redux) on phone storages.

```bash
# use npm instead of yarn(yarn occure unexpected errors)
# redux-persist do store redux data on phone storage
]$ npm install redux-persist redux-thunk react-redux redux --save
```

* Import redux persist modules

```js
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux/configureStore";

const { persistor, store } = configureStore();
```

* PersistGate do wait until load all redux data from storage.
