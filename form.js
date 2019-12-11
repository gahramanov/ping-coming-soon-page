const email = document.querySelector('#email')
const error = document.querySelector('#email-err')

email.addEventListener('input', () => {
  email.setCustomValidity('');
})

document.getElementById('submit').addEventListener('click', () => {
  if (!email.checkValidity()) {
    email.classList.add('email-err')
    error.classList.add('err-msg-show')
    email.setCustomValidity(' ');
  } else {
    email.classList.remove('input-error')
    error.classList.remove('err-msg-show')
  }
})