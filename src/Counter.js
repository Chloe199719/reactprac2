import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    console.log(`Constructor`);
    super(props);
    this.state = {
      counter: 0,
    };
    this.incremenet = () => this.setState({ counter: this.state.counter + 1 });
    this.decremenet = () => this.setState({ counter: this.state.counter - 1 });
  }
  componentDidMount() {
    console.log(`test`);
    console.log(`-------------------------`);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log(`Dont Render`);
      return false;
    }
    console.log(`Render Update`);
    return true;
  }
  render() {
    console.log(`Render`);
    return (
      <div>
        <button onClick={this.incremenet}>incremenet</button>
        <button onClick={this.decremenet}>decremenet</button>
        <div className="counter">Counter: {this.state.counter}</div>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`Component did Update`);
    console.log(`==========================`);
  }
  componentWillUnmount() {
    console.log(`Component will unmount`);
  }
}
