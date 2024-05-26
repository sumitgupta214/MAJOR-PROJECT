let map_token = mapToken;
mapboxgl.accessToken = map_token;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: [77.412613, 23.259933], // starting position [lng, lat]
  zoom: 10, // starting zoom
});
