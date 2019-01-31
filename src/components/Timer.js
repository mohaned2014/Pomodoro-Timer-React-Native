import React, { Component } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import TimerHeader from "./TimerHeader";
import TimerDisplay from "./TimerDisplay";
import TimerButtons from "./TimerButtons";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      time: this.props.period * 60
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ running: false, time: nextProps.period * 60 });
  }

  render() {
    return (
      <View style={style.containerStyle}>
        <TimerHeader
          intervalType={this.props.intervalType}
          running={this.state.running}
        />
        <TimerDisplay time={this.state.time} />
        <TimerButtons
          running={this.state.running}
          playClicked={this.handlePlaying}
          resetClicked={this.handleReset}
          pauseClicked={this.handlePause}
        />
      </View>
    );
  }

  componentDidUpdate() {
    if (this.state.running === true && this.state.time == 0) {
      clearInterval(this.timer);
      Vibration.vibrate([1000, 2500, 1000, 2500]);
      this.props.Oncomplete();
    }
  }
  handlePlaying = () => {
    this.setState({ running: true });
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
    }, 1000);
  };
  handlePause = () => {
    clearInterval(this.timer);
    this.setState({ running: false });
  };
  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ running: false, time: this.props.period * 60 });
  };
}

const style = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
    marginTop: "20%",
    flex: 1,
    marginBottom: "10%",
    alignItems: "center"
  }
});

export default Timer;
