import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

import post1 from "../../../assets/images/postImages/post1.jpeg";

const { width, height } = Dimensions.get("window");

export default class LatestPost extends Component {
  render() {
    const { category, title, description, author, date } = this.props;
    return (
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.8}>
        <View style={styles.post}>
          <View style={styles.latestImageContainer}>
            <Image style={styles.latestImage} source={post1} />
          </View>

          <View style={styles.content}>
            <Text style={{ color: "#6c757d", fontFamily: "raleway" }}>
              FILMOVI
            </Text>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Lorem ipsum dolor sit amet, consectetur.
              </Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                Nulla congue aliquet magna, eu malesuada elit sagittis eget.
                Donec magna libero...
              </Text>
            </View>
            <Text
              style={{
                marginTop: 10,
                color: "#6c757d",
                fontFamily: "roboto-slab"
              }}
            >
              Predrag Stošić, 24.14.2018.
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    padding: 20,
    flexDirection: "row"
  },
  latestImageContainer: {
    flex: 2
  },
  latestImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 4
  },
  content: {
    flexDirection: "column",
    flex: 3,
    marginLeft: 20
  },
  descriptionContainer: {
    marginTop: 10
  },
  description: {
    color: "#6c757d",
    fontFamily: "raleway"
  },
  titleContainer: {},
  title: {
    fontSize: 18,
    fontFamily: "roboto-slab"
  }
});
