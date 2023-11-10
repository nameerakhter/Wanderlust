console.log(mapToken);
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
    center: listing.geometry.coordinates, // use the provided coordinates
    zoom: 9 // starting zoom
});

const marker1 = new mapboxgl.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates) //Listing.Geometry.coordinates
    .setPopup(new mapboxgl.Popup({ offset: 25})
    .setHTML(`<h3>${listing.location}</h3><p>Exact location provided after booking</p>`)
    .addTo(map))
    .addTo(map);