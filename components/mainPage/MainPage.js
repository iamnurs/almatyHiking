import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert
} from "react-native";
import { Permissions, Location, IntentLauncherAndroid } from "expo";
import AwesomeAlert from "react-native-awesome-alerts";

const styles = StyleSheet.create({
  mainStyle: {
    height: 150,
    width: Dimensions.get("window").width
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center"
  },
  mainText: {
    fontSize: 30,
    color: "white",
    marginLeft: 10,
    fontFamily: "serif"
  },
  helpText: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
    fontStyle: "italic",
    fontFamily: "serif",
    marginTop: 30
  },
  viewContainer: {
    height: 80,
    width: Dimensions.get("window").width - 4,
    marginTop: 2,
    marginLeft: 2,
    marginRight: 2,
    flexDirection: "row"
  },
  peaksText: {
    fontSize: 17,
    color: "white",
    fontStyle: "italic",
    fontFamily: "serif",
    alignSelf: "center"
  },
  smallView: {
    flex: 1,
    height: 80,
    justifyContent: "center"
  },
  largeView: {
    flex: 2,
    height: 80,
    justifyContent: "center"
  },
  margin: {
    width: 2
  },
  text: {
    fontSize: 17,
    color: "white",
    fontStyle: "italic",
    fontFamily: "serif",
    alignSelf: "center"
  }
});

class MainPage extends Component {
  state = {
    location: "",
    showAlert: false
  };

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  findEvent = () => {
    this.setState({
      showAlert: false
    });
    this.props.navigation.navigate("FindEvent");
  };
  startEvent = () => {
    this.setState({
      showAlert: false
    });
    this.props.navigation.navigate("StartEvent");
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let info = await Location.getProviderStatusAsync();

    if (info.gpsAvailable) {
      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true
      });
      this.setState({ location });
    } else {
      Alert.alert(
        "Геолокация",
        "Геолокация не включена, пожалуйста, включите для доступа ко всем функциям",
        [
          {
            text: "Отмена",
            onPress: () =>
              alert("Геолокация не включена, некоторые функции не доступны"),
            style: "cancel"
          },
          { text: "OK", onPress: () => this.intentLauncher() }
        ],
        { cancelable: false }
      );
    }
  };

  intentLauncher = async () => {
    await IntentLauncherAndroid.startActivityAsync(
      IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
    );
    let info = await Location.getProviderStatusAsync();
    if (info.gpsAvailable) {
      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true
      });
      this.setState({ location });
    } else {
      alert("GPS не включен, некоторые функции будут не доступны");
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={this.props.style}>
        <ImageBackground
          source={require("../../assets/mainBack.jpg")}
          style={styles.mainStyle}
        >
          <View style={styles.overlay}>
            <Text style={styles.mainText}>ГИД ПО АЛАТАУ</Text>
            <Text style={styles.helpText}>Узнать больше...</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../../assets/peak.jpg")}
          style={styles.viewContainer}
        >
          <TouchableOpacity
            style={styles.overlay}
            onPress={() =>
              this.props.navigation.navigate("PeaksInfo", {
                location: this.state.location
              })
            }
          >
            <Text style={styles.peaksText}>Урочища и Пики</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.viewContainer}>
          <ImageBackground
            source={require("../../assets/map.jpg")}
            style={styles.largeView}
          >
            <TouchableOpacity
              style={styles.overlay}
              onPress={() => {
                this.props.navigation.navigate("Map", {
                  yourLocation: this.state.location
                });
              }}
            >
              <Text style={styles.text}>Карта</Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.margin} />
          <TouchableOpacity
            style={styles.smallView}
            onPress={() =>
              this.props.navigation.navigate("Sos", {
                yourLocation: this.state.location
              })
            }
          >
            <ImageBackground
              source={require("../../assets/sos.jpeg")}
              style={styles.smallView}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewContainer}>
          <ImageBackground
            source={require("../../assets/profile.png")}
            style={styles.smallView}
          >
            <TouchableOpacity
              style={styles.overlay}
              onPress={() =>
                this.props.navigation.navigate("Profile", {
                  yourLocation: this.state.location
                })
              }
            >
              <Text style={styles.text}>Профиль</Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.margin} />
          <ImageBackground
            source={require("../../assets/fellow.jpg")}
            style={styles.largeView}
          >
            <TouchableOpacity style={styles.overlay} onPress={this.showAlert}>
              <Text style={styles.text}>Найти Попутчика</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.viewContainer}>
          <ImageBackground
            source={require("../../assets/weather.jpg")}
            style={styles.largeView}
          >
            <TouchableOpacity
              style={styles.overlay}
              onPress={() =>
                this.props.navigation.navigate("Weather", {
                  yourLocation: this.state.location
                })
              }
            >
              <Text style={styles.text}>Погода</Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.margin} />
          <ImageBackground
            source={require("../../assets/camera.jpg")}
            style={styles.smallView}
          >
            <TouchableOpacity
              style={styles.overlay}
              onPress={() => alert("AR камера будет доступна позднее")}
            >
              <Text style={styles.text}>Камера</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.viewContainer}>
          <ImageBackground
            source={require("../../assets/shop.jpeg")}
            style={styles.smallView}
          >
            <TouchableOpacity
              style={styles.overlay}
              onPress={() =>
                alert("Карта с доступными магазинами будет доступна позднее")
              }
            >
              <Text style={styles.text}>Магазин</Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.margin} />
          <ImageBackground
            source={require("../../assets/news.jpg")}
            style={styles.largeView}
          >
            <TouchableOpacity style={styles.overlay}
            onPress={() =>
              alert("Интересные новости о походах будут доступны позднее")
            }>
              <Text style={styles.text}>Новости</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title="Добавить попутника"
          message="Ищите или создайте ивент сами"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Искать попутника"
          confirmText="Создать ивент"
          confirmButtonColor="#FF5855"
          cancelButtonColor="#00C228"
          onCancelPressed={() => {
            this.findEvent();
          }}
          onConfirmPressed={() => {
            this.startEvent();
          }}
        />
      </ScrollView>
    );
  }
}

export default MainPage;
