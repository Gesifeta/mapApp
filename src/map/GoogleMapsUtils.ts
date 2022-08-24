
export const loadMapApi = () => {

const KYE=process.env.REACT_APP_API_KEY
console.log(KYE);
  // const mapsURL = `https://maps.googleapis.com/maps/api/js?key=${KYE}&libraries=places&language=en&v=quarterly`;

  const mapsURL=`https://maps.googleapis.com/maps/api/js?key=&callback=initMap&v=weekly`
  // look for google mapAPI url script and if it exists return the scrpt else create new one.

  const scripts = document.getElementsByTagName("script");

  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf(mapsURL) === 0) {
      return scripts[i];
    }
  }
  const googelMapScript = document.createElement("script");
  googelMapScript.src = mapsURL;
  googelMapScript.async = true;
  googelMapScript.defer = true;
  window.document.body.appendChild(googelMapScript);
  return googelMapScript;
};
