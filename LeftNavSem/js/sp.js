var spt = $('#explorable_social')[0].parentElement
$(spt).find('.explorable').css({'border': '0px red solid'})
// $(t).find('.explorable').css({'box-shadow': '2px 6px 20px rgba(0,0,0,.3)'})
$("#spbutton1").click(function(){
  $(spt).find('.explorable img')[0].src= 'img/sp_00.jpg';
})
$("#spbutton2").click(function(){
  $(spt).find('.explorable img')[0].src= 'img/sp_03.jpg';
})
$("#spbutton3").click(function(){
  $(spt).find('.explorable img')[0].src= 'img/sp_01.jpg';
})
$("#spbutton4").click(function(){
  $(spt).find('.explorable img')[0].src= 'img/sp_02.jpg';
})

var htmlee = '<iframe style="width:100%; height:100%" src="http://codepen.io/evejweinberg/live/qrwKYR"></iframe>'
var eeInner = '<p data-height="265" data-theme-id="0" data-slug-hash="qrwKYR" data-default-tab="css,result" data-user="evejweinberg" data-embed-version="2" data-pen-title="learning-levels" class="codepen">See the Pen <a href="http://codepen.io/evejweinberg/pen/qrwKYR/">learning-levels</a> by Eve Weinberg (<a href="http://codepen.io/evejweinberg">@evejweinberg</a>) on'+
' <a href="http://codepen.io">CodePen</a>.</p><script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>';
$('#explorable_explorableexplanations').css('height','500px').append(htmlee)
