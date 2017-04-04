// var anxietyHTML = '<div class="anxiety-flex">'+
//
//
//     '<div class="anxiety-flex-side">'+
//
//       '<div class="anxiety-title">RANDOM VOTE COUNT:<span class="output">30</span>'+
//         '  <p>recieved input every 2 seconds</p></div>'+
//
//
//       '<div class="gage-holder">'+
//           '<svg class="typeRange typeRangeB" height="165" width="330" viewBox="40 0 230 165">'+
//             '<g class=" scaleB" stroke="red"></g>'+
//             '<path class="outline outlineB" d="" /><path class="fill fillB" d="" />'+
//               '<div class="needleC"><div id="needleCinner"></div></div>'+
//           '</svg><div class="insider"></div></div></div>'+
//
//
//     '<div class="slider-holder anxiety-flex-side">'+
//       '<div class="anxiety-input-section">'+
//
//       '<p id="">ADD ANXIETY</p><div class="anxiety-button" id="slider-down" ><i class="minus icon"></i></div>'+
//       '<div class="anxiety-button" id="slider-up"><i class="plus icon"></i></div>'+
//     '</div></div></div>';

var anxietyHTML = '<div class="anxiety-flex">'+


    '<div class="anxiety-flex-side">'+

      '<div class="anxiety-title">VOTE COUNT :<span class="output">30</span>'+
        '  <p>recieved input every 2 seconds</p></div>'+


      '<div class="gage-holder">'+
      '<img src="img/gage.png" id="gage-png"></img>'+
          // '<svg class="typeRange typeRangeB" height="165" width="330" viewBox="40 0 230 165">'+
            // '<g class=" scaleB" stroke="red"></g>'+
            // '<path class="outline outlineB" d="" /><path class="fill fillB" d="" />'+
            '<div class="needleAlso"><div class="needleC"><div id="needleWide"></div></div></div>'+
              '<div class="needleC"><div id="needleCinner"></div></div>'+
          '</div></div>'+


    '<div class="slider-holder anxiety-flex-side">'+
      '<div class="anxiety-input-section">'+

      '<p id="">ADD ANXIETY</p><div class="anxiety-button" id="slider-down" ><i class="minus icon"></i></div>'+
      '<div class="anxiety-button" id="slider-up"><i class="plus icon"></i></div>'+
    '</div></div></div>';


$('#explorable_anxiety').html(anxietyHTML);
var t = $('#explorable_anxiety')[0].parentElement
// console.log($(t).find('.explorable'))
  $(t).find('.explorable').css({'border': '0px red solid'})


var anxietyLevel = 0;
var maskStartAngle = 90;


var svg = document.querySelector(".typeRange");
var output = document.querySelector(".output");
var outline = document.querySelector(".outline");
var fill = document.querySelector(".fill");
var center = document.querySelector(".center");
var needle = document.querySelector(".needle");

var svgB = document.querySelector(".typeRangeB");
var outlineB = document.querySelector(".outlineB");
var fillB = document.querySelector(".fillB");
var centerB = document.querySelector(".centerB");
var needleB = document.querySelector(".needleB");


var rad = Math.PI / 180;

var offset = 40;

var initVal = 50;


var val = initVal;
var timing = false;
var clock = 0;
setInterval(function(){

  // clock++;
  // if (clock % 10 == 0){
    var randomNum = Math.floor((Math.random()*11)-5)
  // } else {
  //   var randomNum =0;
  // }

   val += randomNum;
  var newVal = (!isNaN(val) && val >= 0 && val <= 100) ? val : 50;
  // console.log(newVal)

// $('.needleD').css('transform','rotateZ('+(90+(newVal * 1.8) - 180) +'deg)')
$('.needleC').css('transform','rotateZ('+(90+(newVal * 1.8) - 180) +'deg)')


  output.innerHTML = newVal;
  initVale = newVal;

},2000)


$('#slider-down').click(function(){
  if (anxietyLevel > 0){
    anxietyLevel --;
    // $(this).animate(
    //   // keyframes
    //   { top: "100px" }
    //   , 1000);
    updateNeedle();
  }
});

$('#slider-up').click(function(){
  if (anxietyLevel < 20){
    anxietyLevel ++;

    updateNeedle()
  }
});

function updateNeedle(){
  // console.log(Math.max(0, Math.min(10, anxietyLevel)))

  document.getElementById("needleCinner").animate([
// keyframes
{ transform: 'rotateZ('+Math.max(0, Math.min(10, anxietyLevel))+'deg)' },
{ transform: 'rotateZ('+(Math.max(-10, Math.min(0, -anxietyLevel)))+'deg)' }
], {
// timing options
duration: 2000/anxietyLevel,
iterations: Infinity
});

document.getElementById("needleWide").animate([
// keyframes
{ transform: 'rotateZ('+Math.max(0, Math.min(10, anxietyLevel))+'deg)' },
{ transform: 'rotateZ('+(Math.max(-10, Math.min(0, -anxietyLevel)))+'deg)' }
], {
// timing options
duration: 2000/anxietyLevel,
iterations: Infinity
});




}
