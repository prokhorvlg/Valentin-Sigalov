
var scrollListener = true;

var scrollCalledDown = false;
var scrollCalledUp = false;
var lastScrollTop = 0;

function checkHeight(){
    if (window.pageYOffset > 50){
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

checkHeight();

var scrolledLock = false;
var scrollLeeway = 200;
var scrollAnimMilliseconds = 400;

  $(window).scroll(function(event){
    if (scrollListener) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) { // if you're scrolling down...
      if (scrolledLock == false) { // if the lock hasn't been triggered...
        if ($(this).scrollTop() < ($(window).height() - scrollLeeway)){ // if you are scrolling within the header region...
          scrolledLock = true; // lock scrolling...
          setTimeout( function() { scrolledLock = false; }, scrollAnimMilliseconds); // ...until the animation is over
          $(window).scrollTo('#graphicDesignIntro', scrollAnimMilliseconds); // and animate the scroll
          scrolledDown();
        }
      }
    } 
    else { // and vice versa when scrolling up
      if (scrolledLock == false){
        if ($(this).scrollTop() < ($(window).height() - scrollLeeway)){
          scrolledLock = true;
          setTimeout( function() { scrolledLock = false; }, scrollAnimMilliseconds);
          $(window).scrollTo(0, scrollAnimMilliseconds);
          scrolledUp();
        }
      }
    }
     lastScrollTop = st;
   }
  });

var stage1T;
var stage2T;
var stage3T;
var stage4T;

function scrolledDown(){
  
  var titleContainer = document.getElementById("titleContainer");

  var titleContainerContent1Inner = document.getElementById("titleContainerContent1Inner");
  var titleContainerContent1InnerIMG = document.getElementById("titleContainerContent1InnerIMG");

  var titleContainerContent1 = document.getElementById("titleContainerContent1");

  var titleContainerContent2Image1 = document.getElementById("titleContainerContent2Image1");
  var titleContainerContent2Image2 = document.getElementById("titleContainerContent2Image2");
  var titleContainerContent2Image3 = document.getElementById("titleContainerContent2Image3");

  var titleName = document.getElementById("titleName");
  var titlehr = document.getElementById("titlehr");
  var scrollArrow = document.getElementById("scrollArrow");
  var titleContainerContent2 = document.getElementById("titleContainerContent2");

  var titleSidebarContainer = document.getElementById("titleSidebarContainer");

  clearTimeout(stage1T);
  clearTimeout(stage2T);
  clearTimeout(stage3T);
  clearTimeout(stage4T);

  titleContainerContent1Inner.style.width = "140px";
  titleContainerContent1Inner.style.height = "140px";
  titleContainerContent1Inner.style.marginTop = "-20px";
  titleContainerContent1InnerIMG.style.width = "120px";

  titleContainerContent1.style.height = "30vh";

  titleContainerContent2Image1.style.marginBottom = "250px";
  titleContainerContent2Image2.style.marginBottom = "250px";
  titleContainerContent2Image3.style.marginBottom = "250px";

  titleContainerContent2Image1.style.opacity = "0";
  titleContainerContent2Image2.style.opacity = "0";
  titleContainerContent2Image3.style.opacity = "0";

  titleName.style.fontSize = "16px";
  titleName.style.letterSpacing = "0.1em";
  titleName.style.fontWeight = "400";

  titlehr.style.width = "200px";
  titlehr.style.marginTop = "-20px";
  scrollArrow.style.opacity = "0";

  titleContainerContent2.style.height = "65vh";

  stage2T = setTimeout( function(){ 

    titleContainerContent2Image1.style.display = "none";
    titleContainerContent2Image2.style.display = "none";
    titleContainerContent2Image3.style.display = "none";

    titleContainer.style.right = "calc(100% - 200px)";

    titleSidebarContainer.style.display = "block";
    

  }, 300);

  stage3T = setTimeout( function(){ 

    titleSidebarContainer.style.opacity = "1";

  }, 405);

}

function scrolledUp(){

  var titleContainer = document.getElementById("titleContainer");

  var titleContainerContent1Inner = document.getElementById("titleContainerContent1Inner");
  var titleContainerContent1InnerIMG = document.getElementById("titleContainerContent1InnerIMG");

  var titleContainerContent1 = document.getElementById("titleContainerContent1");

  var titleContainerContent2Image1 = document.getElementById("titleContainerContent2Image1");
  var titleContainerContent2Image2 = document.getElementById("titleContainerContent2Image2");
  var titleContainerContent2Image3 = document.getElementById("titleContainerContent2Image3");

  var titleName = document.getElementById("titleName");
  var titlehr = document.getElementById("titlehr");
  var scrollArrow = document.getElementById("scrollArrow");
  var titleContainerContent2 = document.getElementById("titleContainerContent2");

  var titleSidebarContainer = document.getElementById("titleSidebarContainer");
  var titleContainerContent1Scroll = document.getElementById("titleContainerContent1Scroll");

  clearTimeout(stage1T);
  clearTimeout(stage2T);
  clearTimeout(stage3T);
  clearTimeout(stage4T);

  //titleContainer.style.position = "fixed";

  titleContainer.style.right = "0";

    titleContainerContent1.style.height = "47vh";
    titleContainerContent2.style.height = "48vh";

    titleSidebarContainer.style.opacity = "0";

  stage2T = setTimeout( function(){ 

    titleContainerContent2Image1.style.display = "block";
    titleContainerContent2Image2.style.display = "block";
    titleContainerContent2Image3.style.display = "block";

    titleContainerContent1Inner.style.width = "180px";
    titleContainerContent1Inner.style.height = "180px";
    titleContainerContent1Inner.style.marginTop = "0px";
    titleContainerContent1InnerIMG.style.width = "159px";

    titleName.style.fontSize = "30px";
    titleName.style.letterSpacing = "1.14em";
    titleName.style.fontWeight = "300";

    titlehr.style.width = "300px";
    titlehr.style.marginTop = "16px";
    scrollArrow.style.opacity = "1";

    titleSidebarContainer.style.display = "none";
    
  }, 300);

  stage3T = setTimeout( function(){ 

    titleContainerContent2Image1.style.marginBottom = "-5px";
    titleContainerContent2Image2.style.marginBottom = "-5px";
    titleContainerContent2Image3.style.marginBottom = "-5px";

    titleContainerContent2Image1.style.opacity = "1";
    titleContainerContent2Image2.style.opacity = "1";
    titleContainerContent2Image3.style.opacity = "1";

  }, 315);

}

function scrollToGD(){
  scrollListener = false;
  setTimeout( function(){ scrollListener = true; checkHeight(); }, 300);
  $(window).scrollTo('#graphicDesignIntro', scrollAnimMilliseconds);
  checkHeight();
}

function scrollToWD(){
  scrollListener = false;
  setTimeout( function(){ scrollListener = true; checkHeight(); }, 300);
  $(window).scrollTo('#webDevIntro', scrollAnimMilliseconds);
  checkHeight();
}

function scrollTo3D(){
  scrollListener = false;
  setTimeout( function(){ scrollListener = true; checkHeight(); }, 300);
  $(window).scrollTo('#3dModelIntro', scrollAnimMilliseconds);
  checkHeight();
}