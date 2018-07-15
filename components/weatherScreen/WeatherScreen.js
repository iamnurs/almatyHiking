import React, { Component } from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import * as css from '../WeatherStyles';
import { listData } from '../WeatherData';

export default class Weather extends React.Component {
  static navigationOptions = {
    title: 'Прогноз погоды',

    headerStyle: {
      backgroundColor: '#6ED442',//8ac542
    },
    headerTintColor: '#fff',
  };

  keyExtractor = (item, index) => item.id;

  renderRow = ({ item }) => {
    const time = `${item.weeklyForecast.day}`;
    const place = `${item.place}`;
    const temp = css.addDegreesToEnd(item.weeklyForecast.temp);
    const { iconName, iconFont, iconColor } = item.icon;

    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('WeatherDetails',{weather:item})}>
        <View style={css.home_screen_list.row}>
          <View style={css.home_screen_list.row_cell_timeplace}>
            <Text style={css.home_screen_list.row_time}>{time}</Text>
            <Text style={css.home_screen_list.row_place}>{place}</Text>
          </View>
          <Icon
            color={iconColor}
            size={css.values.small_icon_size}
            name={iconName}
            type={iconFont}
          />
          <Text style={css.home_screen_list.row_cell_temp}>{temp}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={css.home_screen.v_container}>
        <FlatList
          style={css.home_screen_list.container}
          data={listData}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderRow}
        />
      </View>
    );
  }
}