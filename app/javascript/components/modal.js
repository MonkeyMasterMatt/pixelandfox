
//   // Get the modal
var modal = document.getElementById('myModal');

// // Get the button that opens the modal
var btn1 = document.querySelector(".nose");
var btn2 = document.querySelector(".nose-text");

// // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}

// // When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
  if (event.target == aboutModal) {
    aboutModal.style.display = "none";
  }
}

var aboutModal = document.getElementById('about-modal');

var aboutBtn = document.querySelector(".about-link");

aboutBtn.onclick = function() {
  aboutModal.style.display = "block";
}
