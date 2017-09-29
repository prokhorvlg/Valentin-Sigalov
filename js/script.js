var scrolled = false;

window.onscroll = function() {
  scrolled = true;
}

var scrollCalledDown = false;
var scrollCalledUp = false;

setInterval(function(){
  if (scrolled) {
    scrolled = false;
    if (window.pageYOffset > 100){
      if (scrollCalledDown == false){
        scrollCalledDown = true;
        scrolledDown();
        setTimeout(function(){ scrollCalledDown = false; }, 400);
      }
    }
    else {
      if (scrollCalledUp == false){
        scrollCalledUp = true;
        scrolledUp();
        setTimeout(function(){ scrollCalledUp = false; }, 400);
      }
    }
  }
}, 50);

var pushTimeout;
var fontSizeTimeout;
var secondaryOpacityTimeout;
var primaryFontSizeTimeout;



function scrolledDown(){
  
    var titleContainer = document.getElementById("titleContainer");
    var titleName = document.getElementById("titleName");
    var titleSecondary = document.getElementById("titleSecondary");
    var titleRule = document.getElementById("titleRule");
    var titleContainerContentInner = document.getElementById("titleContainerContentInner");
    var titleContainerContentImage = document.getElementById("titleContainerContentImage");

    clearTimeout(pushTimeout);
    clearTimeout(fontSizeTimeout);
    clearTimeout(secondaryOpacityTimeout);
    clearTimeout(primaryFontSizeTimeout);

    titleSecondary.style.height = "0px";
    titleSecondary.style.opacity = "0";

    titleName.style.fontSize = "1em";
    primaryFontSizeTimeout = setTimeout( function(){ 
      titleContainerContentImage.style.paddingLeft = "35px"; 
      titleName.style.width = "200px"; 
    }, 200);

    titleContainerContentInner.style.paddingTop = "140px";
    titleContainerContentInner.style.marginLeft = "0px";

    titleContainer.style.alignItems = "flex-start";
    titleContainer.style.paddingTop = "35px";

    pushTimeout = setTimeout( function(){ titleContainer.style.right = "calc(100% - 200px)"; }, 200);

    titleRule.style.width = "200px";
    //titleRule.style.marginTop = "25px";
}

function scrolledUp(){
  var titleContainer = document.getElementById("titleContainer");
  var titleName = document.getElementById("titleName");
  var titleSecondary = document.getElementById("titleSecondary");
  var titleRule = document.getElementById("titleRule");
  var titleContainerContentInner = document.getElementById("titleContainerContentInner");
   var titleContainerContentImage = document.getElementById("titleContainerContentImage");

  clearTimeout(pushTimeout);
  clearTimeout(fontSizeTimeout);
  clearTimeout(secondaryOpacityTimeout);
  clearTimeout(primaryFontSizeTimeout);

  titleContainerContentImage.style.paddingLeft = "0px";

  //titleRule.style.marginTop = "0px";
  
  pushTimeout = setTimeout( function(){ titleContainer.style.right = "0px"; }, 10);
  fontSizeTimeout = setTimeout( function(){ 
    titleName.style.fontSize = "6em"; 
    titleContainerContentInner.style.paddingTop = "0px"; 
    titleContainerContentInner.style.marginLeft = "150px"; 
    titleSecondary.style.height = "40px"; 
    titleRule.style.width = "960px";  
  }, 200);
  
  titleName.style.width = "960px";

  secondaryOpacityTimeout = setTimeout( function(){ titleSecondary.style.opacity = "1"; }, 300);

  titleContainer.style.alignItems = "flex-start";
  titleContainer.style.paddingTop = "calc(50vh - 100px)";


  
}