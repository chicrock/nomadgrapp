import React from "react";
import { Button } from "react-native";
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
      navigationOptions: ({ navigation }) => ({
        title: "Upload Photo",
        headerLeft: (
          <Button
            title="<"
            onPress={() => navigation.goBack(null)}
            color="black"
          />
        ),
      }),
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
