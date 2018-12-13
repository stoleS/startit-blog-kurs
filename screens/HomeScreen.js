import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";

import categories from "../categories";

import theater from "../assets/images/theater.jpeg";
import cinema from "../assets/images/cinema.jpeg";
import exhibition from "../assets/images/exhibition.jpeg";
import concert from "../assets/images/concert.jpeg";
import promotion from "../assets/images/promotions.jpg";

import { MonoText } from "../components/StyledText";
import { tabIconDefault } from "../constants/Colors";
import { Dimensions } from "react-native";

import promotions from "../assets/images/promotions.jpg";

const { width, height } = Dimensions.get("window");

import Category from "../components/Home/Categories/Category";
import LatestPost from "../components/Home/LatestPosts/LatestPost";
import PopularPost from "../components/Home/Popular/PopularPost";
import RecommendedPost from "../components/Home/Recommended/RecommendedPost";

const urlPrefix = "https://startit-blog.herokuapp.com/";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.setState({ categories });
    const url = "https://startit-blog.herokuapp.com/api/v1/categories";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ categories: data }));
  }

  render() {
    const { categories } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.categoriesContainer}>
            {/* IZABRANE KATEGORIJE */}
            <Text style={styles.categoryHeader}>Izabrane kategorije:</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.categoriesList}
              contentContainerStyle={styles.contentContainer}
            >
              {categories.map(category => (
                <Category
                  key={category._id}
                  imageURL={
                    urlPrefix + category.thumbnail.slice(0, -4) + "jpeg"
                  }
                  category={category.title}
                  notification={3}
                />
              ))}
            </ScrollView>
          </View>
          {/* NAJNOVIJE */}
          <View style={styles.box}>
            <Text style={styles.header}>Najnovije:</Text>
            <View style={styles.postContainer}>
              <LatestPost />
              <LatestPost />
              <LatestPost />
            </View>
          </View>
          {/* POPULARNO */}
          <View style={{ flex: 1, backgroundColor: "#eee" }}>
            <Text style={{ ...styles.header, marginTop: 20 }}>Popularno:</Text>
            <View style={styles.popularContainer}>
              <PopularPost />
              <PopularPost />
              <PopularPost />
              <PopularPost />
            </View>
          </View>
          {/* PREPORUČENO */}
          <View style={styles.box}>
            <Text style={styles.header}>Preporučeno:</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
            >
              <RecommendedPost imgURL={exhibition} />
              <RecommendedPost imgURL={exhibition} />
              <RecommendedPost imgURL={exhibition} />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}

const styles = StyleSheet.create({
  popularContainer: {
    backgroundColor: "#eee",
    flexDirection: "row",
    padding: 20,
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  postContainer: {
    paddingBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    fontFamily: "raleway"
  },
  header: {
    fontSize: 24,
    marginLeft: 20,
    fontFamily: "roboto-slab"
  },
  contentContainer: {
    paddingLeft: 10,
    paddingRight: 20
  },
  categoriesContainer: {
    height: 230,
    backgroundColor: "#eee"
  },
  categoriesList: {
    paddingTop: 10,
    backgroundColor: "#eee"
  },
  categoryHeader: {
    fontSize: 24,
    fontFamily: "roboto-slab",
    paddingTop: 40,
    paddingHorizontal: 20
  },
  box: {
    flex: 1,
    marginTop: 20
  }
});
