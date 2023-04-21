require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {

    esriConfig.apiKey = "AAPKb2eb534f90e14c8295e4cbaa4c6b53f7VRkXMi2ABpNVxt-G9Vn29po4fJQASk9OTU10UEAxWkyoqyCEnh4bDJ1ZpWE-xeJf";

    const map = new Map({
        basemap: "arcgis-topographic" // Basemap layer service
    });
		
	const view = new MapView({
        map: map,
        center: [117.280689, -0.846022], // Longitude, latitude
        zoom: 4, // Zoom level
        container: "mapArcGisApi" // Div element
    });
	
	const WFSLayer = new L.geoJson();

		WFSLayer.addTo(map);

		fetch('https://dservices2.arcgis.com/rtefou6JFIxFvYTf/arcgis/services/Indonesi%C3%AB/WFSServer?service=wfs&request=getcapabilities', {})
		.then(response => response.json())
		.then(data => {
			WFSLayer.addData(data);
	});
});