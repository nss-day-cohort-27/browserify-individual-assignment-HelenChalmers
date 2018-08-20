const APIPlacesContent = Object.create(null, {

        savePlacesContent: {
            value: (place) => {
                return fetch("http://localhost:8088/places", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(place)
                })
                .then(response => response.json()) 

            }

        }, 

        getPlacesContent: {
            value: () => {
                return fetch(`http://localhost:8088/places?_order=desc&_sort=id`)
                .then(response => response.json());
            }
        },
        editPlacesContent: {
            value: (place, placesID) => {
                
                return fetch(`http://localhost:8088/places/${placesID}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(place)
                })
                .then(response => response.json())
            }
        },

        deletePlaces: {
            value: (ID) => {
                return fetch(`http://localhost:8088/places/${ID}`,{
                method: "DELETE"
                
                })
    
            }
    
        }


})

module.exports = APIPlacesContent;