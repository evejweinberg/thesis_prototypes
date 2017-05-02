function playtransparency(){

var t = $('#explorable_transparency')[0].parentElement
// $(t).find('.explorable').css({'border': '0px red solid'})

$(t).find('.explorable').css({'box-shadow': '2px 6px 20px rgba(0,0,0,.3)'})

//start the video with the before one looping. why is it not looping?
$('#explorable_transparency').html(
'<video src="img/okc_before.mp4" autoplay loop class="placeholder-image"></video>')

//trigger the video to play
$('#explorable_transparency').find('video')[0].play()


//add L2 image and href to the case study area
$('#transparency .case-study .case-study-after').append('<a href="https://vimeo.com/144923858/9ec84a3d83" target="_blank"><img src="./img/l2video.png" width="100%" height="100%"></a>')


//create a new div
// var explorable_meta = document.createElement('div');
// //add class to it
// $(explorable_meta).addClass('explorable_meta_closed exmet');
// //get element and insert this div
// var child = document.getElementById('transparency');
// child.parentNode.insertBefore(explorable_meta,child);


};
