import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textareaPas: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onSubmitEmail);
refs.textareaPas.addEventListener('input', throttle(onTextareaPas, 500));
refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
});

popularTextareaPas();

function onSubmitEmail(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onTextareaPas(e) {
  const pass = e.target.value;
  localStorage.setItem(STORAGE_KEY, pass);
 
}

function popularTextareaPas() {
  const savePass = localStorage.getItem(STORAGE_KEY);
  if (savePass) {
    refs.textareaPas.value = savePass;
  }
}
