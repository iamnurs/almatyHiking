import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { MapView } from "expo";
import { SearchBar } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    top: 0,
    borderBottomWidth: 0,
    position: "absolute",
    width: Dimensions.get("window").width,
    backgroundColor:'transparent'
  }
});

const ASPECT_RATIO =
  Dimensions.get("window").width / Dimensions.get("window").height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapScreen extends React.Component {
  state = {
    location: { name: "", latitude: "", longitude: "" },
    yourLocation: { coords: { latitude: "", longitude: "" } }
  };

  componentDidMount() {
    const yourLocation = this.props.navigation.getParam("yourLocation");
    const destination = this.props.navigation.getParam("destination");
    if (yourLocation === "") {
      alert("Геолокации не включены, перезапустите приложение");
      this.props.navigation.goBack();
    } else {
      if (destination !== undefined) {
        this.setState({
          location: destination
        });
      }
      this.setState({
        yourLocation
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: Number(this.state.yourLocation.coords.latitude),
            longitude: Number(this.state.yourLocation.coords.longitude),
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: Number(this.state.yourLocation.coords.latitude),
              longitude: Number(this.state.yourLocation.coords.longitude),
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
            }}
            title="Вы"
            description="Ваше местоположение"
          />
          {this.state.location.name !== "" && (
            <MapView.Marker
              coordinate={{
                latitude: Number(this.state.location.latitude),
                longitude: Number(this.state.location.longitude),
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
              }}
              title={this.state.location.name}
              description={this.state.location.name}
            />
          )}
        </MapView>
        {this.state.location.name === "" && (
          <SearchBar
            lightTheme
            round
            disabled
            containerStyle={styles.search}
            icon={{ type: "font-awesome", name: "search" }}
            placeholder="Найти..."
          />
        )}
      </View>
    );
  }
}
