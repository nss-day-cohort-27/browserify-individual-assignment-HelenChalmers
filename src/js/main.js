console.log("main JS is here")

const formFunctionsDom = require("./placesFormDOM");
const APIPlacesContent = require("./datamanager");
const placesCard = require("./placesCard");





document.querySelector("#countryModal").innerHTML += formFunctionsDom.renderFormDom ();

document.querySelector("#save-button").addEventListener("click", ()=>{

    const newCountry = {
        country: document.querySelector("#country-name").value,
        continent: document.querySelector("#continent-name").value, 
        date: document.querySelector("#dates-visited").value,
        memory: document.querySelector("#favorite-memory").value
    }

    APIPlacesContent.savePlacesContent(newCountry).then(() => {
        console.log(newCountry);
        formFunctionsDom.clearForm();
        
        listCountries()
})
})

function listCountries() {
    
    document.querySelector("#countryList").innerHTML = "";
    APIPlacesContent.getPlacesContent().then(result => {
        result.forEach(place => {
           
            document.querySelector("#countryList").innerHTML += placesCard(place);
        })

    })
}
listCountries()

document.querySelector("#countryList").addEventListener("click", (event) => {
    console.log(event);
    if(event.target.id.split("--")[0] === "delete"){
        console.log("yo this event thing works!", event.target.id);
        let id = event.target.id.split("--")[1]
        console.log(id);
        
        APIPlacesContent.deletePlaces(id).then(()=> {
            listCountries()
        }) 

    }
        
})
