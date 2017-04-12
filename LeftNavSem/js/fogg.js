var t = $('#explorable_fogg')[0].parentElement
$(t).find('.explorable').css({'border': '0px red solid'})
// $(t).find('.explorable').css({'box-shadow': '2px 6px 20px rgba(0,0,0,.3)'})
$('#explorable_fogg').empty();
// $('#explorable_fogg').append('<img src="./img/foggA.png">')

var foggHTML = '<div class="fogg-flex-container">'+
  '<div class="fogg-flex-child universal-hover motivation"><p>What is my <span>MOTIVATION</span> <br>?</p></div>'+
  '<div class="fogg-flex-child universal-hover ability"><p>Do I have the <span>ABILITY</span> <br>?</p>'+
  '</div><div class="fogg-flex-child universal-hover trigger"><p>What is the <span>TRIGGER</span> <br>?</p>'+
  '</div></div><div class="fogg-instruction-space"></div><div class="fogg-interaction-space"></div>';

  var foggInstructionMotivation =
  '<img id="motivation_instruction" src="./img//fogg_instruction_motivation.png">';

  var foggInstructionTrigger =
  '<img id="trigger_instruction" src="./img//fogg_instruction_trigger.png">';

  var foggInstructionAbility =
  '<img id="ability_instruction" src="./img//fogg_instruction_ability.png">';


$('#explorable_fogg').append(foggHTML);



$('.motivation').click(function(){
  $('.fogg-instruction-space').html('');
  $('.fogg-instruction-space').append(foggInstructionMotivation);
  if ( $("#iifogg_motivation").parents(".fogg-interaction-space").length == 1 ) {

    } else {
      $('.fogg-interaction-space').append("<img id='iifogg_motivation' src='./img/fogg_motivation.png'>");
    }
})


$('.ability').click(function(){
  $('.fogg-instruction-space').html('');
  $('.fogg-instruction-space').append(foggInstructionAbility);
  if ( $("#iifogg_ability").parents(".fogg-interaction-space").length == 1 ) {

    } else {
      $('.fogg-interaction-space').append("<img id='iifogg_ability' src='./img/fogg_ability.png'>");
    }

})


$('.trigger').click(function(){
  $('.fogg-instruction-space').html('');
  $('.fogg-instruction-space').append(foggInstructionTrigger);
  if ( $("#iifogg_trigger").parents(".fogg-interaction-space").length == 1 ) {

    } else {
      $('.fogg-interaction-space').append("<img id='iifogg_trigger' src='./img/fogg_trigger.png'>");
    }

})


// $('#transparency .case-study .case-study-after').append('<iframe src="https://player.vimeo.com/144923858/9ec84a3d83" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
// $('#transparency .case-study .case-study-after').append('<a href="https://vimeo.com/144923858/9ec84a3d83" target="_blank"><img src="./img/l2video.png" width="100%" height="100%"></a>')
