var map = L.map('map').setView([52.377956, 4.897070], 13);
			L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: 'pk.eyJ1IjoiMzAyOTI5MyIsImEiOiJjbDA2dnQweDUwMDl0M2Jwcnk0N2g2aHAyIn0.ZvZ0jDA_yTce_ghJM8Glew'
			}).addTo(map);
			
			// ADD WFS layer
		//const cbs = L.tileLayer.wms('https://geodata.nationaalgeoregister.nl/ahn3/wms', {
			//'layers': 'ahn3_5m_dtm',
			//'styles': 'ahn3:ahn3_5m_detail',
			//'srs': 'EPSG:28992',
			//'format': 'image/png',
			//'transparent': true
		//}).addTo(map);
		
		const geoserverWFSBuurt = L.tileLayer.wms('http://localhost:8001/geoserver/ows', {
			'layers': 'buurt_2019_v1',
			'styles': 'polygon',
			'srs': 'EPSG:28992',
			'format': 'image/png',
			'transparent': true
		}).addTo(map);
		
		//Array en loops toevoegen
		const arrayVanPlaatsnamen = ['Amsterdam', 'Soesterberg', 'Almere', 'Oss', 'Utrecht'];
		
		for (let index = 0; index < arrayVanPlaatsnamen.length; index++) {
			const woonplaats = arrayVanPlaatsnamen[index];
			
			const node = document.createElement("button");
			const textnode = document.createTextNode(woonplaats);
			node.appendChild(textnode);
			
			document.getElementById('header').appendChild(node);
		};
		