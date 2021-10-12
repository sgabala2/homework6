function deleteEmployer(employerName) {
    fetch('http://localhost:7000/employers?name=' + employerName, {
            method: 'Delete',
        }
    ).then(res => window.location.reload = window.location.reload(true));
}

function addNewEmployer(employerName) {
    fetch('http://localhost:7000/employers?name=' + employerName, {
            method: 'Post',
        }
    ).then(res => window.location.reload = window.location.reload(true));
}

let delButtons = document.querySelectorAll("li > button")
Array.prototype.forEach.call(delButtons, function(button) {
    button.addEventListener('click', deleteEmployer.bind(null, button.id));
});

Array.prototype.forEach.call(delButtons, function(button) {
    button.addEventListener('click', addNewEmployer.bind(null, button.id));
});

