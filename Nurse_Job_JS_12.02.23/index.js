const JOBBUTTON = document.querySelector('.job');
const NURSEBUTTON = document.querySelector('.nurse');
const FIRSTNAMEINPUT = document.querySelector('#Firstname');
const LASTNAMEINPUT = document.querySelector('#Lastname');
const EMAILINPUT = document.querySelector('#email');
const PASSWORDINPUT = document.querySelector('#password');
const PASSWORD2INPUT = document.querySelector('#password2');
const CHECKBOXINPUT = document.querySelector('#checkbox');
const SUBMITBUTTON = document.querySelector('#submit');
const OUTPUT = document.querySelector('#output');


let jobSelected;

JOBBUTTON.addEventListener('click', () => {
  if (!jobSelected) {
    JOBBUTTON.classList.add('nurse');
    JOBBUTTON.classList.remove('job');
    NURSEBUTTON.classList.add('job');
    NURSEBUTTON.classList.remove('nurse');
    jobSelected = true;
  }
});

NURSEBUTTON.addEventListener('click', () => {
  if (jobSelected) {
    JOBBUTTON.classList.add('job');
    JOBBUTTON.classList.remove('nurse');
    NURSEBUTTON.classList.add('nurse');
    NURSEBUTTON.classList.remove('job');
    jobSelected = false;
  }
});

function validateFirstname() {
  return !FIRSTNAMEINPUT.value.trim() ? false : true
}


function validateLastname() {
  return LASTNAMEINPUT.value.trim() ? true : (OUTPUT.innerHTML = 'Please enter your Lastname.', false);
}

function validateEmail() {
  const EMAILCHECK = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!EMAILINPUT.value.match(EMAILCHECK)) {
    OUTPUT.innerHTML = 'Enter a valid email adress';
    return false;
  }
  return true;
}

function validatePassword() {
  if (!PASSWORDINPUT.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
    OUTPUT.innerHTML = 'Please enter a password that is at least 8 characters long and contains one letter, one number, and one special character.';
    return false;
  }
  return true;
}

function validatePasswordsMatch() {
  if (PASSWORDINPUT.value !== PASSWORD2INPUT.value) {
    OUTPUT.innerHTML = 'Please make sure your passwords match.';
    return false;
  }
  return true;
}

function validateCheckbox() {
  if (!CHECKBOXINPUT.checked) {
    OUTPUT.innerHTML = 'Please agree to the terms and conditions.';
    return false;
  }
  return true;

}

function validateForm() {
  if (
    validateFirstname() &&
    validateLastname() &&
    validateEmail() &&
    validatePassword() &&
    validatePasswordsMatch() &&
    validateCheckbox()
  ) return true;
  else return false;
}

if (validateForm()) {
  SUBMITBUTTON.classList.remove("not-active");
  SUBMITBUTTON.classList.add("active");
} else {
  SUBMITBUTTON.classList.remove("active");
  SUBMITBUTTON.classList.add("not-active");
}


SUBMITBUTTON.addEventListener('click', (event) => {
  event.preventDefault();
  if (validateForm()) {
    console.log({
      Firstname: FIRSTNAMEINPUT.value,
      Lastname: LASTNAMEINPUT.value,
      email: EMAILINPUT.value,
      password: PASSWORDINPUT.value,
      searching: jobSelected ? 'job' : 'nurse',
    });
    OUTPUT.innerHTML = 'You are succesfully registered!';

  }
});

const passwordEyes = document.querySelectorAll('.pass-eye');
passwordEyes.forEach((eye) => {
  eye.addEventListener('click', () => {
    const input = eye.previousElementSibling;
    if (input.type === 'password') {
      input.type = 'text';

    } else {
      input.type = 'password';
      eye.src = 'img/Password_eye.png';
    }
  });
});



function validateInput() {
  if (validateForm() && CHECKBOXINPUT.checked) {
    SUBMITBUTTON.classList.remove('not-active');
    SUBMITBUTTON.classList.add('active');
  } else {
    SUBMITBUTTON.classList.remove('active');
    SUBMITBUTTON.classList.add('not-active');
  }
}


FIRSTNAMEINPUT.addEventListener('change', validateInput);
LASTNAMEINPUT.addEventListener('change', validateInput);
EMAILINPUT.addEventListener('change', validateInput);
PASSWORDINPUT.addEventListener('change', validateInput);
PASSWORD2INPUT.addEventListener('change', validateInput);
CHECKBOXINPUT.addEventListener('change', validateInput);
