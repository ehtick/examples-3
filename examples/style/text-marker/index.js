
var map = new maptalks.Map('map', {
  center: [121.48542888885189, 31.228541533313702],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  })
});

var layer = new maptalks.VectorLayer('vector').addTo(map);

var symbol = {
  'textFaceName' : '"microsoft yahei",arial,sans-serif',
  'textName' : '{name}',
  'textWeight'        : 'normal', //'bold', 'bolder'
  'textStyle'         : 'normal', //'italic', 'oblique'
  'textSize'          : 40,
  'textFont'          : null,
  'textFill'          : '#34495e',
  'textOpacity'       : 1,
  'textHaloFill'      : '#fff',
  'textHaloRadius'    : 5,
  'textWrapWidth'     : null,
  'textWrapBefore'    : false,
  'textWrapCharacter' : '\n',
  'textLineSpacing'   : 0,

  'textDx'            : 0,
  'textDy'            : 0,

  'textHorizontalAlignment' : 'middle', //left | middle | right | auto
  'textVerticalAlignment'   : 'middle',   // top | middle | bottom | auto
  'textAlign'               : 'center' //left | right | center | auto
};
var geometry = new maptalks.Marker(
  [121.485428, 31.228541],
  {
    'symbol' : symbol,
    'properties' : {
      'name' : 'Hello\nMapTalks'
    }
  }
).addTo(layer);
