function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const first_input = document.getElementById("first")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formData.forEach(element => {
    element.setAttribute('data-error-visible', 'true');
  });
}

function closeModal() {
  modalbg.style.display = "none";
}

//Checks if the email entered is valid
function isValidEmail() {
  const email = document.getElementById("email").value;
  if (emailRegExp.test(email)) {
    return true
  } else {
    return false
  }
}

//Checks if the location has been choice
function isValidLocation() {
  const list_location = document.getElementsByName("location");
  let isLocate = false;
  let i = 0;
  while (i < list_location.length && !isLocate) {
    isLocate = list_location[i].checked
    i++
  }

  if (isLocate) {
    return true
  } else {
    return false
  }
}

first_input.addEventListener("focusout",(event) => {
  if(event.target.value == "" || event.target.value.length<2 ){
    first_input.parentElement.setAttribute('data-error-visible', 'true');
    first_input.parentElement.setAttribute('data-error', 'Votre prénom doit contenir au moins 2 lettres');
  }else{
    first_input.parentElement.setAttribute('data-error-visible', 'false');
  }
})

//Checks if the cu is check
function isValidCu() {
  const cu = document.getElementById("checkbox1");
  return cu.checked
}

function validate() {
  const isEmail = isValidEmail()

  if (isEmail) {
    const isLocation = isValidLocation()

    if (isLocation) {
      const isCu = isValidCu()

      if (isCu) {
        return true

      } else {

        alert("Vous devez accepter les conditions d'utilisation")
        return false

      }

    } else {

      alert("Vous devez choisir une ville")
      return false

    }

  } else {

    alert("Vous n'avez pas soumis une adresse email valide")
    return false;
    
  }
}