import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import PomodoroTimer from "./src/components/pomodoroTimer";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <PomodoroTimer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E84C3D"
    // alignItems: "center",
    // justifyContent: "center"
  }
});
