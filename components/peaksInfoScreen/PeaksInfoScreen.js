import React, { Component } from "react";
import { StyleSheet, Platform, Text, ScrollView } from "react-native";
import { Icon, Card, Button } from "react-native-elements";

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  text: {
    marginBottom: 10,
    fontSize: 15
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  image: {
    marginLeft: 3,
    marginRight: 3
  }
});

class PeaksInfoScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.MainContainer}>
        <Card
          title="Кок Жайлау"
          titleStyle={styles.title}
          imageStyle={styles.image}
          image={require("../../assets/k-zhailau.jpg")}
        >
          <Text style={styles.text}>Высота: 2100 м</Text>
          <Button
            backgroundColor="#f36c60"
            fontFamily="serif"
            buttonStyle={styles.button}
            title="ПОСМОТРЕТЬ"
            onPress={() =>
              this.props.navigation.navigate("PeaksDetails", {
                title: "kZhailau",
                name: "Кок Жайлау",
                yourLocation: this.props.navigation.getParam("location")
              })
            }
          />
        </Card>
        <Card
          title="Три Брата"
          titleStyle={styles.title}
          imageStyle={styles.image}
          image={require("../../assets/tri-brata.jpg")}
        >
          <Text style={styles.text}>Высота: 2860 м</Text>
          <Button
            backgroundColor="#f36c60"
            fontFamily="serif"
            buttonStyle={styles.button}
            title="ПОСМОТРЕТЬ"
            onPress={() =>
              this.props.navigation.navigate("PeaksDetails", {
                title: "triBrata",
                name: "Три Брата",
                yourLocation: this.props.navigation.getParam("location")
              })
            }
          />
        </Card>
        <Card
          title="Кумбель"
          titleStyle={styles.title}
          imageStyle={styles.image}
          image={require("../../assets/kumbel.jpg")}
        >
          <Text style={styles.text}>Высота: 3600 м</Text>
          <Button
            backgroundColor="#f36c60"
            fontFamily="serif"
            buttonStyle={styles.button}
            title="ПОСМОТРЕТЬ"
            onPress={() =>
              this.props.navigation.navigate("PeaksDetails", {
                title: "kumbel",
                name: "Кумбель",
                yourLocation: this.props.navigation.getParam("location")
              })
            }
          />
        </Card>
      </ScrollView>
    );
  }
}

export default PeaksInfoScreen;
