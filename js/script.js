 
/*function colapseFunctionWallet() {
  document.getElementById("dropdown-list-wallet").classList.toggle("show");
}

 var dropdownContentWallet = document.getElementById('dropdown-list-wallet');
 var sideMenuOpenState = false;

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
 */

 /* var sideMenuOpenState = false;

function openSideMenu() {
    document.querySelector('.side-title').style.visibility = 'visible';
    document.querySelector('.main-logo').style.visibility = 'visible';
    sideMenuOpenState = true;
}

function closeSideMenu() {
    document.querySelector('.side-title').style.visibility = 'hidden';
    document.querySelector('.main-logo').style.visibility = 'hidden';
    sideMenuOpenState = false;
}

function toggleSideMenu() {
  sideMenuOpenState? closeSideMenu() : openSideMenu(); 
}

var hamburger = document.getElementById('hamburger');

document.querySelector('.hamburger').addEventListener('click', function() {
  event.preventDefault();
  toggleSideMenu();
});

*/

/* --- CLOSE SIDE MENU --- */

$(document).ready(function() {
    $('#hamburger').on('click', function() {
        $('.main-logo').toggleClass('isClosed');
        $('.sidebar').toggleClass('isClosed');
        $('.side-title').toggleClass('isClosed');
    });
});


$(document).ready(function() {
    $('#mobile-hamburger').on('click', function() {
        $('#left').toggleClass('mobileIsClosed');
    });
});




















