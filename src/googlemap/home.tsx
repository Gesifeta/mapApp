import React, { useState, useEffect } from "react";

type home = {
  lat: number;
  lng: number;
};
let visited: home[] = [];

export const LoadMap = () => {
  let [defaultLatLng, setDefaultlatLng] = useState<home>({
    lat: 0,
    lng: 0,
  });
  let [homeLatLng, setHomeLatLng] = useState<home>({
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setDefaultlatLng({
          lat: latitude,
          lng: longitude,
        });
        setHomeLatLng({
          lat: latitude,
          lng: longitude,
        });
      },
      () =>
        alert(
          "location not be found, please check if you have restricted location access"
        )
    );
  }, []);
  const randomPlaces = () => {
    const lat = parseFloat((Math.random() * 100 + 1).toFixed(7));
    const lng = parseFloat((Math.random() * 100 + 1).toFixed(7));
    setDefaultlatLng({
      lat: lat,
      lng: lng,
    });
    visited.unshift(defaultLatLng);
  };
  const goHome = () => {
    setDefaultlatLng({
      lat: homeLatLng.lat,
      lng: homeLatLng.lng,
    });
  };
  const initMap = () => {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLDivElement,
      {
        zoom: 4,
        center: { lat: defaultLatLng.lat, lng: defaultLatLng.lng },
      }
    );
    // place markers on current position
     new google.maps.Marker({
      position: { lat: defaultLatLng.lat, lng: defaultLatLng.lng },
      map: map,
    });
  };

  // checking whether default latitude is fetched from geolocation API. Then execute initMap()
  if (defaultLatLng.lat) {
    initMap();
  }
  return (
    <div className="container">
      <div className="map-container">
        <h1>Map Project- By GEMECHU GESIFETA</h1>
        <div id="map">
          <div className="preloader"></div>
        </div>
        <div className="btn">
          <button className="btn-random" onClick={randomPlaces}>
            Random Location
          </button>
          <button className="btn-home" onClick={goHome}>
            My position
          </button>
        </div>

        {/* used to display visited places by looping through an array of objects */}
        <div className="visited">
          <h2>Visited Places</h2>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th>Address</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
              {visited.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: "15px" }}>?? Requires Geocoder API</td>
                  <td>{item.lat}</td>
                  <td>{item.lng}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
