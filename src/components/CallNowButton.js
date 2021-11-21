import { Component } from "react";
import "../styles/call.css";

class CallNowButton extends Component {
  render() {
    return <button>Call {this.props.name}</button>;
  }
}

export default CallNowButton;
