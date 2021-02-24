((win, doc) => {

  //modalità di visualizzazione della mappa
  const olview = new ol.View({
    center: [0, 0],
    zoom: 5,
    minZoom: 2,
    maxZoom: 30,
  });

  //utilizza i layer per inserire la mappa
  const baseLayer = new ol.layer.Tile({
    source: new ol.source.OSM(),
  });

  /*crea il visualizzatore di mappa e lo inserisce nel div mappa(pagina html)
    secondo determinate modalità di visualizzazione*/
  const map = new ol.Map({
    target: doc.querySelector('#map'),
    view: olview,
    layers: [baseLayer],
  });

  //popup del luogo
  const popup = new ol.Overlay.Popup();

  // geocoder per codificare l'indirizzo
  const geocoder = new Geocoder('nominatim', {
    provider: 'osm',
    targetType: 'glass-button',
    lang: 'en',
    placeholder: 'Search for ...',
    limit: 5,
    keepOpen: false,
  });

  //aggiungo geocoder alla mappa
  map.addControl(geocoder);
  map.addOverlay(popup);

  /*marker per segnalare il punto
  var vectorLayer = new OpenLayers.Layer.Vector("Overlay");
  var feature = new OpenLayers.Feature.Vector(
   new OpenLayers.Geometry.Point(-71, 42),
   {some:'data'},
   {externalGraphic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F4918911%2Fgps_location_map_marker_pin_place_icon&psig=AOvVaw2dcQpF8XfyMr46R7ZKPLJm&ust=1614259627285000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjSqKzQgu8CFQAAAAAdAAAAABAV', graphicHeight: 21, graphicWidth: 16});
  vectorLayer.addFeatures(feature);
  map.addLayer(vectorLayer);*/

  // attesa inserimento indirizzo
  geocoder.on('addresschosen', (evt) => {
    window.setTimeout(() => {
      popup.show(evt.coordinate, evt.address.formatted);
      console.log(evt.coordinate);
      //aggiungo marker
    }, 3000);
  });
})(window, document);
