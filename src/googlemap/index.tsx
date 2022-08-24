import React, { useState, useEffect } from "react";
export const LoadMap = () => {
  type home = {
    lat: number;
    lng: number;
  };
  type GoogleMapType = google.maps.Map;
  type GoogleMap = google.maps.LatLng;
  let [latitude, setLatitude] = useState(0);
  let [longitude, setLongitude] = useState(0);
 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        console.log(latitude, longitude);
      },
      () => console.log("location not found")
    );
  }, []);
  const randomPlaces = () => {
    latitude = parseFloat((Math.random() * 100 + 1).toFixed(7));
    longitude = parseFloat((Math.random() * 100 + 1).toFixed(7));
    setLatitude(latitude);
    setLongitude(longitude);
  };
  const goHome = () => {
    initMap()
  };
  const initMap = (): void => {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLDivElement,
      {
        zoom: 8,
        center: { lat: latitude, lng: longitude },
      }
    );
    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
    });
  };

  if (latitude) {
    initMap();
  }
  return (
    <>
      <div id="map"></div>{" "}
      <div className="random">
        <button onClick={randomPlaces}>Random</button>
        <button onClick={initMap}>Home</button>
      </div>
    </>
  );
};
