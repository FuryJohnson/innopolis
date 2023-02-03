let loginButton = document.querySelector('.login-button');
let loginPopUp = document.querySelector('.login-popup');

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');
};