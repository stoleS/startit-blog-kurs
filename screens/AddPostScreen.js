import React from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  Picker,
  View,
  TouchableOpacity,
  Alert
} from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      author: "Predrag Stošić",
      categories: [
        "Filmovi",
        "Predstave",
        "Izložbe",
        "Promocije",
        "Fotografija"
      ],
      category: "Filmovi"
    };
  }
  static navigationOptions = {
    title: "Dodaj"
  };

  sendPost = () => {
    const { title, body, author, category } = this.state;
    if (title.length === 0) {
      Alert.alert("Title is required");
      return;
    }
    if (body.length === 0) {
      Alert.alert("Body is required");
      return;
    }
    const url = "http://10.118.84.159:3000/api/v1/posts";

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        body,
        author,
        category
      })
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Naslov:</Text>
        <TextInput
          onChangeText={val => this.setState({ title: val })}
          style={styles.title}
        />
        <Text style={styles.heading}>Tekst:</Text>
        <TextInput
          onChangeText={val => this.setState({ body: val })}
          multiline={true}
          textAlignVertical="top"
          style={styles.body}
        />
        <Text style={{ ...styles.heading, marginBottom: 10 }}>Kategorija:</Text>
        <View style={styles.category}>
          <Picker
            style={styles.category}
            itemStyle={{ fontFamily: "raleway" }}
            selectedValue={this.state.category}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ category: itemValue })
            }
          >
            <Picker.Item label="Filmovi" value="Filmovi" />
            <Picker.Item label="Predstave" value="Predstave" />
            <Picker.Item label="Izložbe" value="Izložbe" />
          </Picker>
        </View>
        <TouchableOpacity
          onPress={this.sendPost}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Objavi</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    height: 50,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderColor: "#ccc",
    marginBottom: 10,
    fontFamily: "raleway"
  },
  heading: {
    fontSize: 18,
    fontFamily: "roboto-slab"
  },
  body: {
    height: height / 3,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    padding: 10,
    fontFamily: "raleway"
  },
  category: {
    borderWidth: 1,
    borderColor: "#ccc"
  },
  button: {
    height: 50,
    backgroundColor: "#2f95dc",
    alignSelf: "stretch",
    marginTop: 20,
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    alignSelf: "center",
    fontFamily: "raleway"
  }
});
