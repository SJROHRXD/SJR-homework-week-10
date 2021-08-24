// GENERATED HTML //
const generatedHTML = function (teamWrite) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
/>
<link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
/>
<link rel="stylesheet" href="./styles.css">
<meta name="author" content="Sarah Jeanne Rohr">
<meta name="keywords" content="BootStrap, CSS, HTML, JavaScript, Jest">
<title>Team Generator 9000</title>
</head>

<body style="background-color: rgb(204, 240, 180)">

<div class="header">
    <div class="jumbotron" style="background-color: rgb(115, 136, 101)">
        <h1 class="display-3 text-black-80 text-center">Team Profile</h1>
    </div>
</div>

<div class="container-body container">
   <div class="row">
        ${teamWrite} 
    </div>
</div>

<footer class="footer text-black-70">
    <p id="foot" style="text-align: center; background-color: rgb(204, 240, 180);">Made with 🍔🍟🍦 - SJR, 2021.<br>
    This assignment was mean and I do NOT appreciate it.</p>
</footer>
</body>
</html>`
}

// EMPLOYEE / ROLE CARDS //
const makeEmpCards = function (arr) {
    let empEmojee = ``;
    let roleE = ``;

    if (arr.role === "Engineer") {
        empEmojee = `<i class="fas fa-code"></i>`
        roleE = `<i class="fas fa-code"></i> <a href="https://github.com/${arr.github}" target="_blank">${arr.github}</a>`
    } else if (arr.role === "Intern") {
        empEmojee = `<i class="fas fa-university"></i>`
        roleE = `<i class="fas fa-university"></i> ${arr.school}!`
    } else if (arr.role === "Manager") {
        empEmojee = `<i class="fas fa-marker"></i>`
        roleE = `<i class="fas fa-marker"></i> ${arr.officeNumber}`
    }
    return `

<div class="col-md-4 col-sm-6 col-12 col-lg-3 rounded" style="margin-bottom: 250px;">
    <div class="card shadow-lg mb-5">
        <div class="card-header" style="background-color: rgb(115, 136, 101);">
            <h4 class="text-white text-center">${arr.name}</h4>
            <h4 class="text-white text-center">${empEmojee}</i> ${arr.role}</h4>
        </div>
        <div class="card-body">
            <ul class="list-unstyled">
                <li><i class="fas fa-id-card-alt"></i> ${arr.id}</li>
                <li><i class="far fa-paper-plane"></i> <a href="mailto:${arr.email}">${arr.email}</a></li>
                <li>${roleE}</i>
            </u>
        </div>
    </div>
</div>
`
}

exports.generatedHTML = generatedHTML;
exports.makeEmpCards = makeEmpCards;