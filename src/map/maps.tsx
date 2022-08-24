import React, { useRef, useState, useEffect } from "react";
// import {Wrapper,Status} from '@googlemaps/react-wrapper'

// type IMap = {
//   mapType: google.maps.MapTypeId;
//   mapTypeControl?: boolean;
// };
// type GoogleMap = google.maps.Map;
// type GoogleLatLng = google.maps.LatLng;

// const Map: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [lat,setLat]=useState(0)
//   const [lng,setlong]=useState(0)
  
//     const [map, setMap] = useState<GoogleMap>();

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//       const {latitude,longitude}=position.coords;
//       setLat(latitude);
//       setlong(longitude)
//         console.log(lat,lng );
//       },
//       () => {
//         alert("cannot locate your position");
//       }
//     );
   

//   }, []);
//        const startMap=():void=>{
      
//      if(!map){
//       if(lat&&lng){
//              defaultMapStart()
//       }
         
//     }
//   }
 
// useEffect(startMap,[lat])
//   const defaultMapStart = (): void => {
    
//     const defaultAddress = new google.maps.LatLng(lat, lng);
//     console.log(lat,lng)
//     initMap(8, defaultAddress);
//   };

//   const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
//     if (ref.current) {
//       setMap(
//         new google.maps.Map(ref.current, {
//           zoom: zoomLevel,
//           center: address,
//           mapTypeControl: mapTypeControl,
//           streetViewControl: false,
//           zoomControl: true,
//           mapTypeId: mapType,
//         })
//       );
//     }
//   };
 
// const renderMap=(status:Status)=>{
//     return <h1>{status}</h1>
// }

//   return (
//         <div className="map-container">
//       <div ref={ref} className="map-container-map"> This is map cont</div>{" "}
//     </div>
//   );
// };
// export default Map;
