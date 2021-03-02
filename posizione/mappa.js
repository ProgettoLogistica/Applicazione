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

  // attesa inserimento indirizzo
  geocoder.on('addresschosen', (evt) => {
    window.setTimeout(() => {
      //popup.show(evt.coordinate, evt.address.formatted);
      console.log(evt.address);
    }, 3000);
  });
})(window, document);

