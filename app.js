
// Menu items
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

// Menu click events
menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

// !--------------------------------------

// Modal items
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

// Modal Click events
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e)  => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
})

// !--------------------------------------

// Form validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');


// Show error message
const showError = (input, message) => {
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation error'

  const errorMessage = formValidation.querySelector('p');
  errorMessage.innerText = message;
}


// Show Valid message
const showValid = input => {
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation valid'
}


// Check required fields
const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showValid(input)
    }
  })
}

// Check input length 
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be at least ${max} characters`)
  } else {
    showValid(input);
  }
}

// Check passwords match
const passwordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, 'Password do not match')
  }
}


// Get fieldName
const getFieldName = input => input.name.charAt(0).toUpperCase() + input.name.slice(1);


// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([name, email, password, passwordConfirm]);
  checkLength(name, 3, 30);
  checkLength(password, 8, 25);
  checkLength(passwordConfirm, 8, 25);
  passwordMatch(password, passwordConfirm);
})

// !--------------------------------------