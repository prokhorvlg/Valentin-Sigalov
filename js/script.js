var scrolled = false;

window.onscroll = function() {
  scrolled = true;
}

setInterval(function(){
  if (scrolled) {
    scrolled = false;
    if (window.pageYOffset > 100){
      scrolledDown();
    }
    else {
      scrolledUp();
    }
  }
}, 150);

function scrolledDown(){
  var titleContainer = document.getElementById("titleContainer");
  var titleName = document.getElementById("titleName");
  var titleSecondary = document.getElementById("titleSecondary");


  titleSecondary.style.height = "0px";
  titleSecondary.style.opacity = "0";

  titleContainer.style.right = "calc(100% - 200px)";
  titleName.style.fontSize = "1em";

}

function scrolledUp(){
  var titleContainer = document.getElementById("titleContainer");
  var titleName = document.getElementById("titleName");
  var titleSecondary = document.getElementById("titleSecondary");

  titleSecondary.style.opacity = "1";
  titleSecondary.style.height = "40px";
  

  titleContainer.style.right = "0";
  titleName.style.fontSize = "6em";
  
}