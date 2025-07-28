let myLeads = []
const inputEl = document.getElementById("input-el") //can use both let and const to declare variables.
const inputBtn = document.getElementById("input-btn") //const cannot be reassigned

inputBtn.addEventListener("click", function() {
    console.log("Button clicked!")
})
// cleaner separation of concerns where the html doesn't worry abt the javascript - no "onclick" element in the html.

