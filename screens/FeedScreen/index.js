import React from "react";
import { View, Text } from "react-native";

const FeedScreen = props => (
  <View>
    <Text onPress={() => props.navigation.navigate("Likes")}>Feed Screen</Text>
    <Text onPress={() => props.navigation.navigate("TakePhoto")}>
      TakePhoto
    </Text>
  </View>
);

export default FeedScreen;
