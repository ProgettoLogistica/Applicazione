/*var mymap = L.map('mapid').setView([<%= parcels[1].x %>,<%= parcels[1].y %>], 20);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);
	var rotta = [];
	<% parcels.forEach(parcel =>{ %>
		//prelevare coordinate da db
		var marker = L.marker([<%= parcel.x %>,<%= parcel.y %>]).addTo(mymap);
		var coord = [<%= parcel.x %>,<%= parcel.y %>];
		rotta.push(coord);
	<% }) %>
	var polyline = L.polyline(rotta, {color: 'black'}).addTo(mymap);*/


	L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uYmFyIiwiYSI6ImNrbWRicDVzdzJqcmEyb3AxYXEyNDUyaGsifQ.OTfQv0UbnWbzFsxA_iT6ww';
    
var mapboxTiles = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
       attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
       tileSize: 512,
       zoomOffset: -1
});

var map = L.map('mapid')
  .addLayer(mapboxTiles)
  .setView([<%= parcels[1].x %>,<%= parcels[1].y %>], 15);

  var punti = [];
  <% parcels.forEach(parcel =>{ %>
		//prelevare coordinate da db
		var marker = L.marker([<%= parcel.x %>,<%= parcel.y %>]).addTo(map);
		var coord = L.latLng(<%= parcel.x %>, <%= parcel.y %>);
		punti.push(coord);
<% }) %>

 L.Routing.control({
                router: L.Routing.mapbox(L.mapbox.accessToken,{
                    profile : 'mapbox/walking',
                    language: 'en',
                }),
                waypoints: punti,
            }).addTo(map);