const loginSwitch = document.getElementsByClassName('nav-login');
console.log(loginSwitch);

const signupSwitch = document.getElementsByClassName('nav-signup');
console.log(signupSwitch);

const loginContent = document.getElementsByClassName('login-content');
console.log(loginContent);

const signupContent = document.getElementsByClassName('signup-content');
console.log(signupContent);

function toogleOpen(item) {
  if (item == 'login') {
    console.log('login');
    signupSwitch[0].classList.remove('active');
    loginSwitch[0].classList.add('active');
    loginContent[0].classList.remove('collapse');
    signupContent[0].classList.add('collapse');
  } else {
    console.log('signup');
    signupSwitch[0].classList.add('active');
    loginSwitch[0].classList.remove('active');
    loginContent[0].classList.add('collapse');
    signupContent[0].classList.remove('collapse');
  }
}
