import { Component } from "react";
import Haifa from '../data/haifa.json'
import HotelsCard from "./HotelCard";

class HotelsGallery extends Component{
  render(){
      const hotels = Haifa.map(({שם, בית, רחוב}, index) => {
          return(<HotelsCard name={שם} houseNum={בית} street={רחוב} key={index}/>)
      })
    return(
      <div>
          {hotels}
      </div>
    )
  }
}

export default HotelsGallery;
