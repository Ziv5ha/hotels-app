import { Component } from "react";
import { Link } from "react-router-dom";
import Haifa from "../data/haifa.json";
import HotelsCard from "./HotelCard";
import "../styles/gallary.css";

class HotelsGallery extends Component {
  render() {
    const hotels = Haifa.map(({ שם, בית, רחוב }, index) => {
      const url = שם.replaceAll(" ", "-");
      return (
        <Link to={`/${url}`} key={index}>
          <HotelsCard name={שם} />
        </Link>
      );
    });
    return <div className="gallary">{hotels}</div>;
  }
}

export default HotelsGallery;
