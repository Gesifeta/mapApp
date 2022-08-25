import React, { useEffect, useState } from "react";

import "./App.css";
import "./googlemap/map.css";
import { LoadMap } from "./googlemap/home";
import { loadMapApi } from "./googlemap/GoogleMapsAPIUrl";

function App() {
  const [scriptLoaded, setScriploaded] = useState(false);
  // initialize map on page load
  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener("load", () => {
      setScriploaded(true);
                  },true);
  }, []);
  return scriptLoaded?(<><LoadMap /> </> ):(<div className="preloader"></div>)
}
export default App;
