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
import SquarePhoto from "../../components/SquarePhoto";

const { width, height } = Dimensions.get("window");

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
      {props.search &&
      props.search.length === 0 &&
      props.searchingBy.length > 1 ? (
        <Text style={styles.notFound}>
          No image found for {props.searchingBy}
        </Text>
      ) : (
        props.search.map(photo => (
          <SquarePhoto key={photo.id} imageURL={photo.file} />
        ))
      )}
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
    //backgroundColor: "white"
    flexDirection: "row",
    flexWrap: "wrap",
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

export default SearchScreen;
