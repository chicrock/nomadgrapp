import { StackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";
import UploadPhotoScreen from "../screens/UploadPhotoScreen";
import AddPhotoNavigation from "./AddPhotoNavigation";

const RootNavigation = StackNavigator(
  {
    Tabs: {
      screen: TabsNavigation,
      navigationOptions: {
        header: null,
      },
    },
    TakePhoto: {
      screen: AddPhotoNavigation,
      navigationOptions: {
        header: null,
      },
    },
    UploadPhoto: {
      screen: UploadPhotoScreen,
      navigationOptions: {
        header: "Upload Photo",
      },
    },
  },
  {
    mode: "modal",
    navigationOptions: {
      //gesturesEnabled: false,
    },
  }
);

export default RootNavigation;
