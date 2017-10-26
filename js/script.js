var scrollListener = true;

var scrollCalledDown = false;
var scrollCalledUp = false;
var lastScrollTop = 0;

var widthOfSidebar = 250;

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

var resizeTimer;

$(window).on('resize', function(e) {

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {

    checkHeight();
            
  }, 300);

});

var scrolledLock = false;
var scrollLeeway = 200;
var scrollAnimMilliseconds = 400;

$(window).scroll(function(event){
  if ($(window).width() < 1400) {

    var st = $(this).scrollTop();
    if (st > 800) { // if you're scrolling down...
      document.getElementById("backToTopMobile").style.height = "60px";
      document.getElementById("backToTopMobileInner").style.marginTop = "0px";
    
    }
    else { // and vice versa when scrolling up
      document.getElementById("backToTopMobile").style.height = "0px";
      document.getElementById("backToTopMobileInner").style.marginTop = "-100px";
    }
     lastScrollTop = st;
 }
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

}
else {


$(".GD").waypoint(function() {
  $('.titleSidebarNavItem').children('a').removeClass('activeNavItem');
  $('#navGraphicDesign').children('a').addClass('activeNavItem');
}, { offset: '0%'});
$(".WD").waypoint(function() {
  $('.titleSidebarNavItem').children('a').removeClass('activeNavItem');
  $('#navWebDev').children('a').addClass('activeNavItem');
}, { offset: '0%'});
$(".3D").waypoint(function() {
  $('.titleSidebarNavItem').children('a').removeClass('activeNavItem');
  $('#nav3DModeler').children('a').addClass('activeNavItem');
}, { offset: '0%'});

// Other Skills: OS
$(".OS").waypoint(function() {
  $('.titleSidebarNavItem').children('a').removeClass('activeNavItem');
  $('#navOtherSkills').children('a').addClass('activeNavItem');
}, { offset: '0%'});

// About Me: AM
$(".AM").waypoint(function() {
  $('.titleSidebarNavItem').children('a').removeClass('activeNavItem');
  $('#navAboutMe').children('a').addClass('activeNavItem');
}, { offset: '0%'});

// Contact Me: CM
$(".CM").waypoint(function() {
  $('.titleSidebarNavItem').children('a').removeClass('activeNavItem');
  $('#navContactMe').children('a').addClass('activeNavItem');
}, { offset: '0%'});

checkHeight();



  $(window).scroll(function(event){
    if (scrollListener) {
      if ($(window).width() > 1400) {

        var st = $(this).scrollTop();
        if (st > lastScrollTop) { // if you're scrolling down...
          if (scrolledLock == false) { // if the lock hasn't been triggered...
            if ($(this).scrollTop() < ($(window).height() - scrollLeeway)){ // if you are scrolling within the header region...
              scrolledLock = true; // lock scrolling...
              setTimeout( function() { scrolledLock = false; }, scrollAnimMilliseconds); // ...until the animation is over
              $(window).scrollTo('#aboutMeIntro', scrollAnimMilliseconds); // and animate the scroll
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
   }
  });

}

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
  var scrollArrow2 = document.getElementById("scrollArrow2");
  var scrollDown = document.getElementById("scrollDown");
  var titleContainerContent2 = document.getElementById("titleContainerContent2");
  var titleContainerContent3 = document.getElementById("titleContainerContent3");

  var titleSidebarContainer = document.getElementById("titleSidebarContainer");

  var titleContainerContent1Desc = document.getElementById("titleContainerContent1Desc");

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

  titlehr.style.width = widthOfSidebar + "px";
  titlehr.style.marginTop = "0px";
  scrollArrow.style.opacity = "0";
  scrollArrow2.style.opacity = "0";
  scrollDown.style.opacity = "0";

  scrollArrow.style.animation = "none";
  scrollArrow2.style.animation = "none";
  scrollDown.style.animation = "none";

  titleContainerContent1Desc.style.opacity = "0";
  titleContainerContent1Desc.style.height = "0";
  titleContainerContent1Desc.style.marginTop = "0px";
  titleContainerContent1Desc.style.padding = "0px";

  titleContainerContent2.style.height = "65vh";

  stage2T = setTimeout( function(){ 

    titleContainerContent2Image1.style.display = "none";
    titleContainerContent2Image2.style.display = "none";
    titleContainerContent2Image3.style.display = "none";

    titleContainer.style.right = "calc(100% - " + widthOfSidebar + "px)";

    titleSidebarContainer.style.display = "block";
    titleContainerContent1Desc.style.display = "none";

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
  var scrollArrow2 = document.getElementById("scrollArrow2");
  var scrollDown = document.getElementById("scrollDown");
  var titleContainerContent2 = document.getElementById("titleContainerContent2");

  var titleSidebarContainer = document.getElementById("titleSidebarContainer");
  var titleContainerContent1Scroll = document.getElementById("titleContainerContent1Scroll");

  var titleContainerContent1Desc = document.getElementById("titleContainerContent1Desc");

  clearTimeout(stage1T);
  clearTimeout(stage2T);
  clearTimeout(stage3T);
  clearTimeout(stage4T);

  //titleContainer.style.position = "fixed";

  titleContainer.style.right = "0";

  titleContainerContent1.style.height = "50vh";
  titleContainerContent2.style.height = "45vh";

  titleSidebarContainer.style.opacity = "0";

  titleContainerContent1Desc.style.display = "block";

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
    scrollArrow2.style.opacity = "1";
    scrollDown.style.opacity = "1";

    scrollArrow.style.animation = "bounceArrow 2s infinite";
    scrollArrow2.style.animation = "bounceArrow 2s infinite";
    scrollDown.style.animation = "bounceText 2s infinite";

    titleSidebarContainer.style.display = "none";

    titleContainerContent1Desc.style.opacity = "1";
    titleContainerContent1Desc.style.height = "60px";
    titleContainerContent1Desc.style.marginTop = "50px";
    titleContainerContent1Desc.style.padding = "10px";
    
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

function scrollToElement( targetElement ){
  scrollListener = false;
  setTimeout( function(){ scrollListener = true; checkHeight(); }, 300);
  $(window).scrollTo('#' + targetElement, scrollAnimMilliseconds);
  checkHeight();
}