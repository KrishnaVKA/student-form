var Name = document.getElementById("Name")
var Age = document.getElementById("Age")
var Coures = document.getElementById("Course")
var Email = document.getElementById("Email")

var dataAdd = document.getElementById("dataAdd")

function updateData() {
    var Gender = "Male"
    if (document.getElementById("Female").checked) {
        Gender = "Female"
    }

    var trow = document.createElement("tr")
    trow.innerHTML = "<td>" + Name.value + "</td>" + "<td>" + Age.value + "</td>" + "<td>" + Coures.value + "</td>" + "<td>" + Gender + "</td>" + "<td>" + Email.value + "</td>" + "<button onclick='deleteItem(event)' style='background-color:red'>Delete</button>"

    dataAdd.insertAdjacentElement("afterEnd", trow)
}

function deleteItem(event) {
    event.target.parentElement.remove()
}