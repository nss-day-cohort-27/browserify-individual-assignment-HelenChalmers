console.log("placesCard is here")

function placesCard (places) {
    return `<div class="card-container">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-country" id="Country--${places.id}">Country: ${places.country}</h5>
      <h5 class="card-country" id="Continent--${places.id}">Continent: ${places.continent}</h5>
      <h6 class="card-date" id="Date--${places.id}">Date: ${places.date}</h6>
      <p class="card-memory" id="Memory--${places.id}">Favorite Memory: ${places.memory}</p>
      <button type="button" id="delete--${places.id}"class="btn btn-primary">Delete</button>
    </div>
  </div>
  </div>`
}

module.exports = placesCard;