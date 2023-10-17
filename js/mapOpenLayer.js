const key = 'ra5kynhRPGd1fkCh3rvE';
      const source = new ol.source.TileJSON({
        url: `https://api.maptiler.com/maps/streets-v2/tiles.json?key=${key}`,
        tileSize: 512,
        crossOrigin: 'anonymous'
      });

      const attribution = new ol.control.Attribution({
        collapsible: false,
      });
      
      const map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: source
          })
        ],
        controls: ol.control.defaults.defaults({attribution: false}).extend([attribution]),
        target: 'mapOL',
        view: new ol.View({
          constrainResolution: true,
          center: ol.proj.fromLonLat([110.370716, -7.790222]),
          zoom: 8.5
        })
      });
	 