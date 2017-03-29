// $(function() {
var section = 1;


function start(){

  $('.splash').fadeOut();
  $('.splash').remove();
  $('#top-nav').css({ "top": "-170px"})
  $('.title-holder').remove();
    enableScroll();


}


BuildScene()


//load images
// var main = document.getElementById('main');
// for (var i =2; i< 22; i++){
//   var tempDiv = document.createElement('div');
//   var tempImg = document.createElement('img');
//   $(tempDiv).append(tempImg);
//   tempDiv.id = i;
// tempImg.src = 'sketches/'+ i + '.jpg';
// $(main).append(tempDiv);
// }



$('#top-nav').click(function(){
if  (this.classList == "active"){
  $('#top-nav').css({"top": "-170px"  })
  $('#top-nav').css({ "background-image": 'url(sketches/Tsidesection'+section+'.jpg)'})

} else {
$('#top-nav').css({ "top": "-100px"})
// $('#top-nav-bg').delay(1000).css({ "right": "-40px"})
$('#top-nav').delay(1000).css({ "background-image": 'url(sketches/Tsidebar.jpg)'})

 } //else ends

this.classList.toggle( "active" );

});





var spritesheetNum = 31
var possiblePosSprite = []
for (var i = 0; i < spritesheetNum+1; i++){
possiblePosSprite.push(2400/spritesheetNum *i)
}

//get mouse X position
$(".splash").mousemove(function(e){
  // console.log(e.offsetX)
 var curIndex = Math.floor (e.offsetX/ ($(window).width()/spritesheetNum))
  var ratio = $(window).width()*.8*240/1200;
   var yoffset = Math.round(-1* (ratio)*curIndex)
   var cons = 'background-position: 0px '+ yoffset + 'px'
   $(".animatedDiv").css({'background-position':'0px '+yoffset+'px'});

})

//hope
$('#3 img').click(function(){
if (this.src.indexOf('3b.jpg') >= 0){
this.src = "sketches/3.jpg"
} else {
this.src = "sketches/3b.jpg"
}
})


$('#12 img').click(function(){
  if (this.src.indexOf('b.jpg') >= 0){
  this.src = "sketches/12.jpg"
  } else {
  this.src = "sketches/12b.jpg"
  }
})


// window.addEventListener('scroll', debounce(checkSlide));

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
var darkpattern = document.getElementById('9')
var psychStarts = document.getElementById('6')
var foggStarts = document.getElementById('13')
var flowStarts = document.getElementById('19')
var offsetfromTop = 200;




$( window ).resize(function() {

});

function checkSlide(e){

//check for dark pattern
const darkTop = darkpattern.offsetTop - 500;
  const slideInAt = (window.scrollY + window.innerHeight) - darkpattern.offsetTop;
        // bottom of the image
  const isNotScrolledPast = window.scrollY < darkpattern.offsetTop-offsetfromTop;
        if (window.scrollY >  darkTop && window.scrollY < darkpattern.offsetTop + darkpattern.offsetHeight) {
          $('body').css({	"filter": "invert(100%)"})
          $('body').css({	"background": "black"})
        } else {
          $('body').css({	"filter": "invert(0%)"})
          $('body').css({	"background": "white"})
          }




// console.log(window.scrollY)
// console.log(psychimageBottom,darkimageBottom, foggimageBottom,flowimageBottom)

if (window.scrollY  < psychStarts.offsetTop-offsetfromTop){
  section = 1
  // console.log('section 1')
    $('#top-nav').css({'background-image': "url('sketches/Tsidesection1.jpg')"})
  } else if (window.scrollY  > psychStarts.offsetTop-offsetfromTop && window.scrollY < foggStarts.offsetTop-offsetfromTop){
      // console.log('section 2')
    section = 2
    $('#top-nav').css({'background-image': "url('sketches/Tsidesection2.jpg')"})
  } else if (window.scrollY  > foggStarts.offsetTop-offsetfromTop && window.scrollY < flowStarts.offsetTop-offsetfromTop){
      // console.log('section 3')
    section =3
    $('#top-nav').css({'background-image': "url('sketches/Tsidesection3.jpg')"})
  } else {
      // console.log('section 4')
    section =4
    $('#top-nav').css({'background-image': "url('sketches/Tsidesection4.jpg')"})
  }
}


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
      console.log(window.scrollY, window.innerHeight, 'disableScroll')
      disableScroll();
    }
})
var allRects = [];
$('.nav-rect').each(function(){
  allRects.push(this)
})
console.log(allRects)
$('.explorable').click(function(){
  var index = this.id.charAt(0)
  console.log(this.id.charAt(0))
  console.log(allRects[index])
  $(allRects[index]).css({'background':'black'});
})





// });
