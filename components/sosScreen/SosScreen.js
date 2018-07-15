import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { TextInput } from "react-native-paper";

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    flex: 1,
    alignItems: "center"
  },
  textInput: {
    marginTop: 7,
    width: Dimensions.get("window").width - 15,
    alignSelf: "center",
  },
  butContainer: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    alignSelf: "center",
    fontSize: 15,
    color: "white"
  },
  margin: {
    width: 15
  }
});

class SosScreen extends Component {
  state = {
    text: "",
    number: ""
  };

  render() {
    return (
      <View styles={styles.MainContainer}>
        <TextInput
          style={styles.textInput}
          label="Сообщение"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
        <TextInput
          style={styles.textInput}
          label="Количество человек"
          value={this.state.number}
          onChangeText={text => this.setState({ number: text })}
        />
        <View style={styles.butContainer}>
          <TouchableOpacity style={styles.button}
          onPress={() =>
            alert("Ваше сообщение отправлено близжайщим путешественникам")
          }>
            <Text style={styles.text}>Попутчики</Text>
          </TouchableOpacity>
          <View style={styles.margin}/>
          <TouchableOpacity style={styles.button}
          onPress={() =>
            alert("Ваше сообщение отправлено МЧС")
          }>
            <Text style={styles.text}>МЧС</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SosScreen;
