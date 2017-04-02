//variables to keep track of how many rounds of errors the user endures
var Name_errorCount = false;
var Course_errorCount = false;
var Rating_errorCount = false;
var errorRound = 0;

//A-B testing the animation. 50/50 chance of it being ON or not
var AnimationOn = false;
// console.log('A/B testing: ' + AnimationOn);

var lossAversionExample =
  '<div id="form-test" class="loss-aversion-container"><div class="loss-aversion-box">'+
    '<div id="Questionaire"><h2 class="loss-aversion-h2">Thanks!</h2>'+
  '<p>How frustrating was that?</p><div id="slider">0 '+
  '<input id="slide" type="range" min="0" max="10" step="1" value="0" onchange="updateSlider(this.value)" />'+
 '10</div> <br /><p id="slider-answer">0</p>'+
'<button id="done">Done</button></div>'+


  '<div id="Final"><h2 class="loss-aversion-h2">Thanks!! That is it.</h2></div>'+


      '<div class="form-text"><h2 class="loss-aversion-h2">Course Evaluation</h2>'+
      ' <div class="inline">'+
      '<label class="textInput" >Your Name</label>'+
      '<input type="text" class="textInputField" id="name"></div>'+
            ' <div class="inline">'+
    '  <label class="textInput" >Course Name</label>'+
    '  <input type="text" class="textInputField" id="course-name">'+
              // ' <p class="helper">(any course you have taken this semester)</p>
              '</div>'+

      '  <div class="inline">'+
    '  <label class="textInput">Overall Rating</label>'+
    '  <input type="text" class="textInputField" id="rating"></div>'+
      '  <p class="static-message"></p>'+
      '  <button id="submit">Submit</button>'+
      '  </div></div><p class="over-it"></p></div>'

function resetFrom(){
    // $('#explorable_loss').html();
    $('#explorable_loss').html(lossAversionExample);
    $('#submit').click(check);
    $('.over-it').click(ended);
    $('#done').click(submit);
}
var t = $('#explorable_loss')[0].parentElement;
// console.log($(t).find('.explorable'))
  $(t).find('.explorable').css({'border': '0px red solid'})
  $('#explorable_loss').html(lossAversionExample);
  $('#button_loss').click(function(){
    if(AnimationOn == false){
      AnimationOn = true;
      resetFrom();
      $(this).css({'background-image':'url(img/button_lossB.png)'})
      var el   = $(this),
     newone = el.clone(true);
     el.before(newone);
     $(this).remove();

    } else {
      AnimationOn = false;
      resetFrom();
      $(this).css({'background-image':'url(img/button_loss.png)'})
      var el     = $(this),
     newone = el.clone(true);
     el.before(newone);
     $(this).remove();


    }

  })





$('#submit').click(check);
$('.over-it').click(ended);
$('#done').click(submit);

//on 'submit' check for errors
function check(){
  console.log('check called')


  var nameVal = $('#name').val();
  var nameArray = nameVal.split(' ');
  var courseVal = $('#course-name').val();
  var ratingVal = $('#rating').val();

  //if the rating is not two digits....
  if (ratingVal.length<2){
      if (AnimationOn){
        $('#rating').css({'border':'3px red solid'})
      }
        Rating_errorCount = true;
    } else {
       $('#rating').css({'border':'0px red solid'})
    }

    //if the course is not filled out
    if (courseVal.length<1){
      if (AnimationOn){
        $('#course-name').css({'border':'3px red solid'})
      }
      Course_errorCount = true;
      } else {
        $('#course-name').css({'border':'0px red solid'})
        Course_errorCount = false;
      }

  if (nameVal){
      //check for first capital letter for both words
      nameArray.forEach(function(name){
        if (name[0] != name[0].toUpperCase()) {
            Name_errorCount = true;
        }
      })
   }

   //if the name is not two words
  if (!nameArray || nameArray.length != 2){
      Name_errorCount = true;
  }

  // style the border red if it's wrong for either reason
  if (Name_errorCount == true){
    if (AnimationOn){
    $('#name').css({'border':'3px red solid'})
    }
  } else {
    $('#name').css({'border':'0px red solid'})
  }

  // if any part of the form has an error, shake and push to server, otherwise move on to ended()
  if (Name_errorCount == true || Course_errorCount == true || Rating_errorCount == true){
      shake();
  } else {
     ended();
  }

}



//shake form
function shake(){
  console.log('shKE called')

  //if Animation is on, then shake!
  if (AnimationOn){
  $('#form-test .loss-aversion-box').css({
    "animation": "wiggle 1s 1 ease-out"})
   $('#form-test .loss-aversion-box').css({
    "box-shadow": "0px 25px 55px 30px rgba(50,50,50,.2)"
  })

  setTimeout(function(){
      $('#form-test .loss-aversion-box').css({"box-shadow": ""});
    $('#form-test .loss-aversion-box').css({"animation": ""});

  },1000);

  //if animation is OFF, just convey errors with text
  } else {
    $('.static-message').text('**Fields were wrong :');
    if (Name_errorCount){
      $('.static-message').append('Name ');
    }
    if (Course_errorCount){
      $('.static-message').append('Course ');
    }
      if (Rating_errorCount){
      $('.static-message').append('Rating');
    }

  }

  errorRound ++;
  //upon the first error, give them an out
   if (errorRound > 0){
    $('.over-it').css({'opacity':'1'});
  }

  //reset all variables to false
  Name_errorCount = false;
  Course_errorCount = false;
  Rating_errorCount = false;

}


function ended(){
  // console.log('ended after '+ errorRound + ' rounds');
  //post this number to server, with a unique ID
  // data: {
  // 'id': '####',
  //   'rounds': [integer],
  //   'quit: [boolean],
  //   'animationOn': animationOn,
  //   'frustration': [integer 1-10], dont know yet
  // }

  //move on to 1 feedback question
  $('.form-text').fadeOut();
  $('#Questionaire').fadeIn();
  $('.over-it').fadeOut();
}

function updateSlider(slideAmount) {
$('#slider-answer').text(slideAmount)
}

function submit(){
  $('#Questionaire').fadeOut();
  $('#Final').fadeIn();
  //post this answers to server with the same unique ID
    //post this number to server, with a unique ID
  // data: {
  // 'id': '####',
  //   'rounds': [integer],
  //   'quit: [boolean],
  //   'animationOn': animationOn,
  //   'frustration': [integer 1-10], dont know yet
  // }

}
