const map = L.map('mapid').setView([-27.2195499,-49.6466143], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {
    //create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight:240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)

    L.marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( orphanageElement => {
    const orphanage = {
        id: orphanageElement.dataset.id,
        name: orphanageElement.dataset.name,
        lat: orphanageElement.dataset.lat,
        lng: orphanageElement.dataset.lng
    }

    addMarker(orphanage)
})