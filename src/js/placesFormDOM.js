console.log("placesFormDom is in the house")

const formFunctionsDom = Object.create (null, {

    renderFormDom:  {
        value: () => {
return `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add a Country</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add a Country</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="country-name" class="col-form-label">Country Name:</label>
            <input type="text" class="form-control" id="country-name">
          </div>
          <form action="/action_page.php" >
  <select name="continents" id="continent-name">
    <option value="Australia">Australia</option>
    <option value="Antarctica">Antarctica</option>
    <option value="North America">North America</option>
    <option value="South America">South America</option>
    <option value="Africa">Africa</option>
    <option value="Europe">Europe</option>
    <option value="Central America">Central America</option>
  </select>
          <div class="form-group">
              <label for="dates-visited" class="col-form-label">Date Visited:</label>
              <input type="date" class="form-control" id="dates-visited">
          </div>
          <div class="form-group">
              <label for="favorite-memory" class="col-form-label">Favorite Memory:</label>
              <textarea class="form-control" id="favorite-memory"></textarea>
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="save-button">Save</button>
      </div>
    </div>
  </div>
</div>`


}
},

clearForm: {
    value: () => {
        document.querySelector("#country-name").value = ""
        document.querySelector("#continent-name").value = ""
        document.querySelector("#dates-visited").value = ""
        document.querySelector("#favorite-memory").value = ""
        
    }
}

})

module.exports = formFunctionsDom;

