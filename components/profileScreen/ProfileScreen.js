import React, { Component } from 'react';
import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 45,
  },
  socialIcon: {
    marginLeft: 14,
    marginRight: 14,
  },
  socialRow: {
    flexDirection: 'row',
  },
  userBioRow: {
    marginLeft: 40,
    marginRight: 40,
  },
  userBioText: {
    color: 'gray',
    fontSize: 13.5,
    textAlign: 'center',
  },
  userImage: {
    borderRadius: 50,
    height: 100,
    marginBottom: 10,
    width: 100,
  },
  userNameRow: {
    marginBottom: 10,
  },
  userNameText: {
    color: '#5B5A5A',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 12,
  },
});

class Profile extends Component {
  static navigationOptions = {
    // title: this.props.navigation.getParam('event').name,
    title: 'Профиль',

    headerStyle: {
      backgroundColor: '#6ED442',
    },
    headerTintColor: '#fff',
  };
  //static propTypes = {
    //avatar_url: PropTypes.string.isRequired,
    //name: PropTypes.string.isRequired,
    //bio: PropTypes.string.isRequired,
    //containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  //};

  static defaultProps = {
    containerStyle: {},
  };

  onPressPlace = () => {
    console.log('place');
  };

  render() {
    const { navigation } = this.props;
    const event = navigation.getParam('event');
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.userImage}
          source={require("../../assets/profile.png")}
        />
        <View style={styles.userRow}>
          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>Nazerke</Text>
          </View>
          <View style={styles.userBioRow}>
            <Text>
            Full description follow later!
            </Text>
            <Text style={styles.userBioText}>Контакты: 8-777-777-77-77</Text>
          </View>
        </View>
        <View style={styles.socialRow}>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#3B5A98"
              name="facebook-with-circle"
              onPress={() => console.log('facebook')}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#56ACEE"
              name="twitter-with-circle"
              onPress={() => console.log('twitter')}
            />
          </View>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#DD4C39"
              name="google--with-circle"
              onPress={() => console.log('google')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
