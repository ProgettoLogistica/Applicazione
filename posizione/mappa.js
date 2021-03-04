((win, doc) => {
    let request = new XMLHttpRequest();

    request.open('POST', "https://api.openrouteservice.org/v2/directions/driving-car");

    request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', '5b3ce3597851110001cf62487875a4d7868a453ca9b39fe4e41e1862');

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
        }
    };

    const body = '{"coordinates":[[8.681495,49.41461],[8.686507,49.41943],[8.687872,49.420318]]}';

    request.send(body);

    //modalità di visualizzazione della mappa
    const olview = new ol.View({
        center: ol.proj.fromLonLat([8.681495,49.41461]),
        zoom: 13,
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

    /* style del punto
    var pointStyle = new Style({
        image: new Icon({
          color: '#BADA55',
          crossOrigin: 'anonymous',
        }),
      });*/

    var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                //segnalazione di ogni consegna effettuata
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([8.681495,49.41461]))
                }),
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([8.686507,49.41943]))
                }),
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([8.687872,49.420318]))
                })
            ]
        })
    });
    map.addLayer(layer);
})(window, document);

