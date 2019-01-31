import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
class TimerButtons extends Component {
  state = {};
  render() {
    if (this.props.running === true) {
      return (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={this.props.pauseClicked}>
            <FontAwesome style={styles.textStyle} name="pause" />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.resetClicked}>
            <MaterialCommunityIcons
              style={styles.resetBtnStyle}
              name="square"
            />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={this.props.playClicked}>
          <FontAwesome style={styles.textStyle} name="play" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: "10%",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 70,
    color: "white"
  },
  resetBtnStyle: {
    paddingLeft: "5%",
    color: "white",
    fontSize: 80,
    marginBottom: "4%"
  }
});
export default TimerButtons;
