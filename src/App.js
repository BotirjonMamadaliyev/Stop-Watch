import React from "react";

class App extends React.Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    btnDisabled: false,
    interval: "",
    intervalsStorage: [],
  };
  startClicked = () => {
    this.setState({
      btnDisabled: true,
    });
    let timer = setInterval(() => {
      const { second, minute, hour } = this.state;
      if (second === 59) {
        if (minute === 59) {
          this.setState({
            second: 0,
            minute: 0,
            hour: hour + 1,
          });
        } else {
          this.setState({
            second: 0,
            minute: minute + 1,
          });
        }
      } else {
        this.setState({ second: second + 1 });
      }
    }, 1000);
    this.setState({
      interval: timer,
    });
  };
  stopClicked = () => {
    clearInterval(this.state.interval);
    this.setState({
      btnDisabled: false,
    });
  };
  intervalClicked = () => {
    const { hour, minute, second, intervalsStorage } = this.state;
    intervalsStorage.push(`${hour}:${minute}:${second}`);
    this.setState({ intervalsStorage });
  };
  clearClicked = () => {
    this.stopClicked();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      intervalsStorage: [],
    });
  };
  render() {
    const { hour, minute, second, btnDisabled, intervalsStorage } = this.state;
    return (
      <div>
        <div className="timer-container">
          <h1 className="mb-4">
            <span>Online</span> Stopwatch
          </h1>
          <div className="timer-col">
            <p className="timer-hours time">{hour}</p>
            <p className="timer-label">Hours</p>
          </div>
          <div className="timer-col">
            <p className="timer-minutes time">{minute}</p>
            <p className="timer-label">Minutes</p>
          </div>
          <div className="timer-col">
            <p className="timer-secondes time">{second}</p>
            <p className="timer-label">ClSecondes</p>
          </div>
        </div>
        <div className="timer-container text-center">
          <div className="timer-btn">
            <button
              className="btn btn-success"
              onClick={this.startClicked}
              disabled={btnDisabled}
            >
              Start
            </button>
          </div>
          <div className="timer-btn">
            <button className="btn btn-danger" onClick={this.stopClicked}>
              Stop
            </button>
          </div>
          <div className="timer-btn">
            <button
              className="btn btn-secondary"
              onClick={this.intervalClicked}
            >
              Interval
            </button>
          </div>
          <div className="timer-btn">
            <button className="btn btn-warning" onClick={this.clearClicked}>
              Clear
            </button>
          </div>
        </div>
        <div className="timer-container-intervals text-center">
          {intervalsStorage.map((item, index) => (
            <p>
            📍 {index + 1}.    { item}  <span className="split">Split</span> 
            </p>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
