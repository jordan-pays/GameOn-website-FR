
//allows the click of the burger menu to display the site menu
function editNav() {
  var x = document.getElementById("myTopnav");

  document.getElementById("mainNavbar").style.paddingRight = "40px"
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    document.getElementById("mainNavbar").style.paddingRight = "0px"
    x.className = "topnav";
  }
}

//This function removes 13 years from today's date in order to limit the age of people who register
function dateMax() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear() - 13;

  if (day < 10) {
    day = '0' + day;
  }

  if (month < 10) {
    month = '0' + month;
  }

  let limit = year + '-' + month + '-' + day;
  date_input.setAttribute("max", limit);
}

//Regex which allows to know if an email is in the conventional format
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const first_input = document.getElementById("first")
const last_input = document.getElementById("last")
const email_input = document.getElementById("email")
const date_input = document.getElementById("birthdate")
const quantity_input = document.getElementById("quantity")
const location_check = document.getElementsByName("location");
const cu_check = document.getElementById("checkbox1")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form and call the display functions 
function launchModal() {
  modalbg.style.display = "block";
  dateMax()
  isValidFirst()
  isValidLast()
  isValidEmail()
  isValidDate()
  isValidCu()
  isValidQuantity()
  isValidLocation()
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

/* checks if the first name entered contains more than 2 characters
  *return a boolean relative to the quoted condition
*/
function isValidFirst() {
  if (first_input.value == "" || first_input.value.length < 2) {
    //this part allows to put in red the frame of the input and to display a text below the input
    first_input.parentElement.setAttribute('data-error-visible', 'true');
    //this part allows you to put the desired text below the input
    first_input.parentElement.setAttribute('data-error', 'Votre prénom doit contenir au moins 2 lettres');
    return false
  } else {
    //this part allows to remove the red frame from the input and to undisplay the text below the input
    first_input.parentElement.setAttribute('data-error-visible', 'false');
    return true

  }
}

/* checks if the last name entered contains more than 2 characters
  *return a boolean relative to the quoted condition
*/
function isValidLast() {
  if (last_input.value == "" || last_input.value.length < 2) {
    //this part allows to put in red the frame of the input and to display a text below the input
    last_input.parentElement.setAttribute('data-error-visible', 'true');
    //this part allows you to put the desired text below the input
    last_input.parentElement.setAttribute('data-error', 'Votre nom doit contenir au moins 2 lettres');
    return false
  } else {
    //this part allows to remove the red frame from the input and to undisplay the text below the input
    last_input.parentElement.setAttribute('data-error-visible', 'false');
    return true

  }
}

/* check if the email entered is conventional
  *return a boolean relative to the quoted condition
*/
function isValidEmail() {
  if (emailRegExp.test(email_input.value)) {
    //this part allows to remove the red frame from the input and to undisplay the text below the input
    email_input.parentElement.setAttribute('data-error-visible', 'false');
    return true
  } else {
    //this part allows to put in red the frame of the input and to display a text below the input
    email_input.parentElement.setAttribute('data-error-visible', 'true');
    //this part allows you to put the desired text below the input
    email_input.parentElement.setAttribute('data-error', 'L\'email renseigné n\'est pas dans un format conventionnel');
    return false
  }
}

/* check if the date entered is not empty
  *return a boolean relative to the quoted condition
*/
function isValidDate() {
  if (date_input.value == "") {
    //this part allows to put in red the frame of the input and to display a text below the input
    date_input.parentElement.setAttribute('data-error-visible', 'true');
    //this part allows you to put the desired text below the input
    date_input.parentElement.setAttribute('data-error', 'Veuillez renseigner une date de naissance');
    return false
  } else {
    //this part allows to remove the red frame from the input and to undisplay the text below the input
    date_input.parentElement.setAttribute('data-error-visible', 'false');
    return true
  }
}

/* check if the quantity entered is not empty
  *return a boolean relative to the quoted condition
*/
function isValidQuantity() {
  if (quantity_input.value == "") {
    //this part allows to put in red the frame of the input and to display a text below the input
    quantity_input.parentElement.setAttribute('data-error-visible', 'true');
    //this part allows you to put the desired text below the input
    quantity_input.parentElement.setAttribute('data-error', 'Veuillez renseigner une valeur');
    return false
  } else {
    //this part allows to remove the red frame from the input and to undisplay the text below the input
    quantity_input.parentElement.setAttribute('data-error-visible', 'false');
    return true
  }
}

/* check if the location has been choice
  *return a boolean relative to the quoted condition
*/
function isValidLocation() {
  let isLocate = false;
  let i = 0;
  while (i < location_check.length && !isLocate) {
    isLocate = location_check[i].checked
    i++
  }
  if (isLocate) {
    location_check[0].parentElement.setAttribute('data-error-visible', 'false');
    return true
  } else {
    //this part allows to put in red the frame of the input and to display a text below the input
    location_check[0].parentElement.setAttribute('data-error-visible', 'true');
    //this part allows you to put the desired text below the input
    location_check[0].parentElement.setAttribute('data-error', 'Veuillez choisir une ville');
    return false
  }
}

/* check if the cu has been checked
  *return a boolean relative to the quoted condition
*/
function isValidCu() {
  if (cu_check.checked) {
    //this part allows to remove the red frame from the input and to undisplay the text below the input
    cu_check.parentElement.setAttribute('data-error-visible', 'false');
    return true
  } else {
    //this part allows to put in red the frame of the input and to display a text below the input
    cu_check.parentElement.setAttribute('data-error-visible', 'true');
    //this part allows you to put the desired text below the input
    cu_check.parentElement.setAttribute('data-error', 'Vous êtes obliger de valider les conditions d\'utilisations');
    return false
  }
}

//validate the form and display the thank you text only if all the conditioning functions on the inputs return true 
function validate(event) {
  event.preventDefault()
  if (isValidFirst() && isValidLast() && isValidEmail() && isValidDate() && isValidQuantity() && isValidLocation() && isValidCu()) {
    //displays all children of formData
    formData.forEach(element => {
      element.style.display = "none"
    });
    document.getElementById("valid_div").setAttribute("style", "height:412px;align-items:center;justify-content:center;display:flex")
    document.getElementById("valid_div").innerHTML = '<h1 class="valid_text"> Merci pour votre inscription </h1>'
    document.getElementById("submit").value = "Fermer";
    document.getElementById("submit").addEventListener("click", closeModal)
  }
}

//DOM listener 
first_input.addEventListener("change", isValidFirst)
last_input.addEventListener("change", isValidLast)
email_input.addEventListener("change", isValidEmail)
date_input.addEventListener("change", isValidDate)
quantity_input.addEventListener("change", isValidQuantity)
cu_check.addEventListener("change", isValidCu)

//add listener for each city  
location_check.forEach(city=>{
  city.addEventListener("change",isValidLocation)
})
/* Navigation part */

function clickNav(id) {
  const tabNav = document.getElementsByClassName("element_nav")
  let i = 0
  while (i < tabNav.length) {
    const isActiveBis = isActive("active", tabNav[i])
    if (isActiveBis && i != id) {
      removeActive("active", tabNav[i])
    } else if (!isActiveBis && i == id) {
      addActive("active", tabNav[i])
    }

    i++
  }
  addActive("active", tabNav[id])
}

function isActive(classActive, dom) {
  return dom.classList.contains(classActive)
}

function removeActive(classActive, dom) {
  dom.classList.remove(classActive)
}

function addActive(classActive, dom) {
  dom.classList.add(classActive)
}

