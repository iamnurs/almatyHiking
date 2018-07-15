import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import * as css from '../WeatherStyles';

export default class WeatherDetails extends React.Component {
  static navigationOptions = {
    title: 'Прогноз погоды',

    headerStyle: {
      backgroundColor: '#6ED442', //8ac542
    },
    headerTintColor: '#fff',
  };
  renderRow({ item }) {
    let { key, time, icon, temp } = item;

    const { iconName, iconFont, iconColor } = icon;

    temp = css.addDegreesToEnd(temp);

    return (
      <View style={css.details_screen_1.list_row}>
        <Text style={css.details_screen_1.list_row_time}>{item.time}</Text>
        <Icon
          color={iconColor}
          size={css.values.tiny_icon_size}
          name={iconName}
          type={iconFont}
        />
        <Text style={css.details_screen_1.list_row_temp}>
          {item.temp}
        </Text>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const weather = navigation.getParam('weather');

    const { iconName, iconFont, iconColor } = weather.icon;
    const temp = css.addDegreesToEnd(weather.currentTemp);

    return (
      <View style={css.details_screen_1.v_container}>
        <Text style={css.details_screen_1.place}>{weather.place}</Text>
        <Text style={css.details_screen_1.description}>
          {weather.description}
        </Text>
        <Icon
          color={iconColor}
          size={css.values.large_icon_size}
          name={iconName}
          type={iconFont}
        />
        <Text style={css.details_screen_1.current_temp}>
          {weather.currentTemp}
        </Text>
        <View style={css.details_screen_1.separator} />
        <FlatList
          style={css.details_screen_1.list_container}
          data={weather.dailyForecast}
          renderItem={this.renderRow}
        />
      </View>
    );
  }
}
