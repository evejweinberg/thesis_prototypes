// $(function() {
var section = 1;
var caseAdded = false;
$('.nav-all').css('left','-130px');
$('#nav-opener').css('opacity','1');


function openNav(){
  $('.nav-all').css('left','0px');
  $('#nav-opener').css('opacity','0');
};

function start(){
  scrollTo(definition)
};

//build everything
BuildIntro();
BuildHeroDiv();
BuildBoxes();
BuildScene();
// addExtras();
createRandomBoxes();
HeroArrows();
addCase();

function backtoTop(){
  $('html, body').animate({
            scrollTop: $('.title-holder').offset().top -30+ 'px'
        }, 1000);
    return true;
}

function scrollTo(thing){
  if (thing == definition){
    $('html, body').animate({
              scrollTop: $(thing).offset().top - window.innerHeight/5+ 'px'
          }, 1000);
      return true;
  } else if (thing == about) {
  $('html, body').animate({
            scrollTop: $('#about').offset().top -30+ 'px'
        }, 1000);
    return true;
  }  else {
    $('html, body').animate({
              scrollTop: $(thing).offset().top -30+ 'px'
          }, 1000);
      return true;

  }
};


$(".nav-all .link").click(function(evt){
   test.bind($(this))();
});

function test(){
   var $this = $(this);
  //  console.log($this)
   $('.nav-all .item').removeClass('nav-highlighted');
   $($this).addClass('nav-highlighted');
}




//intro sprite reaction to mnouse
var spritesheetNum = 24
var possiblePosSprite = []
for (var i = 0; i < spritesheetNum+1; i++){
  possiblePosSprite.push(2400/spritesheetNum *i)
}

//get mouse X position
$("body").mousemove(function(e){
  // console.log(e.offsetY)
  var curIndex = Math.floor (e.offsetX/ ($(window).width()/spritesheetNum))
  var ratio = 240/1200;
  var yoffset = Math.round(-1* (240)*curIndex)
  var cons = 'background-position: 0px '+ yoffset + 'px'
  $(".animatedDiv").css({'background-position':'0px '+yoffset+'px'});
  $(".randomBoxes").css('transform', 'translateY('+e.offsetX*.1+'px)  rotateZ('+e.offsetX+'deg)')

})

//not sure if i'm still using this
window.addEventListener('scroll', debounce(checkSlide));

//dont check too often
function debounce(func, wait = 20, immediate = true) {
var timeout;
return function() {
  var context = this, args = arguments;
  var later = function() {
    timeout = null;
    if (!immediate) func.apply(context, args);
  };
  var callNow = immediate && !timeout;
  clearTimeout(timeout);
  timeout = setTimeout(later, wait);
  if (callNow) func.apply(context, args);
};
}

var fading = false;
var darkZone = false;
var darkpattern = document.getElementById('dark')
var offsetfromTop = 200;


function checkSlide(e){
}

//this was to disable scroll
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// function disableScroll() {
//
//   if (window.scrollY < 300){
//     // console.log('less')
//   if (window.addEventListener) // older FF
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
//     }
// }
//
// function enableScroll() {
//     if (window.removeEventListener)
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.onmousewheel = document.onmousewheel = null;
//     window.onwheel = null;
//     window.ontouchmove = null;
//     document.onkeydown = null;
// }


function addCase(){
  //animation when case study is clicked
  $('.case-study-open').click(function(){
    if ($(this.parentNode.parentNode).hasClass('CSO')){
      $(this.parentNode.parentNode).css({'width':'20vw'});
      $(this.parentNode.parentNode).css({'overflow':'hidden'});
      $(this).find('i').attr('class','arrow right icon');
      $(this.parentNode.parentNode).removeClass('CSO');
      $(this.parentNode).find('.case-study-after').css('opacity', '0');
    } else {
      $(this.parentNode.parentNode).css({'width':'70vw'});
      $(this.parentNode.parentNode).css({'overflow':'scroll'});
      $(this).find('i').attr('class','arrow left icon')
      $(this.parentNode.parentNode).addClass('CSO');
      $(this.parentNode).find('.case-study-after').css('opacity', '1');
    }

  })
    caseAdded = true;
};
