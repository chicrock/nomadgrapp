import React from "react";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import NavButton from "../components/NavButton";

const sharedRoutes = {
  Likes: {
    screen: LikesScreen,
    navigationOptions: {
      headerTitle: "Likes",
    },
  },
  Comments: {
    screen: CommentsScreen,
    navigationOptions: {
      headerTitle: "Comments",
    },
  },
};

const sharedOptions = {
  navigationOptions: {
    headerLeft: props => (
      <NavButton {...props} iconName={"ios-arrow-back-outline"} />
    ),
    headerStyle: {
      backgroundColor: "#FBFBFB",
    },
  },
};

export { sharedOptions };

export default sharedRoutes;
