function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal(){
  modalbg.style.display = "none";
}
//Checks if the email entered is valid
function isValidEmail(){
  const email = document.getElementById("email").value;
  if(emailRegExp.test(email)){
    return true
  }else{
    return false
  }
}

function valide(){
  const isEmail  = isValidEmail()
}