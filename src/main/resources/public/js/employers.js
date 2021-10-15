function deleteEmployer(employerName) {
    fetch('http://localhost:7000/employers?name=' + employerName, {
            method: 'Delete',
        }
    ).then(res => window.location.reload = window.location.reload(true));


}

function validateEmployer(name, sector){
    if ((name.length < 2 || name.length > 150) || (name.includes('$') || name.includes('@') || name.includes('^') || name.includes('%') || name.includes('~'))) {
        alert("Employer name cannot be less than 2 characters, more than 150 characters, or include $, @, ^, %, ~!");
        return false
    }
    if ((sector.length < 2 || sector.length > 100) ||
        (sector.includes('$') || sector.includes('@') || sector.includes('^') || sector.includes('%') || sector.includes('~')) ||
        (/\d/.test(sector))){
        alert("Employer sector cannot be less than 2 characters, more than 100 characters, or include any digits or $, @, ^, %, ~!");
        return false
    }
    return true
}


function addNewEmployer() {
    const name = document.getElementById("employerName").value;
    const sector = document.getElementById("sector").value;
    const summary = document.getElementById("summary").value;
    if (validateEmployer(name, sector)){
        fetch('http://localhost:7000/employers?name=' + name + "&sector=" + sector + "&summary=" + summary,{
                method: 'POST',
            }
        ).then(res => window.location.reload = window.location.reload(true));
    }
}

let delButtons = document.querySelectorAll("li > button")
Array.prototype.forEach.call(delButtons, function(button) {
    button.addEventListener('click', deleteEmployer.bind(null, button.id));
});


