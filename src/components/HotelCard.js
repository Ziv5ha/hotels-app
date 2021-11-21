import { Component } from "react";
import "../styles/card.css";

class HotelsCard extends Component {
  render() {
    return (
      <div className={"h-card"}>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default HotelsCard;
