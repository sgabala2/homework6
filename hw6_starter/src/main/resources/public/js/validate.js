function validateUsername() {
    const name = document.getElementById("username");
    if (name.value.length < 1) {
        alert("Username cannot be empty!");
        return false;
    } else {
        return true;
    }
}

//  function validateEmployer() {
//     return true;
//     // const name = document.getElementById("name");
//     // if ((name.value.length < 2 || name.value.length > 150) || (name.value.includes('$') || !name.value.includes('@') || !name.value.includes('^') || !name.value.includes('%') || !name.value.includes('~'))) {
//     //     alert("Employer name cannot be less than 2 characters, more than 150 characters, or include $, @, ^, %, ~!");
//     //     return false;
//     // }
//     //
//     // const sector = document.getElementById("sector");
//     // if ((sector.value.length < 2 || sector.value.length > 100) ||
//     //     (sector.value.includes('$') || sector.value.includes('@') || sector.value.includes('^') || sector.value.includes('%') || sector.value.includes('~')) ||
//     //     (/\d/.test(sector.value))) {
//     //     alert("Employer sector cannot be less than 2 characters, more than 100 characters, or include any digits or $, @, ^, %, ~!");
//     //     return false;
//     // }
// }