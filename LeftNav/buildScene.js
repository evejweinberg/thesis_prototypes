// console.log(allSections);
function BuildScene(){
var n = 0;
  allSections.forEach(section => {
    // console.log(section.id);
    var this_section = document.createElement('div');
    $(this_section).attr('id', section.id);
    $(this_section).addClass('section');

    var this_title_div = document.createElement('div');
    $(this_title_div).addClass('title-div');
    var this_title = document.createElement('p');
    $(this_title).addClass('title');
    $(this_title).text(section.title)
    $(this_title_div).append(this_title);
    $(this_section).append(this_title_div);

    var this_intro = document.createElement('p');
    $(this_intro).addClass('intro').text(section.Intro);
    $(this_section).append(this_intro);

    var this_explorable = document.createElement('div');
    $(this_explorable).addClass('explorable');
    $(this_explorable).attr('id',n+'_explorable');
    $(this_section).append(this_explorable);

    var case_study = document.createElement('div');
    $(case_study).addClass('case-study');
    var case_study_before = document.createElement('div');
    var case_study_after = document.createElement('div');
    var case_study_open = document.createElement('div');
    var case_study_close = document.createElement('div');
    $(case_study_before).addClass('case-study-before');
    $(case_study_after).addClass('case-study-after');
    $(case_study_open).addClass('case-study-open');
    $(case_study_close).addClass('case-study-close');
    $(case_study_before).append(case_study_open);
    $(case_study_after).append(case_study_close);
    $(case_study).append(case_study_before).append(case_study_after);
    $(this_section).append(case_study);

  n ++;
    //add the whole thing to the page
    $('#main').append(this_section);
  })


}


// $('.explorable').click(function(){
//   console.log(this)
// })

// $('.explorable').mouseenter(function(){
//   console.log(this)
// })
