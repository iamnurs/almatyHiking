import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image
} from "react-native";
import { Button, Divider } from "react-native-paper";
import { TextField } from "react-native-material-textfield";
import React from "react";

export default class StartEvent extends React.Component {
  state = {
    event: "",
    time: "",
    place: '',
    number: '',
    disabled: true
  };

  handleLogin = () => {
    alert('Мероприятие успешно создано')
  };

  render() {
    let disabled = true;
    let error = "";
    return (
      <View>
        <View
          style={{
            margin: 20,
            justifyContent: "center"
          }}
        >
          <TextField
            label="Название мероприятия"
            tintColor={"#6ED442"}
            baseColor={"#6ED442"}
            underlineColor="#6ED442"
            value={this.state.event}
            onChangeText={text => this.setState({event: text})}
          />
          <TextField
            label="Время"
            tintColor={"#6ED442"}
            baseColor={"#6ED442"}
            underlineColor="#6ED442"
            value={this.state.time}
            onChangeText={text => this.setState({time: text})}
          />
          <TextField
            label="Место"
            tintColor={"#6ED442"}
            baseColor={"#6ED442"}
            underlineColor="#6ED442"
            value={this.state.place}
            onChangeText={text => this.setState({place: text})}
          />
          <TextField
            label="Количество людей"
            tintColor={"#6ED442"}
            baseColor={"#6ED442"}
            underlineColor="#6ED442"
            value={this.state.number}
            onChangeText={text => this.setState({number: text})}
          />
          <Button
            raised
            color="#6ED442"
            onPress={() => this.handleLogin()}
          >
            Создать
          </Button>
        </View>
      </View>
    );
  }
}
