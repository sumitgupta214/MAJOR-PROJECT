mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 12, // starting zoom
});

// Create a default Marker and add it to the map.

const marker1 = new mapboxgl.Marker({ color: "red" }) //Coordinates of Listing
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h4>${listing.location}</h4><p>Exact Location Will be Provided after Booking.</p>`))
  .addTo(map);
