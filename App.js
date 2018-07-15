import React, { Component } from "react";
import { StyleSheet, Platform } from "react-native";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import { MainPage } from "./components/mainPage";
import { PeaksInfoScreen } from "./components/peaksInfoScreen";
import { PeaksDetailsScreen } from "./components/peaksDetailsScreen";
import { MapScreen } from "./components/mapScreen";
import { SosScreen } from "./components/sosScreen";
import { ProfileScreen } from "./components/profileScreen";
import { FindEvent } from "./components/findEventScreen";
import { StartEvent } from "./components/startEvent";
import { EventDetails } from "./components/eventDetails";
import { WeatherScreen } from "./components/weatherScreen";
import { WeatherDetails } from "./components/weatherDetails";

class Home extends Component {
  render() {
    return (
      <MainPage
        style={styles.MainContainer}
        navigation={this.props.navigation}
      />
    );
  }
}

const RootStack = createStackNavigator({
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Главная",
      headerLeft: (
        <Icon
          onPress={() => navigation.toggleDrawer()}
          containerStyle={styles.iconContainer}
          iconStyle={styles.icon}
          name="menu"
          type="Entypo"
        />
      ),

      headerStyle: {
        backgroundColor: "#8ac542"
      },
      headerTintColor: "#fff"
    })
  },
  PeaksInfo: {
    screen: PeaksInfoScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Урочища и пики",
      headerStyle: {
        backgroundColor: "#8ac542"
      },
      headerTintColor: "#fff"
    })
  },
  PeaksDetails: {
    screen: PeaksDetailsScreen
  },
  Map: {
    screen: MapScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Карта",
      headerStyle: {
        backgroundColor: "#8ac542"
      },
      headerTintColor: "#fff"
    })
  },
  Sos: {
    screen: SosScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Вызвать помощь",
      headerStyle: {
        backgroundColor: "#8ac542"
      },
      headerTintColor: "#fff"
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Профиль",
      headerStyle: {
        backgroundColor: "#8ac542"
      },
      headerTintColor: "#fff"
    })
  },
  FindEvent: {
    screen: FindEvent,
    navigationOptions: ({ navigation }) => ({
      title: "Присоединиться",
      headerStyle: {
        backgroundColor: "#8ac542"
      },
      headerTintColor: "#fff"
    })
  },
  StartEvent: {
    screen: StartEvent,
    navigationOptions: ({ navigation }) => ({
      title: "Создать",
      headerStyle: {
        backgroundColor: "#8ac542"
      },
      headerTintColor: "#fff"
    })
  },
  Event: {
    screen: EventDetails,
    navigationOptions: ({ navigation }) => ({
      title: "Ивент",
      headerStyle: {
        backgroundColor: "#8ac542"
      },
      headerTintColor: "#fff"
    })
  },
  Weather: {
    screen: WeatherScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Погода",
      headerStyle: {
        backgroundColor: "#8ac542"
      },
      headerTintColor: "#fff"
    })
  },
  WeatherDetails: {
    screen: WeatherDetails,
    navigationOptions: ({ navigation }) => ({
      title: "Погода",
      headerStyle: {
        backgroundColor: "#8ac542"
      },
      headerTintColor: "#fff"
    })
  },
});

export default (MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: RootStack,
    navigationOptions: () => ({
      title: "Главная"
    })
  }
}));

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  icon: {
    width: 25,
    height: 25,
    color: "white"
  },
  iconContainer: {
    backgroundColor: "#8ac542",
    marginLeft: 20
  }
});
