// console.log(allSections);
function BuildScene(){
var n = 0;
var glitterize = []

var glitterTemp = document.createElement('div')
$(glitterTemp).addClass('glitter_on');
$("#main").append(glitterTemp);


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
