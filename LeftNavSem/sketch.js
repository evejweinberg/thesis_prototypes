// $(function() {
var section = 1;
$('.nav-all').css('left','-130px');
$('#nav-opener').css('opacity','1');


function openNav(){
  $('.nav-all').css('left','0px');
  $('#nav-opener').css('opacity','0');
}

function start(){

  scrollTo(boxesHolder)


  // $('.nav-all').css('left','0px');
  // $('.nav-all').css('opacity','1');


}

//build everythngi
BuildIntro();
BuildHeroDiv();
BuildBoxes();
BuildScene();
addExtras();
createRandomBoxes();

// enableScroll();


function scrollTo(thing){
  $('html, body').animate({
            scrollTop: $(thing).offset().top -30+ 'px'
        }, 1000);
        return true;
}


$(".nav-all .link").click(function(evt){
   test.bind($(this))();
});
function test()
{
   var $this = $(this);
   console.log($this)
   $('.nav-all .item').removeClass('nav-highlighted');
   $($this).addClass('nav-highlighted');
}





var spritesheetNum = 31
var possiblePosSprite = []
for (var i = 0; i < spritesheetNum+1; i++){
possiblePosSprite.push(2400/spritesheetNum *i)
}

//get mouse X position
$(".flex-parent").mousemove(function(e){
  console.log(e.offsetY)
 var curIndex = Math.floor (e.offsetX/ ($(window).width()/spritesheetNum))
  var ratio = 240/1200;
   var yoffset = Math.round(-1* (240)*curIndex)
   var cons = 'background-position: 0px '+ yoffset + 'px'
   $(".animatedDiv").css({'background-position':'0px '+yoffset+'px'});
   $(".randomBoxes").css('transform', 'translateY('+e.offsetY*.9+'px) rotateZ('+yoffset/80+'deg)')

})

//hope
// $('#3 img').click(function(){
// if (this.src.indexOf('3b.jpg') >= 0){
// this.src = "sketches/3.jpg"
// } else {
// this.src = "sketches/3b.jpg"
// }
// })
//
//
// $('#12 img').click(function(){
//   if (this.src.indexOf('b.jpg') >= 0){
//   this.src = "sketches/12.jpg"
//   } else {
//   this.src = "sketches/12b.jpg"
//   }
// })


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




// $( window ).resize(function() {
//
// });

function checkSlide(e){

//check for dark pattern
const darkTop = darkpattern.offsetTop-120;

  // const slideInAt = (window.scrollY + window.innerHeight) - darkpattern.offsetTop;
        // bottom of the image
  const isNotScrolledPast = window.scrollY < darkpattern.offsetTop-offsetfromTop;
  const bottom = darkpattern.offsetTop + darkpattern.offsetHeight-400;
  // console.log('top: '+ darkTop)
  // console.log(window.scrollY)
  // console.log('bottom: '+ bottom)
        if (window.scrollY >  darkTop && window.scrollY < bottom) {
          $('body').css({	"filter": "invert(100%)"})
          $('body').css({	"background": "black"})
        } else {
          $('body').css({	"filter": "invert(0%)"})
          $('body').css({	"background": "white"})
          }

}

//why is this firing twice?
$('.link').click(function(){
  $('body').css({	"filter": ""})
  $('body').css({	"background": ""})
  // var darkClick = $(this+":contains('dark')")
  console.log($(this).text())
  if ($(this).text() == "Dark Patterns"){
    console.log('dark clicked')
    $('body').css({	"filter": "invert(100%)"})
    $('body').css({	"background": "black"})


  } else {
    console.log('other thing clicked')
    $('body').css({	"filter": "invert(0%)"})
    $('body').css({	"background": "white"})
  }
})


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

function disableScroll() {

  if (window.scrollY < 300){
    console.log('less')
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
    }
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}


$(document).ready(
  function(){
    if (window.scrollY < 300){
      // console.log(window.scrollY, window.innerHeight, 'disableScroll')
      // disableScroll();
    }
})



$('.case-study-open').click(function(){
  if ($(this.parentNode.parentNode).hasClass('CSO')){
    // console.log($(this.parentNode.parentNode))
    $(this.parentNode.parentNode).css({'width':'20vw'});
    $(this.parentNode.parentNode).css({'overflow':'hidden'});
    $(this).find('i').attr('class','arrow right icon');
    $(this.parentNode.parentNode).removeClass('CSO');
    $(this.parentNode).find('.case-study-after').css('opacity', '0');

  } else {
    // console.log($(this.parentNode.parentNode))
    $(this.parentNode.parentNode).css({'width':'70vw'});
    $(this.parentNode.parentNode).css({'overflow':'scroll'});
    $(this).find('i').attr('class','arrow left icon')
    $(this.parentNode.parentNode).addClass('CSO');
    $(this.parentNode).find('.case-study-after').css('opacity', '1');

  }

})





// });
