/* Damit man auf der App scrollen kann*/

.slowup {
   position: fixed;
   z-index: 2000;
   width: 60px; height: 50px;
   right: 0; bottom: 140px;
   transition: opacity 2s 0.5s
}
document.querySelector('.slowup').setAttribute('style','opacity:0');

document.addEventListener ('scroll',function () {
  document.querySelector('.slowup').setAttribute('style','opacity:1');
});
