function editNav() {
  var x = document.getElementById("myTopnav");

  document.getElementById("mainNavbar").style.marginRight = "40px"
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
  document.getElementById("mainNavbar").style.marginRight = "0px"
    x.className = "topnav";
  }
}

function dateMax (){
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() +1;
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

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const carRegExp = /[a-zA-Z]+/g // ou /[^0-9]+/g

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

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  dateMax()
  isValidFirst()
  isValidLast()
  isValidEmail()
  isValidDate()
  isValidCu()
  isValidQuantity()
}

function closeModal() {
  modalbg.style.display = "none";
}

// Chek the first name
function isValidFirst (){
  debugger
  if(first_input.value == "" || first_input.value.length<2 ){
    first_input.parentElement.setAttribute('data-error-visible', 'true');
    first_input.parentElement.setAttribute('data-error', 'Votre prénom doit contenir au moins 2 lettres');
    return false
  }else{
    if(carRegExp.test(first_input.value)){
      first_input.parentElement.setAttribute('data-error-visible', 'false');
      return true
    }else{
      first_input.parentElement.setAttribute('data-error-visible', 'true');
      first_input.parentElement.setAttribute('data-error', 'Votre prénom ne peut pas contenir de chiffre');
      return false
    }
    
  }
}

// Chek the last name
function isValidLast () {
  if(last_input.value == "" || last_input.value.length<2 ){
    last_input.parentElement.setAttribute('data-error-visible', 'true');
    last_input.parentElement.setAttribute('data-error', 'Votre nom doit contenir au moins 2 lettres');
    return false
  }else{
    if(carRegExp.test(last_input.value)){
      last_input.parentElement.setAttribute('data-error-visible', 'false');
      return true
    }else{
      last_input.parentElement.setAttribute('data-error-visible', 'true');
      last_input.parentElement.setAttribute('data-error', 'Votre nom ne peut pas contenir de chiffre');
      return false
    }
    
  }
}

//Check if the email entered is valid
function isValidEmail() {
  if (emailRegExp.test(email_input.value)) {
    email_input.parentElement.setAttribute('data-error-visible', 'false');
    return true
  } else {
    email_input.parentElement.setAttribute('data-error-visible', 'true');
    email_input.parentElement.setAttribute('data-error', 'L\'email renseigné n\'est pas dans un format conventionnel');
    return false
  }
}

//Check if date is entered
function isValidDate() {
  if(date_input.value==""){
    date_input.parentElement.setAttribute('data-error-visible', 'true');
    date_input.parentElement.setAttribute('data-error', 'Veuillez renseigner une date de naissance');
    return false
  }else{
    date_input.parentElement.setAttribute('data-error-visible', 'false');
    return true
  }
}

//Check if quantity   is entered
function isValidQuantity() {
  if(quantity_input.value==""){
    quantity_input.parentElement.setAttribute('data-error-visible', 'true');
    quantity_input.parentElement.setAttribute('data-error', 'Veuillez renseigner une valeur');
    return false
  }else{
    quantity_input.parentElement.setAttribute('data-error-visible', 'false');
    return true
  }
}

//Check if the location has been choice
function isValidLocation() {
  let isLocate = false;
  let i = 0;
  while (i < location_check.length && !isLocate) {
    isLocate = location_check[i].checked
    i++
  }

  if (isLocate) {
    return true
  } else {
    return false
  }
}

//Check if the cu has been checked
function isValidCu() {
  if(cu_check.checked){
    cu_check.parentElement.setAttribute('data-error-visible', 'false');
    return true
  }else{
    cu_check.parentElement.setAttribute('data-error-visible', 'true');
    cu_check.parentElement.setAttribute('data-error', 'Vous êtes obliger de valider les conditions d\'utilisations');
    return false
  }
}


first_input.addEventListener("change",isValidFirst)
last_input.addEventListener("change",isValidLast)
email_input.addEventListener("change",isValidEmail)
date_input.addEventListener("change",isValidDate)
quantity_input.addEventListener("change",isValidQuantity)
cu_check.addEventListener("change",isValidCu)

function validate() {
  if(isValidFirst() && isValidLast() && isValidEmail() && isValidDate() && isValidQuantity() && isValidLocation() && isValidCu()){
    formData.forEach(element => {
      element.style.display = "none"
    });
    document.getElementById("valid_div").setAttribute("style", "height:412px;align-items:center;justify-content:center;display:flex")
    document.getElementById("valid_div").innerHTML = '<h1 class="valid_text"> Merci pour votre inscription </h1>'
    document.getElementById("submit").value = "Femer";
    document.getElementById("submit").addEventListener("click",closeModal)
    return false
  }else{
    return false
  }
}
