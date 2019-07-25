 
function colapseFunction() {
  document.getElementById("dropdown-list").classList.toggle("show");
}

 var dropdownContent = document.getElementById('dropdown-content');

 dropdownContent.addEventListener('click', function() {
    dropdownContent.classList.remove('show');
    console.log(2);
 });

 var dropDown = document.getElementById('nav-button');

 dropDown.addEventListener('click', function() {
    dropdownContent.classList.add('show');
    console.log(1);
 });