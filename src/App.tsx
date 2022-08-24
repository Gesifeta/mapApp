import React, { useEffect, useState } from 'react'
// import Map from './map/map';
import './App.css';
import "./map/map.css"
import { loadMapApi } from './map/GoogleMapsUtils';
import { LoadMap } from './googlemap';
function App() {
  const [scriptLoaded,setScriploaded]=useState(false);
  
  useEffect(()=>{
    const googleMapScript= loadMapApi();

    googleMapScript.addEventListener('load',()=>{
      setScriploaded(true)
    })
  },[])


  return (
    <div className="App"> 
    <LoadMap/>
    {/* {scriptLoaded&&(<Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true}/> )} */}
  
    </div> 
  );
}

export default App;
