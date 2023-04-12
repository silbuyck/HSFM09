require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {

    esriConfig.apiKey = "AAPKb2eb534f90e14c8295e4cbaa4c6b53f7VRkXMi2ABpNVxt-G9Vn29po4fJQASk9OTU10UEAxWkyoqyCEnh4bDJ1ZpWE-xeJf";

    const map = new Map({
        basemap: "arcgis-topographic" // Basemap layer service
    });
		
	const view = new MapView({
        map: map,
        center: [117.280689, -0.846022], // Longitude, latitude
        zoom: 3, // Zoom level
        container: "mapArcGisApi" // Div element
    });
		 
  const geoJson = L.geoJson().addTo(map);

    function zoomOnClick() {
      map.setView( [117.280689, -0.846022], 3)

      fetch('https://github.com/georgique/world-geojson/blob/dc7d0ff0b36b3694df9a153566cdc964a183d213/countries/indonesia.json')
        .then(response => response.json())
        .then(data => {
          const wkt = data.response.docs[0].geometrie_ll
		  
          const geojson = Terraformer.wktToGeoJSON(wkt)
          console.log(geojson)
          geoJsonLayer.addData(geojson)
        })
    }
