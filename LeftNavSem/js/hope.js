function playhope(){


        $(".glitter").mouseenter(function(event){


          var rect = this.getBoundingClientRect();

          var color = Math.floor(Math.random()*255-30)
          startExperience(this, event.clientX, event.clientY)
          // startExperience(this,rect.top, rect.right)
        });




        var dotCol = ["#eedfcc","#6495ed","#64daed","#7864ed","#ed7764","#FFC0CB","FFBFEA"]
        var i = 0


        function startExperience(targetA,xx,yy) {
          // console.log(xx);
          // consosle.log('hi');
            var tempDots = document.createElement('div')
            $(tempDots).html(  '<div class="dot" id="dot1"></div><div class="dot" id="dot2"></div><div class="dot" id="dot3"></div><div class="dot" id="dot4"></div><div class="dot" id="dot5"></div><div class="dot" id="dot6"></div><div class="dot" id="dot7"></div>')

        $('body').append(tempDots);

        // for (var i = 1; i < 8; i++){
        //   var temp = document.createElement('div')
        //   $(temp)
        //   $('body').append()
        // }


          i++;
          var endingHeight = 5;
          var speed = 2;
          var startingSize = 20;
          var pos=Math.random()*(300-100)+100
          var neg = Math.random()*(-100+300)-300
          var actualHeight = window.scrollY + yy;
          var actualWidth = xx - window.innerWidth/2;
          var maxDistance = 150;
          // var button = document.getElementById('button')

        // $('.dot').css({'top': actualHeight})
        // $('.dot').css({'left': xx})
        // $('.dot').css({'background': 'red'})
        // $('.dot').css({'opacity': 1})
        // console.log(window.innerWidth)
          TweenMax.fromTo(document.getElementById('dot1'),speed, {y: actualHeight, x:actualWidth, width: startingSize,height:startingSize, opacity:100},{
            y: actualHeight+Math.random()*(maxDistance-100)+100, x:actualWidth+Math.random()*(-100+maxDistance)-maxDistance, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
          })
          TweenMax.fromTo(document.getElementById('dot2'),speed, {y: actualHeight, x:actualWidth, width: startingSize,height:startingSize, opacity:100},{
            y: actualHeight-Math.random()*(-100+maxDistance)-maxDistance, x:actualWidth-Math.random()*(maxDistance-100)+100, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
          })
          TweenMax.fromTo(document.getElementById('dot3'),speed, {y: actualHeight, x:actualWidth, width: startingSize,height:startingSize, opacity:100},{
            y: yy+Math.random()*(maxDistance-100)+100, x:actualWidth-Math.random()*(maxDistance-100)+100, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
          })
          TweenMax.fromTo(document.getElementById('dot4'),speed, {y: actualHeight, x:actualWidth, width: startingSize,height:startingSize, opacity:100},{
            y: actualHeight+Math.random()*(-100+maxDistance)-maxDistance, x:actualWidth-Math.random()*(-100+maxDistance)-maxDistance, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
          })
          TweenMax.fromTo(document.getElementById('dot5'),speed, {y: actualHeight, x:actualWidth, width: startingSize,height:startingSize, opacity:100},{
            y: actualHeight+Math.random()*(maxDistance-100)+100, x:actualWidth+Math.random()*(maxDistance-100)+100, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
          })
          TweenMax.fromTo(document.getElementById('dot6'),speed, {y: actualHeight, x:actualWidth, width: startingSize,height:startingSize, opacity:100},{
            y: actualHeight-Math.random()*(-100+maxDistance)-maxDistance, x:actualWidth+Math.random()*(-100+maxDistance)-maxDistance, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
          })
          TweenMax.fromTo(document.getElementById('dot7'),speed, {y: actualHeight, x:actualWidth, width: startingSize,height:startingSize, opacity:100},{
            y: actualHeight-Math.random()*(maxDistance-100)+100, x:actualWidth+Math.random()*(-100+maxDistance)-maxDistance, width: endingHeight,height:endingHeight, opacity:0,ease: Strong.easeOut
          })



        document.getElementById('dot1').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
        document.getElementById('dot2').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
        document.getElementById('dot3').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
        document.getElementById('dot4').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
        document.getElementById('dot5').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
        document.getElementById('dot6').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
        document.getElementById('dot7').style.backgroundColor = dotCol[Math.floor(Math.random()*dotCol.length)]
        setTimeout(function(){
          $(tempDots).remove();
        },speed*1010)
        }


        $('#explorable_hope').html('<p id="hope-comng-soon">Example coming soon. In the meantime, if you enjoy the playful rollovers happening above, you can use <a href="https://evejweinberg.github.io/sparkleHover/index.html" target="_blank"> this jQuery plugin</a> to easily recreate and customize it.</p>')




};
