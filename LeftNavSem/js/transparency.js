var t = $('#explorable_transparency')[0].parentElement
$(t).find('.explorable').css({'border': '0px red solid'})
$(t).find('.explorable').css({'box-shadow': '2px 6px 20px rgba(0,0,0,.3)'})
$('#explorable_transparency').empty();
$('#explorable_transparency').append(
'<video src="img/okc_before.mp4" autoplay loop class="placeholder-image"></video>')

function checkInner(sectionId){
  // console.log('checking '+ sectionId)
  var tempbb = $('#explorable_transparency').find('video')[0]
  console.log(tempbb.src)
  if (tempbb.src.includes('before')){
    $('#explorable_transparency').addClass('flip');
    setTimeout(function(){
      $('#explorable_transparency').removeClass('flip');
    },1010);
    $('#explorable_transparency').empty();
    $('#explorable_transparency').append(
    '<video src="img/okc_after.mp4" autoplay loop class="placeholder-image"></video>')
  } else {
    $('#explorable_transparency').addClass('flip');
    setTimeout(function(){
      $('#explorable_transparency').removeClass('flip');
    },1010);
    $('#explorable_transparency').empty();
    $('#explorable_transparency').append(
    '<video src="img/okc_before.mp4" autoplay loop class="placeholder-image"></video>')
  }

}
// if ($('#explorable_transparency').find('video')[0].includes('before')){
//   console.log('before')
// }

// var transparencyVideo = document.createElement('video');
// $(transparencyVideo).attr('src','..img/okc_before.mp4');
// $(transparencyVideo).addClass('placeholder-image');
// $('#explorable_transparency').append(transparencyVideo)
// $('#explorable_transparency').css({'background': 'url(img/dogTemp.png)'})
