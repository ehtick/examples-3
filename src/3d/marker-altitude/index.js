var map = new maptalks.Map('map', {
  center: [-0.113049, 51.498568],
  zoom: 14,
  pitch : 56,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains),
    attribution: '$(attribution)'
  })
});

// point with altitude
var point = new maptalks.Marker(
  [-0.113049, 51.498568, 400]
);

// same point without altitude
var point0 = new maptalks.Marker(
  [-0.113049, 51.498568]
).updateSymbol({
  markerOpacity : 0.5,
  markerFill : '#bbb'
});

new maptalks.VectorLayer('vector', [point0, point], {
  enableAltitude: true        // enable altitude
}).addTo(map);
