import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default class Category extends Component {
  render() {
    const { notification, imageURL, category } = this.props;
    return (
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.8}>
        <View style={styles.categoryContainer}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: imageURL }} />
            </View>
            <View style={styles.categoryTitle}>
              <Text style={styles.categoryName}>{category}</Text>
            </View>
          </View>
          <View style={styles.notifications}>
            <Text style={styles.notificationText}>{notification}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  categoryContainer: {
    paddingTop: 10,
    paddingRight: 10,
    height: 130,
    width: 160,
    marginLeft: 10
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  imageContainer: {
    flex: 3
  },
  image: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  categoryTitle: {
    flex: 1,
    fontWeight: "700",
    paddingLeft: 10,
    paddingTop: 10
  },
  categoryName: {
    flex: 1,
    fontFamily: "raleway"
  },
  notifications: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(47,149,220,0.7)",
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6
  },
  notificationText: {
    fontWeight: "500",
    color: "white"
  }
});
