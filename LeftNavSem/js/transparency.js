var t = $('#explorable_transparency')[0].parentElement
$(t).find('.explorable').css({'border': '0px red solid'})
$(t).find('.explorable').css({'box-shadow': '2px 6px 20px rgba(0,0,0,.3)'})
$('#explorable_transparency').empty();
$('#explorable_transparency').append(
'<video src="img/okc_before.mp4" autoplay loop class="placeholder-image"></video>')

// $('#transparency .case-study .case-study-after').append('<iframe src="https://player.vimeo.com/144923858/9ec84a3d83" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
$('#transparency .case-study .case-study-after').append('<a href="https://vimeo.com/144923858/9ec84a3d83" target="_blank"><img src="./img/l2video.png" width="100%" height="100%"></a>')


// if ($('#explorable_transparency').find('video')[0].includes('before')){
//   console.log('before')
// }

// var transparencyVideo = document.createElement('video');
// $(transparencyVideo).attr('src','..img/okc_before.mp4');
// $(transparencyVideo).addClass('placeholder-image');
// $('#explorable_transparency').append(transparencyVideo)
// $('#explorable_transparency').css({'background': 'url(img/dogTemp.png)'})
