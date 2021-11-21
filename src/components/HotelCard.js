import { Component } from "react";
import { Link } from "react-router-dom";
import Haifa from '../data/haifa.json'

class HotelsCard extends Component{
  render(){
    return(
        <div className={'h-card'}>
            <h2>{this.props.name}</h2>
            <p>
                {this.props.street} / {this.props.houseNum}
            </p>
        </div>
    )
  }
}

export default HotelsCard;
