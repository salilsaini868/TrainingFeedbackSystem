import * as React from 'react';

// tslint:disable-next-line:no-any
export default class Clock extends React.Component<any, any>  {
  // tslint:disable-next-line:no-any
  timerID: any;
  // tslint:disable-next-line:no-any
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <p>{this.state.date.toLocaleTimeString()}</p>
    );
  }
}
