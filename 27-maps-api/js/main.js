
$(function(){

    let map = L.map('map').setView([49.226800282531705, 28.462006484569336], 13);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
    // let redIcon = L.icon({
    //     iconUrl: 'plugins/leaflet/images/leaf-red.png',
    //     shadowUrl: 'plugins/leaflet/images/leaf-shadow.png',
    
    //     iconSize:     [38, 95], // size of the icon
    //     shadowSize:   [50, 64], // size of the shadow
    //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //     shadowAnchor: [4, 62],  // the same for the shadow
    //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    // });

    let LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'plugins/leaflet/images/leaf-shadow.png',
            iconSize:     [38, 95],
            shadowSize:   [50, 64],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
        }
    });

    let redIcon = new LeafIcon({iconUrl: 'plugins/leaflet/images/leaf-red.png'});
    let greenIcon = new LeafIcon({iconUrl: 'plugins/leaflet/images/leaf-green.png'});

    

    
    let markerContent = [
        {
            lat: 49.226800282531705,
            lng: 28.462006484569336,
            icn: greenIcon,
            desc: '<div style="color: blue; border-bottom: 1px solid blue">Home.<br> <b>Sweet Home<b></div>'
        },
        {
            lat: 49.24704823487016,
            lng: 28.498734378690166,
            icn: redIcon,
            desc: '<div style="color: red; border-bottom: 1px solid red">My work</div>'
        },
        {
            lat: 49.2446926924652,
            lng: 28.504867784457645,
            icn: redIcon,
            desc: '<div style="color: orange; border-bottom: 1px solid orange">There I play football</div>'
        },
        {
            lat: 49.23148881692986,
            lng: 28.42071820095764,
            icn: redIcon,
            desc: '<div style="color: black; border-bottom: 1px solid black">Propaganda<br>The best bear in Vinnytsia</div>'
        },
        {
            lat: 49.228140785769675,
            lng: 28.456872502026155,
            icn: redIcon,
            desc: '<div style="color: blueviolet; border-bottom: 1px solid blueviolet">Kindergarten<br>Where my daughter went</div>'
        },
        {
            lat: 49.22547655688492,
            lng: 28.463874995301058,
            icn: redIcon,
            desc: '<div style="color: darkolivegreen; border-bottom: 1px solid darkolivegreen">Spartak Beach<br>Where we loved to swim</div>'
        },
    ]

    // console.log(markerContent);
    // console.log(markerContent.length);
    // console.log(markerContent[5].icn);
    // console.log('{'+markerContent[5].icn+'}');


    // function getRandomLatLng(markerContent){
    //     for (let i = 0; i < markerContent.length; i ++){
    //         let Lat = markerContent[i].lat;
    //         let Lng = markerContent[i].Lng;
    //         console.log(Lat);
    //     }
    // };

    let markers = L.markerClusterGroup();
    // markers.addLayer(L.marker(getRandomLatLng(LatLng)));
    
    for (let i = 0; i < markerContent.length; i ++){
        let mark = markers.addLayer(L.marker([markerContent[i].lat, markerContent[i].lng], {icon: markerContent[i].icn}).bindPopup(markerContent[i].desc));
        // console.log('{'+markerContent[i].icn+'}');
        // console.log(`${markerContent[i].icn}`);
        // console.log(mark);
        // console.log(markerContent[i].desc);
        // let description = markerContent[i].desc;
        map.addLayer(mark);
        // mark.bindPopup(description);
    }

    // '{'+markerContent[i].icn+'}'

    // markers.addLayer(L.marker([49.226800282531705, 28.462006484569336]));
    // markers.addLayer(L.marker([49.24704823487016, 28.498734378690166]));
    // markers.addLayer(L.marker([49.2446926924652, 28.504867784457645]));
    // markers.addLayer(L.marker([49.23148881692986, 28.42071820095764]));
    // markers.addLayer(L.marker([49.228140785769675, 28.456872502026155]));
    // markers.addLayer(L.marker([49.22547655688492, 28.463874995301058]));
    // ... Add more layers ...
    
    
    map.addLayer(markers);

    
    // L.marker([49.226800282531705, 28.462006484569336], {icon: redIcon}).addTo(map)
    // .bindPopup('<div style="color: blue; border-bottom: 1px solid blue">Home.<br> <b>Sweet Home<b></div>')
    // // .openPopup();

    // L.marker([49.24704823487016, 28.498734378690166], {icon: redIcon}).addTo(map)
    // .bindPopup('<div style="color: red; border-bottom: 1px solid red">My work</div>')

    // L.marker([49.2446926924652, 28.504867784457645], {icon: redIcon}).addTo(map)
    // .bindPopup('<div style="color: orange; border-bottom: 1px solid orange">There I play football</div>')
    
    // L.marker([49.23148881692986, 28.42071820095764], {icon: redIcon}).addTo(map)
    // .bindPopup('<div style="color: black; border-bottom: 1px solid black">Propaganda<br>The best bear in Vinnytsia</div>')
    
    // L.marker([49.228140785769675, 28.456872502026155], {icon: redIcon}).addTo(map)
    // .bindPopup('<div style="color: blueviolet; border-bottom: 1px solid blueviolet">Kindergarten<br>Where my daughter went</div>')
    
    // L.marker([49.22547655688492, 28.463874995301058], {icon: redIcon}).addTo(map)
    // .bindPopup('<div style="color: darkolivegreen; border-bottom: 1px solid darkolivegreen">Spartak Beach<br>Where we loved to swim</div>')
})



