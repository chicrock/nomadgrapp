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
_handleLoadingError = error => {
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

## Create AppContainer

```bash
]$ npm install prop-types --save
```

## Navigation

* Application is different from web.
  > Don't have link, url change, refresh...
* Use React Navigation

* There is two kind of navigation.
  1.  Tab navigation
      > Same depth each containers
      >
      > Tabs are next each other
  2.  Stack navigation
      > There exist depth each containers
      >
      > Screen exist top of the other one. Cover each other
      >
      > Has Two Mode. Screen and popup modal

```bash
]$ npm install --save react-navigation
```

## Ionicons

* Can find [expo vector-icons](https://expo.github.io/vector-icons/)

```js
import Ionicons from "@expo/vector-icons";
```

## TextInput underlines on android

* When appears underlines in TextInput on Android, then add this code on TextInput's props

```js
underlineColorAndroid = "rgba(0,0,0,0)";
```

## Localhost django api server to open

* Something like proxy server
* Go https://ngrok.com
* Download ngrok related on your os

```bash
# run with your port that you want to share
]$ ngrok 8000
```

```python
# Add ALLOWED_HOSTS config/settings/local.py
ALLOWED_HOSTS = ["*"]
```

## Facebook login

* [Facebook login on expo](https://docs.expo.io/versions/latest/sdk/facebook.html)

* Have to add platforms ios and android on [Facebook Developers](https://developers.facebook.com/)

```
Add host.exp.Exponent as an iOS Bundle ID. Add rRW++LUjmZZ+58EbN5DVhGAnkX4= as an Android key hash. Your app's settings should end up including the following under "Settings > Basic"
```

## Standalone App

* See https://docs.expo.io/versions/v26.0.0/distribution/building-standalone-apps
