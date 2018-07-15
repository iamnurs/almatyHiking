import React, { Component } from "react";
import { StyleSheet, Platform, Dimensions, Image, View } from "react-native";
import { Text, Icon } from "react-native-elements";

const PEAKS = {
  kZhailau: {
    name: "Кок Жайлау",
    image: require("../../assets/k-zhailau.jpg"),
    height: "2100 м",
    distance: "10 км",
    description:
      "Плато «Кок Жайляу» – красивое урочище на территории Иле-Алатауского государственного национального природного парка, расположенное с востока на запад между Малым и Большим Алматинскими ущельями",
    latitude: 43.1422189,
    longitude: 77.0018945
  },
  triBrata: {
    name: "Три Брата",
    image: require("../../assets/tri-brata.jpg"),
    height: "2860 м",
    distance: "13 км",
    description:
      "Вершина «Три Брата» — это часть хребта Кумбель. Особенностью вершины являются три больших скальных образования, стоящих на хребте, в честь них она и называется «Три Брата», братья хорошо просматриваются со стороны подъёма.",
    latitude: 43.1273891,
    longitude: 77.0092038
  },
  kumbel: {
    name: "Кумбель",
    image: require("../../assets/kumbel.jpg"),
    height: "3600 м",
    distance: "15 км",
    description:
      "Пик Кумбель является северной оконечностью отрога Кумбель. Вершина хорошо видна из города, левее панорамы вершин Малоалматинского ущелья. Название переводится как «Сухой хребет».",
    latitude: 43.1273837,
    longitude: 77.0078675
  }
};

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    flex: 1
  },
  text: {
    fontSize: 15
  },
  button: {
    bottom: 5,
    right: 5,
    position: "absolute",
    width: 70,
    height: 70
  },
  image: {
    width: Dimensions.get("window").width,
    height: 200
  },
  barContainer: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5
  },
  numContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  },
  number: {
    fontSize: 23
  },
  description: {
    fontSize: 16,
    margin: 10
  }
});

class PeaksDetailsScreen extends Component {
  state = {
    peak: {}
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
      headerStyle: {
        backgroundColor: "#8ac542"
      },
      headerTintColor: "#fff"
    };
  };

  componentDidMount() {
    const peak = this.props.navigation.getParam("title");
    if (peak === "kZhailau") {
      this.setState({
        peak: PEAKS.kZhailau
      });
    } else if (peak === "triBrata") {
      this.setState({
        peak: PEAKS.triBrata
      });
    } else {
      this.setState({
        peak: PEAKS.kumbel
      });
    }
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Image source={this.state.peak.image} style={styles.image} />
        <View style={styles.barContainer}>
          <View style={styles.numContainer}>
            <Text style={styles.number}>{this.state.peak.height}</Text>
            <Text style={styles.text}>Высота</Text>
          </View>
          <View style={styles.numContainer}>
            <Text style={styles.number}>{this.state.peak.distance}</Text>
            <Text style={styles.text}>Дистанция</Text>
          </View>
        </View>
        <Text style={styles.description}>{this.state.peak.description}</Text>
        <Icon
          reverse
          raised
          name="directions"
          containerStyle={styles.button}
          color="#8ac542"
          onPress={() =>
            this.props.navigation.navigate("Map", {
              yourLocation: this.props.navigation.getParam("yourLocation"),
              destination: this.state.peak
            })
          }
        />
      </View>
    );
  }
}

export default PeaksDetailsScreen;
