import { useParams } from "react-router";
import Haifa from "../data/haifa.json";
import CallNowButton from "./CallNowButton";
// import "../styles/hotel-page.css";

function HotelsPage() {
  let params = useParams();
  const name = params.hotelName.replaceAll("-", " ");
  const hotel = Haifa.filter((hotel) => hotel.שם === name)[0];
  return (
    <div className={"h-page"}>
      <h2>{hotel.שם}</h2>
      <p>
        {hotel.רחוב} {hotel.בית}
        <br />
        {hotel.טלפון}
      </p>
      <CallNowButton name={hotel.שם} />
    </div>
  );
}

export default HotelsPage;
