




    let rotated = false;
btn.addEventListener("mouseover", (event) => {
    setTimeout(function() {
      modal.style.display = "block";
    }, 1000);

    let earLeft = document.querySelector('.ear-left');
    deg = rotated ? 0 : 90;
    earLeft.style.webkitTransform = 'rotate('+deg+'deg)';
    earLeft.style.mozTransform    = 'rotate('+deg+'deg)';
    earLeft.style.msTransform     = 'rotate('+deg+'deg)';
    earLeft.style.oTransform      = 'rotate('+deg+'deg)';
    earLeft.style.transform       = 'rotate('+deg+'deg)';
  })
btn.addEventListener("mouseout", (event) => {
    setTimeout(function() {
      modal.style.display = "block";
    }, 1000);
    let rotated = false;
    let earLeft = document.querySelector('.ear-left');
    deg = rotated ? 0 : 90;
    earLeft.style.webkitTransform = 'rotate('+deg+'deg)';
    earLeft.style.mozTransform    = 'rotate('+deg+'deg)';
    earLeft.style.msTransform     = 'rotate('+deg+'deg)';
    earLeft.style.oTransform      = 'rotate('+deg+'deg)';
    earLeft.style.transform       = 'rotate('+deg+'deg)';
  })

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



  const navbarLinks = document.querySelector('.navbar-wagon-right');
  const hamburgerMenu = document.querySelector('.dropdown-toggle');
  //hamburgerMenu.addEventListener("mouseenter", (event) => {
    //if(navbarLinks.dataset.clicked === 'false') {
      //navbarLinks.classList.add('navbar-wagon-reveal');
      //navbarLinks.dataset.clicked = 'true';
    //} else {
      //navbarLinks.classList.remove('navbar-wagon-reveal');
      //navbarLinks.dataset.clicked = 'false';
    //}
  //})
  hamburgerMenu.addEventListener("click", (event) => {
    if(navbarLinks.dataset.clicked === 'false') {
      navbarLinks.classList.add('navbar-wagon-reveal');
      navbarLinks.dataset.clicked = 'true';
    } else {
      navbarLinks.classList.remove('navbar-wagon-reveal');
      navbarLinks.dataset.clicked = 'false';
    }
  })

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var menu = 0, movingDivObj;
var menu2 = 0, movingDivObj2;
var menu3 = 0, movingDivObj3;
setInterval(function(){
  if(menu == 0){
    Menu_Move(20,1);
  } else {
    Menu_Move(-20,0);
  };
  if(menu2 == 0){
    Menu_Move2(-20,1);
  } else {
    Menu_Move2(20,0);
  };
  if(menu3 == 0){
    Menu_Move3(20,1);
  } else {
    Menu_Move3(-20,0);
  };
},1500);
function Menu_Move(dirn,tog) {
  var currentPosition = parseInt(movingDivObj.style.top);
  movingDivObj.style.top = currentPosition+dirn+"px";
  menu = tog;
}
window.onload= function(){
  movingDivObj=document.querySelector(".service_1");
  movingDivObj.style.top="20px";

  movingDivObj2=document.querySelector(".service_2");
  movingDivObj2.style.top="40px";

  movingDivObj3=document.querySelector(".service_3");
  movingDivObj3.style.top="20px";
};

function Menu_Move2(dirn,tog) {
  var currentPosition2 = parseInt(movingDivObj2.style.top);
  movingDivObj2.style.top = currentPosition2+dirn+"px";
  menu2 = tog;
}

function Menu_Move3(dirn,tog) {
  var currentPosition3 = parseInt(movingDivObj3.style.top);
  movingDivObj3.style.top = currentPosition3+dirn+"px";
  menu3 = tog;
}
