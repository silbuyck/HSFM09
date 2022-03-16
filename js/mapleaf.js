var leafletmap = L.map('map').setView([52.377956, 4.897070], 13);
			L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: 'pk.eyJ1IjoiMzAyOTI5MyIsImEiOiJjbDA2dnQweDUwMDl0M2Jwcnk0N2g2aHAyIn0.ZvZ0jDA_yTce_ghJM8Glew'
			}).addTo(leafletmap);
			
			// ADD WFS layer
		const cbs = L.tileLayer.wms('https://geodata.nationaalgeoregister.nl/ahn3/wms', {
			'layers': 'ahn3_5m_dtm',
			'styles': 'ahn3:ahn3_5m_detail',
			'srs': 'EPSG:28992',
			'format': 'image/png',
			'transparent': true
		}).addTo(leafletmap);
		
		//const geoserverWFSBuurt = L.tileLayer.wms('http://localhost:8001/geoserver/ows', {
			//'layers': 'buurt_2019_v1',
			//'styles': 'polygon',
			//'srs': 'EPSG:28992',
			//'format': 'image/png',
			//'transparent': true
		//}).addTo(leafletmap);
		
		//Array en loops toevoegen
		
		const geoJsonLayerNieuw = L.geoJSON().addTo(leafletmap);
		
		const arrayVanPlaatsnamen = ['Amsterdam', 'Soesterberg', 'Almere', 'Oss', 'Utrecht'];
		
		for (let index = 0; index < arrayVanPlaatsnamen.length; index++) {
			const woonplaats = arrayVanPlaatsnamen[index];
			
			const node = document.createElement("button");
			
			node.className = "button";
			node.id = woonplaats;
			
			const textnode = document.createTextNode(woonplaats);
			node.appendChild(textnode);
			
			// Voeg de button toe in html
			document.getElementById('header').appendChild(node);
			
			// Voeg een klik actie toe aan de knop
			node.addEventListener('click', function(){
				console.log(node.id)
				
				// ID vinden van de woonplaats
				fetch('https://geodata.nationaalgeoregister.nl/locatieserver/free?bq=type:woonplaats&q=' + node.id)
				.then(response => response.json())
				.then(data => {
					let id= data.response.
					docs[0].id
					
					// data ophalen
					fetch('https://geodata.nationaalgeoregister.nl/locatieserver/lookup?fl=*&id=' + id)
						.then(response => response.json())
						.then(data => {
							console.log(data)
							const wkt = data.response.docs[0].geometrie_ll;
							// WKT omzetten naar Geojson
							const geojson = Terraformer.wktToGeoJSON(wkt);
							console.log(geojson);
							geoJsonLayerNieuw.addData(geojson);
						})
				})
			});
		}
		