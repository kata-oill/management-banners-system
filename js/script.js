/* --- CLOSE SIDE MENU --- */

$(document).ready(function() {
    $('#hamburger').on('click', function() {
        $('.main-logo').toggleClass('isClosed');
        $('.sidebar').toggleClass('isClosed');
        $('.side-title').toggleClass('isClosed');
        $('.manager-bar').toggleClass('isClosed');
    });
});

$(".hamburger-mobile").click(function() {
  $(this).toggleClass("on");
  $(".mobile-list-menu").slideToggle();
  return false;
});


$(document).ready(function() {
    $('#mobile-hamburger').on('click', function() {
        $('#left').toggleClass('mobileIsClosed');
    });
});




















