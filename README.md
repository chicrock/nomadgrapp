# nomadgrapp

Cloning instagram App with React Native

## Preloading

*   Before render apps, the resource files like (images, fonts...etc) must be loaded

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
