import { Component } from "react";
import HotelsGallery from "./components/HotelsGallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelsPage from "./components/HotelPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HotelsGallery key="gallary" />} />
          <Route path={`/:hotelName`} element={<HotelsPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
