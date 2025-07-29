let myLeads = []
const inputEl = document.getElementById("input-el") //can use both let and const to declare variables.
const inputBtn = document.getElementById("input-btn") //const cannot be reassigned
const ulEl = document.getElementById("ul-el")
const container = document.getElementById("container")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads) //clear DOM by rendering out the leads
})

inputBtn.addEventListener("click", function() { // cleaner separation of concerns where the html doesn't worry abt the javascript - no "onclick" element in the html.
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    // To verify that it works:
    // console.log( localStorage.getItem("myLeads") )
})


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += "<li><a target = '_blank' href='" + leads[i] + "'>" + myLeads[i] + "</a></li>" //converts this to a list item - manipulating the DOM - creating HTML elements with JS.
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        ` //backticks allow formatting on diff lines - just like in the HTML
    }
    ulEl.innerHTML = listItems
}