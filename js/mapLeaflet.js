var leafletmap = L.map('mapLeaflet').setView([-0.846022, 117.280689], 3.5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiMzAyOTI5MyIsImEiOiJjbDA2dnQweDUwMDl0M2Jwcnk0N2g2aHAyIn0.ZvZ0jDA_yTce_ghJM8Glew'
}).addTo(leafletmap);

// Add GeoJSON layer for Indonesia
$.getJSON("https://raw.githubusercontent.com/georgique/world-geojson/dc7d0ff0b36b3694df9a153566cdc964a183d213/countries/indonesia.json", function(data) {
  L.geoJSON(data).addTo(leafletmap);
});

// Add WMS layer
const geoserverWFSborders = L.tileLayer.wms('http://localhost:8001/geoserver/ows', {
  'layers': 'borders',
  'styles': 'polygon',
  'srs': 'EPSG:28992',
  'format': 'image/png',
  'transparent': true
}).addTo(leafletmap);
		