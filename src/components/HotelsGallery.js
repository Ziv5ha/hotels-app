import { Component } from "react";
import { Link } from "react-router-dom";
import Haifa from "../data/haifa.json";
import HotelsCard from "./HotelCard";

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
    return <div>{hotels}</div>;
  }
}

export default HotelsGallery;
