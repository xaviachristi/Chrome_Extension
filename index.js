let myLeads = []
const inputEl = document.getElementById("input-el") //can use both let and const to declare variables.
const inputBtn = document.getElementById("input-btn") //const cannot be reassigned
const ulEl = document.getElementById("ul-el")
const container = document.getElementById("container")

inputBtn.addEventListener("click", function() { // cleaner separation of concerns where the html doesn't worry abt the javascript - no "onclick" element in the html.
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li><a target = '_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>" //converts this to a list item - manipulating the DOM - creating HTML elements with JS.
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        ` //backticks allow formatting on diff lines - just like in the HTML
    }
    ulEl.innerHTML = listItems
}