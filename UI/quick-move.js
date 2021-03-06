var places = ee.FeatureCollection([
  ee.Feature(ee.Geometry.Point([31.982574462890625, 30.474715811513853]),{"name": "egypt.irri"}),
  ee.Feature(ee.Geometry.Point([9.62377, 36.67923]),{"name": "tun.big"}),
  ee.Feature(ee.Geometry.Point([8.87352, 36.50025]),{"name": "tun.sm"}),
  ee.Feature(ee.Geometry.Point([39.9511, 8.83673]),{"name": "eth.farm"}),
  ee.Feature(ee.Geometry.Point([39.2278, 8.97559]),{"name": "eth.sm"}),
  ee.Feature(ee.Geometry.Point([38.897653, 8.250736]),{"name": "eth.s1"}),
  ee.Feature(ee.Geometry.Point([36.539454, -0.863918]),{"name": "ken.s1"}),
  ee.Feature(ee.Geometry.Point([29.350426, -3.197833]),{"name": "rwa.s1"}),
  ee.Feature(ee.Geometry.Point([29.52072, -3.307664]),{"name": "rwa.s2"}),
  ee.Feature(ee.Geometry.Point([35.475368, -15.502256]),{"name": "mal.s1"}),
  ee.Feature(ee.Geometry.Point([30.53598, -29.88281]),{"name": "sa.sugar"}),
  ee.Feature(ee.Geometry.Point([28.48394, -26.8279]),{"name": "sa.corn"})
  ]);
  
function goto(m, place, zoom){
  if (typeof zoom === "undefined") zoom = 14
  var dest = places.filter(ee.Filter.eq('name', place))
  m.centerObject(dest, zoom)
}
goto(Map, 'egypt.irri')


// Map.

// var ref = ee.Image('users/JunXiong1981/ref/SA_ctype_ref')
// var ce = ee.Image("users/JunXiong1981/release/GFSAD30AFCE001")
// var image2 = ee.Image("users/JunXiong1981/ref/ghana_landsat_lulc_12c")
// var image3 = ee.Image("users/JunXiong1981/ref/kzn_land_cover")
// var image4 = ee.Image("users/JunXiong1981/ref/murali-tunisia-croptype")
// var image5 = ee.Image("users/JunXiong1981/ref/southafrica_nlc2008")

// Map.addLayer(ref.mask(ref), {palette:'00ff00', opacity:.6})

// var ft = ee.FeatureCollection('ft:1wiRq9P92gZwR8yCeWCH-X5VNOUV3EjJetQRA9sXH') // Africa ground samples (1380)

// Map.addLayer(ft, {color:'ffff00'})
