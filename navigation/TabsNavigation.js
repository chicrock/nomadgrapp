import React from "react";

import { TabNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import HomeRoute from "../routes/HomeRoute";
import SearchRoute from "../routes/SearchRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";

const TabsNavigation = TabNavigator(
  {
    Home: {
      screen: HomeRoute,
    },
    Search: {
      screen: SearchRoute,
    },
    Notifications: {
      screen: NotificationsRoute,
    },
    Profile: {
      screen: ProfileRoute,
    },
  },
  {
    tabBarPosition: "bottom",
  }
);

export default TabsNavigation;
