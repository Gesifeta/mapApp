
export const loadMapApi = () => {
// "const KEY=process.env.REACT_APP_API_KEY"
  const mapsURL=`https://maps.googleapis.com/maps/api/js?key=&libraries=places&language=en&v=weekly`
  // look for google mapAPI url script and if it exists return the script else create new one.
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
  document.body.appendChild(googelMapScript);
  return googelMapScript;
};
