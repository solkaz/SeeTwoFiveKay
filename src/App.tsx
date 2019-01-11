import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

interface Props {}

interface State {
  text: string;
}

export default class App extends Component<Props, State> {
  public state = {
    text: "",
  };

  public render() {
    const { text } = this.state;
    return (
      <View testID="welcome">
        <Text>SeeTwoFiveKay</Text>
      </View>
    );
  }

  private displayAlert = () => Alert.alert("Hello World!");

  private updateText = (text: string) => this.setState({ text });

  private reverseText = (text: string): string => {
    return text
      .split("")
      .reverse()
      .join("");
  };
}
