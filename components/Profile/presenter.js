import React from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import Notification from "../../components/Notification";

const { width, height } = Dimensions.get("window");

const Profile = props => (
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={"black"}
      />
    }
    // contentContainerStyle={styles.container}
  >
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  </ScrollView>
);

Profile.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired,
  profileObject: PropTypes.shape({
    bio: PropTypes.string,
    followers_count: PropTypes.number,
    following_count: PropTypes.number,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        creator: PropTypes.shape({
          profile_image: PropTypes.string,
          username: PropTypes.string.isRequired,
        }).isRequired,
        location: PropTypes.string.isRequired,
        file: PropTypes.string.isRequired,
        like_count: PropTypes.number.isRequired,
        caption: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
              profile_image: PropTypes.string,
              username: PropTypes.string.isRequired,
            }).isRequired,
          })
        ).isRequired,
        natural_time: PropTypes.string.isRequired,
        is_liked: PropTypes.bool.isRequired,
        is_vertical: PropTypes.bool.isRequired,
      })
    ),
    name: PropTypes.string,
    post_count: PropTypes.number,
    profile_image: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string,
    is_self: PropTypes.bool.isRequired,
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Profile;
