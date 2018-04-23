import { StackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";

const RootNavigation = StackNavigator(
  {
    Tabs: {
      screen: TabsNavigation,
      navigationOptions: {
        header: null,
      },
    },
    TakePhoto: {
      screen: TakePhotoScreen,
      navigationOptions: {
        header: null,
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
