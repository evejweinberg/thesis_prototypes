
function BuildScene(){
var n = 0;

  allSections.forEach(section => {
    // console.log(section.id);
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

  n ++;
    //add the whole thing to the page
    $('#main').append(this_section);
  })


}

function addExtras(){
  var explorable_meta = document.createElement('div');
  $(explorable_meta).addClass('explorable_meta_closed exmet');
  var child = document.getElementById('transparency');
  child.parentNode.insertBefore(explorable_meta,child);

}

function BuildIntro(){
  var showVideo = false;
  // var subtitle = document.createElement('div');
  // $(subtitle).attr('id', 'title-subtitle');
  // $(subtitle).html('Computers As Persuasive Tools <br> + Motion Graphics')
  // $("#main-site-intro").append(subtitle);

if (showVideo){


  $('#main-site-intro').append(
  "<video id='intro-video' src='img/intro_v1.mp4'></video>"+
  "<i class='video play big outline icon' id='intro-play'></i>")

  }

$('#main-site-intro').append('<i class="chevron down icon big universal-hover" id="down-first" onclick="start()"></i>')

  var introplaying = false;

  $('#intro-play').click(function(){
    if (introplaying){
      // console.log(this)
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
    $(this_title).text(section.title)
    $(this_title_div).append(this_title);
    $(this_section).append(this_title_div);


    if (section.gif){
      var gif = document.createElement('img');
      $(gif).addClass('box-gif_'+ section.id)
      $(this_section).append(gif);
    }

    //add the whole thing to the page
    $('#boxesHolder').append(this_section);
  })

  $('.box-section').click(function(event){
    var replaceMe, findMe, findMeId;
    allSections.forEach(section => {
      if (section.title == $(this).text()){
        findMe = section.id;
        findMeId = "#"+findMe+""
        replaceMe = $('.flex-child-main').find(findMeId.toString());
      }
    })
    scrollTo(heroContentHolder)
    $('#heroContentHolder .heroCenter').empty();
    $('#heroContentHolder .heroCenter').append(replaceMe);
  })


}


function BuildHeroDiv(){
  var herocenter = document.createElement('div');
  $(herocenter).addClass('heroCenter');
  $(herocenter).append('<img src="" alt=""><p>placeholder gif goes here. Waiting for you to click a category!</p>');
  $('#heroContentHolder').append("<i class='arrow big left icon universal-hover' id='heroBack'></i>");
  $('#heroContentHolder').append(herocenter);
  $('#heroContentHolder').append("<i class='arrow big right icon universal-hover' id='heroForward'></i>");

}
