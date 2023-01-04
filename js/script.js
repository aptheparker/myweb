let randomNumber = Math.round(100 * Math.random());

//var for button
const startButton = document.querySelector('.start_btn');
const openButton = document.querySelector('.modal_btn');
const closeButton = document.querySelector('.close_btn');
const newButton = document.querySelector('.newNum_btn');
const submitButton = document.querySelector('.submit_btn');

//var for function
const result = document.querySelector('.result');
const modal = document.querySelector('#modal');
const loading = document.querySelector('.result_loading');

//function
function calculator() {
  let fieldValue = document.querySelector('#field_value');
  let fieldValue_int = Number(fieldValue.value);

  const fieldResult = document.querySelector('.field_result');
  const totalResult = document.querySelector('.total_result');

  result.style.display = 'none';
  loading.style.display = 'flex';

  setTimeout(function () {
    result.style.display = 'flex';
    loading.style.display = 'none';

    fieldResult.innerText = fieldValue_int;
    totalResult.innerText = fieldValue_int * 365;
  }, 1800);
}

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

function submitNumber() {
  let randomValue = document.querySelector('#random_value');
  let randomValue_int = Number(randomValue.value);

  if (randomValue_int == randomNumber) {
    alert('You got it right!!');
  } else if (randomValue_int >= randomNumber) {
    alert('Too large! Try again!');
  } else if (randomValue_int <= randomNumber) {
    alert('Too small! Try again!');
  } else {
    alert('Error...');
  }
}

function newNumber() {
  randomNumber = Math.round(100 * Math.random());
  alert('New random number generated. Guess the number and submit it.');
}

//background clicking
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

//eventListener
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);
submitButton.addEventListener('click', submitNumber);
newButton.addEventListener('click', newNumber);

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
