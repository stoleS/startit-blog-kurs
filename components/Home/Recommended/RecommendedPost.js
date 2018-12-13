import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class RecommendedPost extends Component {
  render() {
    return (
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.8}>
        <View style={styles.recommended}>
          <Image style={styles.recommendedImg} source={this.props.imgURL} />
          <View style={styles.recommendedDescription}>
            <Text style={{ fontFamily: "raleway", color: "silver" }}>
              MUZIKA
            </Text>
            <Text style={styles.recommendedTitle}>
              Lorem ipsum dolor sit amet
            </Text>
            <Text style={{ fontFamily: "raleway", color: "white" }}>
              Plicabo veritatis adipisci, consectetur ipsam cupiditate mollitia
              odit earum impedit repellat quae fugit ex voluptatum qui dicta...
            </Text>
            <Text style={{ fontFamily: "raleway", color: "silver" }}>
              Predrag Stošić, 11.04.2018.
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  recommended: {
    height: height / 2,
    width: width - 150,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30
  },
  recommendedImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    borderRadius: 4
  },
  recommendedDescription: {
    height: height / 2,
    position: "absolute",
    padding: 20,
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 4
  },
  recommendedTitle: {
    fontSize: 32,
    fontFamily: "roboto-slab",
    color: "white"
  }
});
