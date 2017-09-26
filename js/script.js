var scrolled = false;

window.onscroll = function() {
  scrolled = true;
}

setInterval(function(){
  if (scrolled) {
    scrolled = false;
    if (window.pageYOffset > 500){
      scrolledDown();
    }
    else {
      scrolledUp();
    }
  }
}, 150);

function scrolledDown(){
  var titleContainer = document.getElementById("titleContainer");

  //titleContainer.style.position = "fixed";
}

function scrolledUp(){
  var titleContainer = document.getElementById("titleContainer");

  //titleContainer.style.position = "absolute";
}