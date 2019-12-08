/* --- CLOSE SIDE MENU --- */

$(document).ready(function() {
    $('#hamburger').on('click', function() {
        $('.main-logo').toggleClass('closed');
        $('.sidebar').toggleClass('closed');
        $('.side-title').toggleClass('closed');
        $('.manager-bar').toggleClass('closed');
    });
});

$(".hamburger-mobile").click(function() {
  $(this).toggleClass("on");
  $(".mobile-list-menu").slideToggle();
  return false;
});


$(document).ready(function() {
    $('#mobile-hamburger').on('click', function() {
        $('#left').toggleClass('mobile-closed');
    });
});




















