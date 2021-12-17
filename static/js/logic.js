// Creating map object
var myMap = L.map("map", {
    center: [45, -122],
    zoom: 11
});
  
// Add a tile layer
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap);

// create an array of EPA superfund sites
var sites = [{
    location: [45.5698, -122.6475],
    name: "Allied Plating, Inc.",
    city: "Portland"
},
{
    location: [45.671054, -121.878244],
    name: "Bradford Island",
    city: "Cascade Locks",
},
{
    location: [45.5683, -122.7453],
    name: "Gould, Inc.",
    city: "Portland",
},
{
    location: [45.609234, -122.724819],
    name: "Harbor Oil Inc.",
    city: "Portland",
},
{
    location: [45.580536, -122.740304],
    name: "McCormick & Baxter Creosoting Co. (Portland Plant)",
    city: "Portland",
},
{
    location: [45.6009, -122.7794],
    name: "Portland Harbor",
    city: "Portland",
},
{
    location: [45.5637, -122.4141],
    name: "Reynolds Metals Company",
    city: "Troutdale",
}
];

// create markers
sites.forEach(city => {
    L.marker(site.location)
    .bindPopup("<h1>" + site.name + "</h1>")
    .addTo(myMap)
})
// Use this link to get the geojson data.
var link = ""

// Get our GeoJSON data using d3.json
