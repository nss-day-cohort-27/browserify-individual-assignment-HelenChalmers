// console.log("countryListFunctions is here");

// const formFunctionsDom = require("./placesFormDOM");
// const APIPlacesContent = require("./datamanager");
// const placesCard = require("./placesCard");

// function countryList () {

// document.querySelector("#countryModal").innerHTML += formFunctionsDom.renderFormDom ();

// document.querySelector("#save-button").addEventListener("click", ()=>{

//     const newCountry = {
//         country: document.querySelector("#country-name").value, 
//         date: document.querySelector("#dates-visited").value,
//         memory: document.querySelector("#favorite-memory").value
//     }

//     APIPlacesContent.savePlacesContent(newCountry).then(() => {
//         console.log(newCountry);
//         formFunctionsDom.clearForm();
//         //call the function to get the entries and put to DOM
//         listCountries()
// })
// })

// function listCountries() {
//     //this clears the DOM and then pulls all tasks to the DOM
//     document.querySelector("#countryList").innerHTML = "";
//     APIPlacesContent.getPlacesContent().then(result => {
//         result.forEach(place => {
//             //document.queryselector tells it where in the html to put it and renderContent tells it what to look like.  (as stated in JournalContentDom) ultimately putting it to the dom.
//             document.querySelector("#countryList").innerHTML += placesCard(place);
//         })

//     })
// }
// listCountries()

// }

// module.exports = countryList;