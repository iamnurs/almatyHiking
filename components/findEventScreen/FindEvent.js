import React, { Component } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import ActionButton from 'react-native-action-button';
import { List, ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';

const list = [
  {
    activist: 'Назерке',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Альпинист',
    name:'Путешествие в горы',
    time:'Следующие выходные, 8:00',
    place:'Кумбел',
    tel:'87710001122',
    peopleAmount:10,
    bio:'Lorem Ipsum'
  },
  {
    activist: 'Назерке',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Альпинист',
    name:'Путешествие в горы',
    time:'Следующие выходные, 8:00',
    place:'Кумбел',
    tel:'87710001122',
    peopleAmount:10,
    bio:'Lorem Ipsum'
  },
];

export default class FindEvent extends React.Component {
  static navigationOptions = {
    title: 'Найти попутника',

    headerStyle: {
      backgroundColor: '#6ED442',
    },
    headerTintColor: '#fff',
  };
  keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => {
    return (
      <ListItem
        roundAvatar
        avatar={{ uri: item.avatar_url }}
        key={item.id}
        title={item.activist}
        subtitle={(item.name, item.time, item.place)}
        rightIcon={{
          name: 'add',
          color: '#20b11d',
        }}
        onPressRightIcon={() => {
          alert(`Поздравляем! Вы нашли себе попутника ${item.activist}`);
        }}
        onPress={() => {
          this.props.navigation.navigate('Event',{event:item});
        }}
      />
    );
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ justifyItems: 'center', justifyContents: 'center' }}>
        <List>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
          />
        </List>
      </View>
    );
  }
}
