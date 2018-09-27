let rotated = false;

setInterval(function(){
  let earRight = document.querySelector('.ear-right');
  deg = rotated ? 0 : 90;
    earRight.style.webkitTransform = 'rotate('+deg+'deg)';
    earRight.style.mozTransform    = 'rotate('+deg+'deg)';
    earRight.style.msTransform     = 'rotate('+deg+'deg)';
    earRight.style.oTransform      = 'rotate('+deg+'deg)';
    earRight.style.transform       = 'rotate('+deg+'deg)';
    rotated = !rotated;
 }, 5000);





