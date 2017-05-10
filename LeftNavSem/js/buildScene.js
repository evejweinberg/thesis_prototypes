var cols = ['#00FBD0', '#3FA9F5', '-webkit-linear-gradient(#FF404B, #FBB03B)','#FF404B', '#0000FF','#00FF00','#E56E9F','#F7F100','#FFB9ED','#FBB03B','-webkit-linear-gradient(#FBB03B, #E56E9F)',
'-webkit-linear-gradient(#00FBD0, #0000FF)','-webkit-linear-gradient(#FF404B, #0000FF)','-webkit-linear-gradient(#FF404B, #F7F100)','#00FBD0', '#22B573']

var obj = {};


function BuildScene(){


  allSections.forEach(section => {
    var this_section = document.createElement('div');
    $(this_section).attr('id', section.id);
    $(this_section).addClass('section');

    if (section.category){
    var this_category = document.createElement('div');
    $(this_category).attr('id', section.category);
    $(this_category).text(section.category);
    $(this_category).addClass('category');
    $(this_section).append(this_category);
    }


    var this_title_div = document.createElement('div');
    $(this_title_div).addClass('title-div');
    var this_title = document.createElement('p');
    $(this_title).addClass('title');
    $(this_title).text(section.title)
    $(this_title_div).append(this_title);
    $(this_section).append(this_title_div);

    if (section.Intro){
    var this_intro = document.createElement('p');
    var string = section.Intro
    var newstring =  string.replace('joy', "<span class='glitter'>joy</span>").replace('surprise',"<span class='glitter'>surprise</span>").replace('delight',"<span class='glitter'>delight</span>");
    $(this_intro).addClass('intro').html(newstring);
    $(this_section).append(this_intro);
    };

    if (section.buttonA){
      var button = document.createElement('div');
      $(button).addClass('c-button button_'+ section.id)
      $(button).text(section.buttonA);

      if (section.id == 'social'){
        var button2 = $(button).clone();
        var button3 = $(button).clone();
        var button4 = $(button).clone();
        $(button).attr('id','spbutton1');
        $(button2).attr('id','spbutton2');
        $(button3).attr('id','spbutton3');
        $(button4).attr('id','spbutton4');
        $(button2).text(section.buttonB);
        $(button3).text(section.buttonC);
        $(button4).text(section.buttonD);
        var spbuttonHolder = document.createElement('div');
        $(spbuttonHolder).attr('id','spbuttonholder');
        $(spbuttonHolder).append(button);

        $(spbuttonHolder).append(button2);
        $(spbuttonHolder).append(button3);
        $(spbuttonHolder).append(button4);
        $(this_section).append(spbuttonHolder);


      } else {

        $(this_section).append(button);
        $(button).click(function(){
            if ($(button).text() == section.buttonA){
              $(button).text(section.buttonB);
              checkInner(section.id)
            } else {
              checkInner(section.id)
              $(button).text(section.buttonA);
            }
          })

      }
    }


    var this_explorable = document.createElement('div');
    $(this_explorable).addClass('explorable');
    $(this_explorable).attr('id','explorable_'+section.id);
    $(this_section).append(this_explorable);

    if (section.placeholderImage){
      var placeholderImg = document.createElement('img');
      $(placeholderImg).attr('src', section.placeholderImage);
      $(placeholderImg).addClass('placeholder-image')
      $(this_explorable).append(placeholderImg);
    }

    var explorable_button = document.createElement('div');
    $(explorable_button).attr('id', 'button_'+section.id);
    $(this_section).append(explorable_button);

    //if the section has a 'Real World Example', Then
    //build the whole case study section
    if (section.rwe_title){
    var case_study = document.createElement('div');
    $(case_study).addClass('case-study');
    var case_study_company = document.createElement('p');
    $(case_study_company).addClass('case_study_company').text(section.rwe_title)
    var case_study_before = document.createElement('div');
    var case_study_after = document.createElement('div');
    var case_study_open = document.createElement('div');
    var case_study_close = document.createElement('div');
    $(case_study_before).addClass('case-study-before');
    $(case_study_before).append("<p class='case-study-header'>Case Study</p>")
    $(case_study_after).addClass('case-study-after');
    $(case_study_after).html(section.rwe_body);
    $(case_study_open).addClass('case-study-open');
    $(case_study_open).html("<i class='arrow right icon'></i>");
    $(case_study_close).addClass('case-study-close');
    $(case_study_before).append(case_study_open).append(case_study_company);
    $(case_study_after).append(case_study_close);
    $(case_study).append(case_study_before).append(case_study_after);
    $(this_section).append(case_study);
    }

    //not doing this anymore
    //add the whole thing to the page
    // $('#main').append(this_section);

    obj[section.id]=this_section
  })

}







function BuildIntro(){
  var showVideo = false;

if (showVideo){
    $('#main-site-intro').append(
    "<video id='intro-video' src='img/intro_v1.mp4'></video>"+
    "<i class='video play big outline icon' id='intro-play'></i>")
  }

$('#main-site-intro').append(
  "<div id='intro-square' </div><p id='and-motion'>+ Motion Graphics</p>")


$('#main-site-intro').append('<i class="chevron down icon big universal-hover" id="down-first" onclick="start()"></i>')
$('.sources').append('<i class="chevron down icon big universal-hover" id="down-to-about" onclick="scrollTo(about)"></i>')


  var introplaying = false;

  $('#intro-play').click(function(){
    if (introplaying){
      $(this).attr('class', "video play outline icon")
      $('#intro-video')[0].pause();
      //stop video
      introplaying = false;
    } else {
      // console.log(this)
      $('#intro-video')[0].play();
      $(this).attr('class',"stop circle outline icon")
      //stop video
      introplaying = true;

    }
  })



}

function BuildBoxes(){

  allSections.forEach(section => {
    if (section.id != 'captology'){
    var this_section = document.createElement('div');
    $(this_section).attr('id', 'box_'+section.id);
    $(this_section).addClass('box-section universal-hover');
    }

    var this_title_div = document.createElement('div');
    $(this_title_div).addClass('box-title-div');
    var this_title = document.createElement('p');
    $(this_title).addClass('box-title');
    $(this_title).text(section.title);
    $(this_title).css('opacity','0');
    $(this_title_div).append(this_title);
    $(this_section).append(this_title_div);

    if (section.gif){
      var gif = document.createElement('img');
      $(gif).addClass('box-gif_'+ section.id)
      // $(this_section).append(gif);
      $(this_section).css('background-image','url('+section.gif+')')
      $(this_section).css('background-size','cover')

    }

    //add the whole thing to the page
    $('#boxesHolder').append(this_section);
  })

  $('.box-section').click(function(event){


    var replaceMe, findMe, findMeId;
    var clone = null;
    allSections.forEach(section => {
      if (section.title == $(this).text()){
        findMe = section.id;
        findMeId = "#"+findMe+"";
        replaceMe = $('.flex-child-main').find(findMeId.toString());
        // clone = $(replaceMe).clone()
        if (findMe == 'dark') {
          $('body').css({	"filter": "invert(100%)"})
          $('body').css({	"background": "black"})
        } else {
          $('body').css({	"filter": "invert(0%)"})
          $('body').css({	"background": "white"})
          }
      }
    })
    scrollTo(heroContentHolder)
    // console.log(replaceMe)


    $('#heroContentHolder .heroCenter').html(obj[findMe]);

    var functionToCall = "play"+findMe

    addCase();
    window[functionToCall]()
    // $('#heroContentHolder .heroCenter').html(clone);
    //dont do this anymore
    // $('#heroContentHolder .heroCenter').html(replaceMe);

  })


}


function BuildHeroDiv(){
  var herocenter = document.createElement('div');
  $(herocenter).addClass('heroCenter');
  $(herocenter).append('<img src="" alt=""><p>Waiting for you to click on a category above!</p>');
  $('#heroContentHolder').append("<i class='arrow big left icon universal-hover' id='heroBack'></i>");
  $('#heroContentHolder').append(herocenter);
  $('#heroContentHolder').append("<i class='arrow big right icon universal-hover' id='heroForward'></i>");
  $('#heroForward').click(fillHeroNext);
  $('#heroBack').click(fillHeroPrev);

}

function fillHeroNext(){
  //what is ther id in heroCOntent rifht now
  var idofcurrentHero = $('.heroCenter div').attr('id')
  //what is it's index
  allSections.forEach(function(singleSection){
    if (singleSection.id == idofcurrentHero){
      var count = allSections.indexOf(singleSection) + 1;

      if(count >= allSections.length){
        count = 1
      }

      var u = allSections[count].id

      $('#heroContentHolder .heroCenter').html(obj[u]);
      var functionToCall = "play"+u
      addCase();
      window[functionToCall]()
    }
  })

}

function fillHeroPrev(){
  //what is ther id in heroCOntent rifht now
  var idofcurrentHero = $('.heroCenter div').attr('id')
  //what is it's index
  allSections.forEach(function(singleSection){
    if (singleSection.id == idofcurrentHero){
      var count = allSections.indexOf(singleSection) - 1;

      if(count <= 0){
        count = 11
      }

      var u = allSections[count].id

      $('#heroContentHolder .heroCenter').html(obj[u]);
      var functionToCall = "play"+u
      addCase();
      window[functionToCall]()
    }
  })

}


//when each button gets called
function checkInner(sectionId){

  // console.log('button clicked: checking '+ sectionId)
  if (sectionId == 'loss'){
    // console.log('LOSS');
      $('#explorable_loss').addClass('flip');
      setTimeout(function(){
        $('#explorable_loss').removeClass('flip');
      },1010);

      if(AnimationOn == false){
        AnimationOn = true;
        $('#explorable_loss').html(lossAversionExample);
        $('#name').val('');
        $('#course-name').val('');
        $('#rating').val('');

      } else {
        AnimationOn = false;
        $('#explorable_loss').html(lossAversionExample);
        $('#name').val('');
        $('#course-name').val('');
        $('#rating').val('');

      }
    };

  if (sectionId == 'chunking'){
    // console.log('FLOW');
      $('#explorable_chunking').addClass('flip');
      setTimeout(function(){
        $('#explorable_chunking').removeClass('flip');
      },1010);

      if(FlowOn == false){
        FlowOn = true;
        $('#explorable_chunking').empty();
        $('#explorable_chunking').append(
        flowHTML)
      } else {
        FlowOn = false;
        $('#explorable_chunking').empty();
        $('#explorable_chunking').append(
        '<video src="img/okc_after.mp4" autoplay loop class="placeholder-image"></video>')
      }

  };

  if (sectionId == 'transparency'){

  var tempbb = $('#explorable_transparency').find('video')[0]
  if (tempbb.src.includes('before')){
    $('#explorable_transparency').addClass('flip');
    setTimeout(function(){
      $('#explorable_transparency').removeClass('flip');
    },1010);
    $('#explorable_transparency').html(
    '<video src="img/okc_after.mp4" autoplay loop class="placeholder-image"></video>')
  } else {
    $('#explorable_transparency').addClass('flip');
    setTimeout(function(){
      $('#explorable_transparency').removeClass('flip');
    },1010);
    // $('#explorable_transparency').empty();
    $('#explorable_transparency').html(
    '<video src="img/okc_before.mp4" autoplay loop class="placeholder-image"></video>')
  }
}

}


function createRandomBoxes(){

  for (var i =0; i < 20; i ++){
    var random = Math.random()*(60-10)+10;
    var randomB = Math.random()*(20-0)+0;
    var maxWidth = 1400;
    var temp = document.createElement('div');
    $(temp).addClass('randomBoxes');
    $(temp).css('background', cols[i%cols.length]);
    $(temp).css({
    'top': Math.random()*maxWidth/2 + 'px',
    'left':-200+ Math.random()*maxWidth + 'px',
    'border-radius': Math.round(Math.random()*30),
    'width': Math.round(random),
    'height': Math.round(random + randomB)
  });

    $('#main-site-intro').append(temp);
  }
}



function HeroArrows(){
  $('#heroBack').click(function(){
    var thisOne = $('.heroCenter > .section').attr('id')
    for (section in allSections){
      // console.log(thisOne,section.id)
      if (section.id == thisOne){
        // console.log(thisOne)
      }
    }
  })
}
