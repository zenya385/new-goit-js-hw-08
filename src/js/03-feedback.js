import throttle from 'lodash.throttle';
// import '../css/common.css';
// import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const password = localStorage.getItem(STORAGE_KEY);
popularTextareaPas();

form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function popularTextareaPas() {
  const savePass = JSON.parse(password);
  if (savePass) {
    // console.log(savePass);
    input.value = savePass.email;
    textarea.value = savePass.password;
  }
}
form.addEventListener('submit', onSubmitEmail);

function onSubmitEmail(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
