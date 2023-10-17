var leafletmap = L.map('mapLeaflet').setView([-6.225920, 106.837796], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiMzAyOTI5MyIsImEiOiJjbDA2dnQweDUwMDl0M2Jwcnk0N2g2aHAyIn0.ZvZ0jDA_yTce_ghJM8Glew'
}).addTo(leafletmap);

// Add WMS layer
const geoserverWFSborders = L.tileLayer.wms('http://localhost:8001/geoserver/ows', {
  'layers': 'borders',
  'styles': 'polygon',
  'srs': 'EPSG:28992',
  'format': 'image/png',
  'transparent': true
}).addTo(leafletmap);

var geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Jakarta",
        "marker-color": "#4585ed",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          106.83195920672347,
          -6.203528430931684
        ],
        "type": "Point"
      },
      "id": 0
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              106.73345758429474,
              -6.115487683075131
            ],
            [
              106.73345758429474,
              -6.30144411540266
            ],
            [
              106.92847089738245,
              -6.30144411540266
            ],
            [
              106.92847089738245,
              -6.115487683075131
            ],
            [
              106.73345758429474,
              -6.115487683075131
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}

L.geoJSON(geojson).addTo(leafletmap)




