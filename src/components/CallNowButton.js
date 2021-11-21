import { Component } from "react";

class CallNowButton extends Component {
  render() {
    return <button>Call {this.props.name}</button>;
  }
}

export default CallNowButton;
