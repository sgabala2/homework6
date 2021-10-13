// import {validateEmployer} from "./validate";
// let val = validateEmployer();
// window.alert(val);

let data = {
    name: document.getElementById("employerName").value,
    sector: document.getElementById("employerName").value,
    summary:document.getElementById("summary").value
}

function deleteEmployer(employerName) {
    fetch('http://localhost:7000/employers?name=' + employerName, {
            method: 'Delete',
        }
    ).then(res => window.location.reload = window.location.reload(true));
}


function addNewEmployer() {
    console.log("in here");

    var name = document.getElementById("employerName").value;
    var sector = document.getElementById("employerName").value;
    var summary = document.getElementById("summary").value;
    // alert(name + summary + sector);

    fetch('http://localhost:7000/employers?name=' + name + "&sector=" + sector + "&summary=" + summary,{
            method: 'POST',
        }
    ).then(response => response.json())
        .then(res => window.location.reload = window.location.reload(true));
        // .then(res => window.location.reload = window.location.reload(true));
}







    //if(val) {
    //     fetch('http://localhost:7000/employers?name=' + employerName + "&sector=" + employerSector + "&summary=" + employerSummary, {
    //             method: 'Post',
    //             //body: employerName, employerSector, employerSummary
    //         }
    //     ).then(res => window.location.reload = window.location.reload(true));
    //}


let delButtons = document.querySelectorAll("li > button")
Array.prototype.forEach.call(delButtons, function(button) {
    button.addEventListener('click', deleteEmployer.bind(null, button.id));
});


// Array.prototype.forEach.call(delButtons, function(button) {
//     button.addEventListener('click', addNewEmployer.bind(null, button.id));
// });

