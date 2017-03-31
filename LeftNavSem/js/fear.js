var t = $('#explorable_fear')[0].parentElement
$(t).find('.explorable').css({'border': '0px red solid'})

var tixLeft = document.createElement('p');
$(tixLeft).addClass('tix-left fear-type');
$('#explorable_fear').append(tixLeft);
$(tixLeft).text("200");

var saleDaysLeft = document.createElement('p');
$(saleDaysLeft).addClass('tix-left fear-type');
$('#explorable_fear').append(saleDaysLeft);
$(saleDaysLeft).text("1 week");


var FearButtonRight   = $('.button_fear'),
FearButtonLeft = FearButtonRight.clone(true);
FearButtonRight.before(FearButtonLeft);
$(FearButtonLeft).attr('id', 'button_fear_A');
$(FearButtonLeft).removeClass('button_fear')


$(FearButtonRight).click(function(){

})

$(FearButtonLeft).click(function(){

})
