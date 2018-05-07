import React from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import Photo from "../../components/Photo";

const SearchScreen = props => (
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
      {props.feed &&
        props.feed.map(photo => <Photo {...photo} key={photo.id} />)}
    </View>
  </ScrollView>
);

SearchScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired,
  search: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default SearchScreen;
