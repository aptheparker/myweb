const codeButton = document.querySelector('.code_btn');
password = 1004;

//checking the code input. Comparing the codeValue_int && the correct password.
function codeCheck() {
  let codeValue = document.querySelector('#code_value');
  let codeValue_int = Number(codeValue.value);

  if (codeValue_int == password) {
    window.location.href = 'class.html';
  } else {
    alert('Wrong Code. Try again');
  }
}

codeButton.addEventListener('click', codeCheck);
