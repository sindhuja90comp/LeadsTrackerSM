const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads = []
let ulEl = document.getElementById("ul-el")
let deleteBtn = document.getElementById("delete-btn")
let tabBtn = document.getElementById("save-btn")


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    console.log(tabs)
    myLeads.push(tabs[0].url)
    localStorage.setItem("url", JSON.stringify(myLeads))
    rendor(myLeads)
    })
})


const LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (LeadsFromLocalStorage) {
    myLeads = LeadsFromLocalStorage
    rendor(myLeads)
}

function rendor(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems +=  "<li><a target = '_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "<a/></li>" 
        listItems += `<li>
                        <a target = '_blank' href='${leads[i]}'> 
                            ${leads[i]} 
                        <a/>
                      </li>`
        console.log(listItems)
        
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    rendor(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    rendor(myLeads)

    console.log(localStorage.getItem("myLeads"))

})




