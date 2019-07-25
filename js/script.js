 var dropdownContent = document.getElementById('dropdown-content');

 dropdownContent.addEventListener(click, function() {
    dropdownContent.classList.remove('show');
 });

 var dropDown = document.getElementById('nav-button');

 dropDown.addEventListener('click', function() {
    dropdownContent.classList.add('show');
 });