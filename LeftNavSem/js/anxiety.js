

var anxietyHTML =
'<div class="anxiety-title"> CHANCE OF WINNING US PRESIDENCY:<span class="output">30</span>%<p id="presidency-sm">(recieves input every 2 seconds)</p></div>'+

'<div class="anxiety-flex">'+


    '<div class="anxiety-flex-side">'+
          '<div class="gage-holder">'+
                  //background gage image
                  '<div class="image-holder-anx">'+
                  '<img src="img/gageBlue.png" id="gage-png"></img>'+
                  '</div>'+
                  //box fill red div
                  '<div class="needleC"><div id="needleBoxFill"></div></div>'+

                  //overlay mask
                  '<div class="image-holder-anx">'+
                  '<img src="img/gageMask.png" id="gage-png-mask"></img>'+
                  '</div>'+
                  //black needle
                  '<div class="needleC">'+
                        '<div id="needleCinner"></div>'+
                        // '<div id="needleBoxFill"></div>'+
                  '</div>'+
            '</div>'+
      '</div>'+

      '<div class="slider-holder anxiety-flex-side">'+
            '<div class="anxiety-input-section">'+
                    '<p id="">ADD ANXIETY</p>'+
                    '<div class="anxiety-button universal-hover c-button" id="slider-down" ><i class="minus icon"></i></div>'+
                    '<div class="anxiety-button universal-hover c-button" id="slider-up"><i class="plus icon"></i></div>'+
            '</div>'+
       '</div>'+


  '</div>';



//add the html
$('#explorable_anxiety').html(anxietyHTML);

// var t = $('#explorable_anxiety')[0].parentElement;
// $(t).find('.explorable').css({'border': '0px red solid'})


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

//every 2 seconds
setInterval(function(){

    var randomNum = Math.floor((Math.random()*11)-5);
    val += randomNum;
    var newVal = (!isNaN(val) && val >= 0 && val <= 100) ? val : 50;
    $('.needleC').css('transform','rotateZ('+(90+(newVal * 1.8) - 180) +'deg)')
    output.innerHTML = newVal;
    initVale = newVal;

},2000);


//onclick, remove some of the extra CSS wiggle...
$('#slider-down').click(function(){
  if (anxietyLevel > 0){
    anxietyLevel --;
    updateNeedle();
  }
});

//onclick, add an extra CSS wiggle...
$('#slider-up').click(function(){
  if (anxietyLevel < 20){
    anxietyLevel ++;
    updateNeedle()
  }
});


function updateNeedle(){
        document.getElementById("needleCinner").animate([
      // keyframes
      { transform: 'rotateZ('+Math.max(0, Math.min(10, anxietyLevel))+'deg)' },
      { transform: 'rotateZ('+(Math.max(-10, Math.min(0, -anxietyLevel)))+'deg)' }
      ], {
      // timing options
      duration: 2000/anxietyLevel,
      iterations: Infinity
      });

      document.getElementById("needleBoxFill").animate([
      // keyframes
      { transform: 'rotateZ('+Math.max(0, Math.min(10, anxietyLevel))+'deg)' },
      { transform: 'rotateZ('+(Math.max(-10, Math.min(0, -anxietyLevel)))+'deg)' }
      ], {
      // timing options
      duration: 2000/anxietyLevel,
      iterations: Infinity
      });


};
