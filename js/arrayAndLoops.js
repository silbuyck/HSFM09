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