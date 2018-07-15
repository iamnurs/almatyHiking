import React, { Component } from "react";
import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    // backgroundColor: '#FFF',
    marginBottom: 10,
    marginTop: 45
  },
  socialIcon: {
    marginLeft: 14,
    marginRight: 14
  },
  socialRow: {
    flexDirection: "row"
  },
  userBioRow: {
    marginLeft: 40,
    marginRight: 40
  },
  userBioText: {
    color: "gray",
    fontSize: 13.5,
    textAlign: "center"
  },
  userImage: {
    borderRadius: 50,
    height: 100,
    marginBottom: 10,
    width: 100
  },
  userNameRow: {
    marginBottom: 10
  },
  userNameText: {
    color: "#5B5A5A",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  userRow: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 12
  }
});

class Event extends Component {
  static navigationOptions = {
    // title: this.props.navigation.getParam('event').name,
    title: "Детали",

    headerStyle: {
      backgroundColor: "#6ED442"
    },
    headerTintColor: "#fff"
  };
  static navigationOptions = {
    title: "Ивент",

    headerStyle: {
      backgroundColor: "#6ED442"
    },
    headerTintColor: "#fff"
  };
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
  };

  static defaultProps = {
    containerStyle: {}
  };

  onPressPlace = () => {
    console.log("place");
  };

  render() {
    const { navigation } = this.props;
    const event = navigation.getParam("event");
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.userImage}
          source={{
            uri: event.avatar_url
          }}
        />
        <View style={styles.userRow}>
          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>{event.activist}</Text>
          </View>
          <View style={styles.userBioRow}>
            <Text style={styles.userBioText}>Что: {event.name}</Text>
            <Text style={styles.userBioText}>Кто: {event.activist}</Text>
            <Text style={styles.userBioText}>Где: {event.place}</Text>
            <Text style={styles.userBioText}>Когда: {event.time}</Text>
            <Text style={styles.userBioText}>
              А еще: {event.peopleAmount} людей{" "}
            </Text>
            <Text style={styles.userBioText}>Контакты: {event.tel}</Text>
          </View>
        </View>
        <View style={styles.socialRow}>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#3B5A98"
              name="facebook-with-circle"
              onPress={() => console.log("facebook")}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#56ACEE"
              name="twitter-with-circle"
              onPress={() => console.log("twitter")}
            />
          </View>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#DD4C39"
              name="google--with-circle"
              onPress={() => console.log("google")}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Event;
