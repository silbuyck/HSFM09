require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {

    esriConfig.apiKey = "AAPKb2eb534f90e14c8295e4cbaa4c6b53f7VRkXMi2ABpNVxt-G9Vn29po4fJQASk9OTU10UEAxWkyoqyCEnh4bDJ1ZpWE-xeJf";

    const map = new Map({
        basemap: "arcgis-topographic" // Basemap layer service
    });
		
	const view = new MapView({
        map: map,
        center: [-118.805, 34.027], // Longitude, latitude
        zoom: 13, // Zoom level
        container: "mapArcGisApi" // Div element
    });

});