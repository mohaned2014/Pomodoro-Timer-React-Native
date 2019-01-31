import React, { Component } from "react";
import Timer from "./Timer";

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.REST_PERIOD = 5;
    this.FOCUS_PERIOD = 25;
    this.state = {
      intervalType: "focus",
      period: this.FOCUS_PERIOD
    };
  }

  handleTimerCompleted = () => {
    if (this.state.intervalType == "focus") {
      this.setState({ intervalType: "rest", period: this.REST_PERIOD });
    } else {
      this.setState({ intervalType: "focus", period: this.FOCUS_PERIOD });
    }
  };
  render() {
    return (
      <Timer
        intervalType={this.state.intervalType}
        Oncomplete={this.handleTimerCompleted}
        period={this.state.period}
      />
    );
  }
}

export default PomodoroTimer;
