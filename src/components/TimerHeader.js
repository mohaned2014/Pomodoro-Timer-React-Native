import React, { Component } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";

class TimerHeader extends Component {
  handleText = () => {
    if (this.props.intervalType == "focus") {
      if (this.props.running === true) {
        return "Happy learning";
      } else if (this.props.running === false) {
        return "Stay Focus Now";
      }
    } else {
      if (this.props.running === true) {
        return "Just Relax :)";
      } else if (this.props.running === false) {
        return "Relax Now";
      }
    }
  };
  render() {
    let displayText = this.handleText();
    return <Text style={styles.textStyle}>{displayText}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 29,
    fontWeight: "500",
    letterSpacing: 1.5,
    fontFamily: Platform.OS == "android" ? "notoserif" : "system"
  }
});
export default TimerHeader;
