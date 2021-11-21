import { Component } from "react";

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
