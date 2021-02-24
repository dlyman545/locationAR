window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
     return [
         <!-- Orca -->
       {
            name: 'Magnemite',
            location: {
                lat: 40.570595,
                lng: -111.894800
            }
       },
          <!-- Danp --> 
       {
            name: 'Magnemite',
            location: {
                lat: 40.219370019120674,
                lng: -111.67371251693515
            }
       },
         <!-- Home --> 
       {
            name: 'Magnemite',
            location: {
                lat: 40.240943517167054,
                lng: -111.68076812366644
            }
       },
          <!-- Jube --> 
       {
            name: 'Magnemite',
            location: {
                lat: 40.53887093917758,
                lng: -111.85974962730612
            }
       },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
