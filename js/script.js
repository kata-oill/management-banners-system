 
function colapseFunctionWallet() {
  document.getElementById("dropdown-list-wallet").classList.toggle("show");
}

 var dropdownContentWallet = document.getElementById('dropdown-list-wallet');
 var sideMenuBoolean = false;

 dropdownContentWallet.addEventListener('click', function() {
    event.preventDefault();
    dropdownContentWallet.classList.remove('show');
    console.log(2);
 });

 var dropDownWallet = document.getElementById('nav-button-wallet');

 dropDownWallet.addEventListener('click', function() {
    event.preventDefault();
    dropdownContentWallet.classList.add('show');
    dropdownContentNotification.classList.remove('show');
    console.log(1);
 });

 function colapseFunctionNotification() {
  document.getElementById("dropdown-list-notification").classList.toggle("show");
}

  var dropdownContentNotification = document.getElementById('dropdown-list-notification');

 dropdownContentNotification.addEventListener('click', function() {
    event.preventDefault();
    dropdownContentNotification.classList.remove('show');
    console.log(4);
 });

 var dropDownNotification = document.getElementById('nav-button-notification');

 dropDownNotification.addEventListener('click', function() {
    event.preventDefault();
    dropdownContentNotification.classList.add('show');
    dropdownContentWallet.classList.remove('show');
    console.log(3);
 });

function openSideMenu() {
    document.querySelector('.side-title').classList.add('show');
    document.querySelector('.main-logo').classList.add('show');
    sideMenuBoolean = true;
}

function closeSideMenu() {
    document.querySelector('.side-title').classList.remove('show');
    document.querySelector('.main-logo').classList.remove('show');
    sideMenuBoolean = false;
}

function toggleSideMenu() {
   sideMenuBoolean? closeSideMenu() : openSideMenu();
}

var hamburger = document.getElementById('hamburger');

document.querySelector('.hamburger').addEventListener('click', function() {
  event.preventDefault();
  toggleSideMenu()
});























