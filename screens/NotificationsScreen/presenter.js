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

const NotificationsScreen = props => (
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
      {props.notifications.length === 0 ? (
        <Text style={styles.notFound}>
          No notifications yet ! Came back soon
        </Text>
      ) : (
        props.notifications.map(notification => (
          <Notification key={notification.id} {...notification} />
        ))
      )}
    </View>
  </ScrollView>
);

NotificationsScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  notFound: {
    color: "#bbb",
    fontWeight: "600",
    alignSelf: "center",
    textAlign: "center",
    marginTop: 20,
    width,
  },
});

export default NotificationsScreen;
