function playfogg(){

var t = $('#explorable_fogg')[0].parentElement
$(t).find('.explorable').css({'border': '0px red solid'})
// $(t).find('.explorable').css({'box-shadow': '2px 6px 20px rgba(0,0,0,.3)'})
$('#explorable_fogg').empty();
// $('#explorable_fogg').append('<img src="./img/foggA.png">')

var foggHTML = '<div class="fogg-flex-container">'+
  '<div class="fogg-flex-child universal-hover motivation"><p>What is my <span>MOTIVATION</span> <br>?</p></div>'+
  '<div class="fogg-flex-child universal-hover ability"><p>Do I have the <span>ABILITY</span> <br>?</p>'+
  '</div><div class="fogg-flex-child universal-hover trigger"><p>What is the <span>TRIGGER</span> <br>?</p>'+
  '</div></div><div class="fogg-instruction-space"></div><p style="margin-top: 30px;">Example: <br>Register-to-Vote Form / Hilary Campaign</p><div class="fogg-interaction-space"><img style="width: 100%;" src="./img/foggbrowser.jpg"></div>';

  var foggInstructionMotivation =
  "<p id='motivation_instruction' class='fogg-inner-two'>Does your user know their motivation for executing their desired behavior? Core motivators leverage emotion, the strongest being hope and fear.</p>";

  // '<img id="motivation_instruction" src="./img//fogg_instruction_motivation.png">';

  var foggInstructionTrigger =
  '<p id="trigger_instruction">The concept of Trigger has different names: cue, prompt, call to action, etc. It can be a useful facilitator, a button, signup form, or any other executable to ask for the desired behavior.</p>';

  var foggInstructionAbility =
  '<p id="ability_instruction">Is your user aware that they have the specific ability that is required? First define which categories apply to your situation:<br><img src="./img//fogg_instruction_ability.png"></p>';


$('#explorable_fogg').append(foggHTML);



$('.motivation').click(function(){
  $('.fogg-instruction-space').html('');
  $('.fogg-instruction-space').append(foggInstructionMotivation);
  if ( $("#iifogg_motivation").parents(".fogg-interaction-space").length == 1 ) {

    } else {
      $('.fogg-interaction-space').append("<img id='iifogg_motivation' src='./img/fogg_explorable-motivation.jpg'>");
    }
})


$('.ability').click(function(){
  $('.fogg-instruction-space').html('');
  $('.fogg-instruction-space').append(foggInstructionAbility);
  if ( $("#iifogg_ability").parents(".fogg-interaction-space").length == 1 ) {

    } else {
      $('.fogg-interaction-space').append("<img id='iifogg_ability' src='./img/fogg_explorable-ability.jpg'>");
    }

})


$('.trigger').click(function(){
  $('.fogg-instruction-space').html('');
  $('.fogg-instruction-space').append(foggInstructionTrigger);
  if ( $("#iifogg_trigger").parents(".fogg-interaction-space").length == 1 ) {

    } else {
      $('.fogg-interaction-space').append("<img id='iifogg_trigger' src='./img/fogg_explorable-trigger.jpg'>");
    }

})


// $('#transparency .case-study .case-study-after').append('<iframe src="https://player.vimeo.com/144923858/9ec84a3d83" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
// $('#transparency .case-study .case-study-after').append('<a href="https://vimeo.com/144923858/9ec84a3d83" target="_blank"><img src="./img/l2video.png" width="100%" height="100%"></a>')

};
