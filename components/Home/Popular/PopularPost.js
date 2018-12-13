import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

import promotion from "../../../assets/images/promotions.jpg";

const { width, height } = Dimensions.get("window");

export default class PopularPost extends Component {
  render() {
    const { date, category, author, title } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.post}>
          <View style={{ flex: 1 }}>
            <Image style={styles.fullImage} source={promotion} />
          </View>
          <View
            style={{ flex: 1, padding: 10, justifyContent: "space-between" }}
          >
            <Text
              style={{ color: "#6c757d", fontSize: 12, fontFamily: "raleway" }}
            >
              14.2.2018/PREDSTAVE
            </Text>
            <Text style={{ fontSize: 16, fontFamily: "roboto-slab" }}>
              Lorem ipsum dolor sit amet
            </Text>
            <Text
              style={{
                color: "#6c757d",
                fontSize: 12,
                fontFamily: "roboto-slab"
              }}
            >
              Autor: Predrag Stošić
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    width: width / 2 - 30,
    height: height / 4,
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  },
  fullImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4
  }
});
