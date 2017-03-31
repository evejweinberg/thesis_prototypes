$(".glitter").mouseenter(function(event){
  // glitterize(this);

  var rect = this.getBoundingClientRect();
  console.log('jQueryleft: '+ this.offsetLeft)
console.log(rect.top, rect.right, rect.bottom, rect.left);

  var color = Math.floor(Math.random()*255-30)
  startExperience(this, event.clientX, event.clientY)
  // startExperience(this,rect.top, rect.right)
});




var dotCol = ["#eedfcc","#6495ed","#64daed","#7864ed","#ed7764","#FFC0CB","FFBFEA"]
var i = 0


function   startExperience(targetA,xx,yy) {

//   <div class="dot" id="dot1"></div>
//   <div class="dot" id="dot2"></div>
//   <div class="dot" id="dot3"></div>
//   <div class="dot" id="dot4"></div>
//   <div class="dot" id="dot5"></div>
//   <div class="dot" id="dot6"></div>
//   <div class="dot" id="dot7"></div>
// for (var i = 1; i < 8; i++){
//   var temp = document.createElement('div')
//   $(temp)
//   $('body').append()
// }


  i++;
  var endingHeight = 5;
  var speed = 1;
  var startingSize = 100;
  var pos=Math.random()*(300-100)+100
  var neg = Math.random()*(-100+300)-300
  // var button = document.getElementById('button')

$('.dot').css({'top': yy})
$('.dot').css({'left': xx})
$('.dot').css({'opacity': 1})
console.log(xx,yy)
  TweenMax.fromTo(document.getElementById('dot1'),speed, {y: yy, x:xx, width: startingSize,height:startingSize, opacity:100},{
    y: yy+Math.random()*(300-100)+100, x:xx+Math.random()*(-100+300)-300, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
  })
  TweenMax.fromTo(document.getElementById('dot2'),speed, {y: yy, x:xx, width: startingSize,height:startingSize, opacity:100},{
    y: yy-Math.random()*(-100+300)-300, x:xx-Math.random()*(300-100)+100, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
  })
  TweenMax.fromTo(document.getElementById('dot3'),speed, {y: yy, x:xx, width: startingSize,height:startingSize, opacity:100},{
    y: yy+Math.random()*(300-100)+100, x:xx-Math.random()*(300-100)+100, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
  })
  TweenMax.fromTo(document.getElementById('dot4'),speed, {y: yy, x:xx, width: startingSize,height:startingSize, opacity:100},{
    y: yy+Math.random()*(-100+300)-300, x:xx-Math.random()*(-100+300)-300, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
  })
  TweenMax.fromTo(document.getElementById('dot5'),speed, {y: yy, x:xx, width: startingSize,height:startingSize, opacity:100},{
    y: yy+Math.random()*(300-100)+100, x:xx+Math.random()*(300-100)+100, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
  })
  TweenMax.fromTo(document.getElementById('dot6'),speed, {y: yy, x:xx, width: startingSize,height:startingSize, opacity:100},{
    y: yy-Math.random()*(-100+300)-300, x:xx+Math.random()*(-100+300)-300, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
  })
  TweenMax.fromTo(document.getElementById('dot7'),speed, {y: yy, x:xx, width: startingSize,height:startingSize, opacity:100},{
    y: yy-Math.random()*(300-100)+100, x:xx+Math.random()*(-100+300)-300, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
  })



document.getElementById('dot1').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
document.getElementById('dot2').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
document.getElementById('dot3').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
document.getElementById('dot4').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
document.getElementById('dot5').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
document.getElementById('dot6').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
document.getElementById('dot7').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
}
