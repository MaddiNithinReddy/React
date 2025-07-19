import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';

function Home() {
  const initialState = { pickup: "", drop: "" };
  const [location, setLocation] = useState(initialState);
  const [autocomplete, setAutocomplete] = useState(null);
  const [dropAutocomplete, setDropAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setLocation({ ...location, pickup: place.formatted_address || place.name });
    }
  };

  const onDropLoad = (autoC) => setDropAutocomplete(autoC);
  const onDropPlaceChanged = () => {
    if (dropAutocomplete !== null) {
      const place = dropAutocomplete.getPlace();
      setLocation({ ...location, drop: place.formatted_address || place.name });
    }
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-between align-items-center ms-5 bg-light shadow-sm" style={{ height: "90px" }}>
        <div className="fw-bold fs-4 px-3 py-2 rounded-5 ms-5" style={{ backgroundColor: "#f9f94d" }}>
          LuggageMover
        </div>
        <div className="d-flex gap-3 me-5">
          <Link to="/about" className="link-box">About Us</Link>
          <Link to="/contact" className="link-box">Contact Us</Link>
          <Link to="/profile" className="link-box">Profile</Link>
        </div>
      </div>

      <div
        className="d-flex justify-content-center p-5"
        style={{
          backgroundImage: 'url("https://media.istockphoto.com/id/886639266/vector/abstract-light-blur-and-bokeh-effect-background-vector-defocused-sun-shine-or-sparkling.jpg?s=612x612&w=0&k=20&c=9JI3YFsbZctQSw1KE7qWTgC_bQhew7qQZ0AxJ17xXCY=")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: "600px"
        }}
      >
        <form className="d-flex flex-column gap-4 p-5 mt-5 bg-white bg-opacity-75 rounded-4 shadow-lg" style={{ width: "600px" }}>
          <h1 className="fw-bold fs-1 text-center mb-3">Transport With Us</h1>

          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              type="text"
              className="form-control form-control-lg rounded-4 p-3"
              placeholder="Enter Pickup Location"
              value={location.pickup}
              onChange={e => setLocation({ ...location, pickup: e.target.value })}
            />
          </Autocomplete>

          <Autocomplete onLoad={onDropLoad} onPlaceChanged={onDropPlaceChanged}>
            <input
              type="text"
              className="form-control form-control-lg rounded-4 p-3"
              placeholder="Enter Drop Location"
              value={location.drop}
              onChange={e => setLocation({ ...location, drop: e.target.value })}
            />
          </Autocomplete>

          <button type="submit" className="btn btn-primary btn-lg rounded-4 p-3">Book Now</button>
        </form>
      </div>

      <div className="p-4">
        <h1 className="fw-bold fs-1 mb-4">Choose Your Vehicle Type</h1>
        <div className="d-flex flex-row justify-content-between">
          <Link className="d-flex flex-column align-items-center text-center rounded-4 p-3 text-decoration-none text-dark">
            <img
              className="rounded-4 mb-2"
              style={{ width: "300px", height: "200px", objectFit: "cover" }}
              src="/auto.png"
              alt="Auto"
            />
            <h3 className="fw-bold">Auto</h3>
          </Link>

          <Link className="d-flex flex-column align-items-center text-center rounded-4 p-3 text-decoration-none text-dark">
            <img
              className="rounded-4 mb-2"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              src="/tataace.png"
              alt="Mini Truck"
            />
            <h3 className="fw-bold">Mini Truck</h3>
          </Link>

          <Link className="d-flex flex-column align-items-center text-center rounded-4 p-3 text-decoration-none text-dark">
            <img
              className="rounded-4 mb-2"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              src="/dcm.png"
              alt="Truck"
            />
            <h3 className="fw-bold">Truck</h3>
          </Link>

          <Link className="d-flex flex-column align-items-center text-center rounded-4 text-decoration-none text-dark">
            <img
              className="rounded-4 mb-2"
              style={{ width: "300px", height: "200px", objectFit: "cover" }}
              src="/lorry.png"
              alt="Heavy Truck"
            />
            <h3 className="fw-bold">Heavy Truck</h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
