var link = document.querySelector('.destinations__city');
var popup = document.querySelector('.destinations__slide');
var close = popup.querySelector('.destinations__slide-close');

link.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('destinations__slide-show');  
}, false);

close.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('destinations__slide-show');
}, false);

popup.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('destinations__slide-show');
}, false);

window.addEventListener('keydown', function (event) {
  if (event.keyCode == 27 && popup.classList.contains('destinations__slide-show')) {
    popup.classList.remove('destinations__slide-show');
  }
}, false);