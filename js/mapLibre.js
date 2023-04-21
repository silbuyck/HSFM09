var maplibre = new maplibregl.Map({
    container: 'mapLibre',
    style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
    center: [117.280689, -0.846022], // starting position [lng, lat]
    zoom: 2.5 // starting zoom
});

maplibre.on('load', function() {
    // Add the ESRI WFS layer
    maplibre.addSource('esri-wfs', {
        type: 'geojson',
        data: 'https://dservices2.arcgis.com/rtefou6JFIxFvYTf/arcgis/services/Indonesi%C3%AB/WFSServer?service=wfs&request=getfeature&typename=Indonesi%C3%AB:Propinsi_Indonesia_3857'
    });

    maplibre.addLayer({
        id: 'esri-wfs-layer',
        type: 'fill',
        source: 'esri-wfs',
        paint: {
            'fill-color': '#088',
            'fill-opacity': 0.5
        }
    });
});
