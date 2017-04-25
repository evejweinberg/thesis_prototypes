var hero;
var farDeg = 75;
var closeDeg = 50;
var spine_right = "-4.5vw";
var spine_left = "10vw";


var sourcesDiv = document.createElement('div');
$(sourcesDiv).addClass('title-div');
var sourceTitleP = document.createElement('p');
$(sourceTitleP).addClass('title');
$(sourceTitleP).text('Sources')
$(sourcesDiv).append(sourceTitleP);
$('.sources .header').append(sourcesDiv);



allBooks.forEach(function(e, num){
  var center = Math.round(allBooks.length/2)
  var index = num+1
  var book = document.createElement('div');
  var spine = document.createElement('div');
  var book_3D = document.createElement('div');
  var book_cover = document.createElement('img');
  var book_deets = document.createElement('div');
  var book_title = document.createElement('p');
  $(book_title).addClass('book-title')
  $(book_3D).addClass('book-3D')

  $(book_title).html(e.type+': '+e.title)
  book_cover.src = e.cover
  $(book).addClass('book');
  $(book_cover).addClass('book-cover');
  $(book).attr('id', e.position);
  $(book_deets).addClass('book-description')
  $(spine).addClass('spine')
  // $(book_3D).append(spine)
  $(book_3D).append(book_cover)
  $(book).append(book_3D);
  $(book).append(book_deets)
  $(book_deets).append(book_title)

  if (index == center){
    $(book).addClass("flex-item-4");
    $(book).children('.book-description').css({'opacity': 1})
    $(book).children('.book-3D').css({
      'transform': 'rotateY(0deg) scale(1)'
    })
    // $(book).find('.spine').remove();
    // $(book).find('.spine').attr('class', 'spine');



  } else if (index == center-1){
    $(book).addClass("flex-item-2");
    $(book).children('.book-3D').css({
      'transform': 'rotateY('+closeDeg+'deg) scale(1)'
    })
    // $(book).find('.spine').attr('class','spine spine-left');

  } else if (index == center+1){
    $(book).addClass("flex-item-2");
    $(book).children('.book-3D').css({
      'transform': 'rotateY(-'+closeDeg+'deg) scale(1)'
    })
    // $(book).find('.spine').attr('class','spine spine-right');

  } else if (index < center+1) {
    $(book).addClass("flex-item-1");
    $(book).children('.book-3D').css({
      'transform': 'rotateY('+farDeg+'deg) scale(1)'
    })
    // $(book).find('.spine').attr('class','spine spine-far-left');

  } else if (index > center+1) {
    $(book).addClass("flex-item-1");
    $(book).children('.book-3D').css({
      'transform': 'rotateY(-'+farDeg+'deg) scale(1)'
    })

  }

  //now add each one to the parent waiting for them in HTML
  $('.all-books').append(book)
})

//add click event for all
$('.book').click(recenterBooks)
// $('.book-3D').click(recenterBooks)


function recenterBooks(book){

  // look through all books
  $('.book').each(function(e){
    // remove classList from all books
    $(this).attr('class', '')
    // $('.book-item').css({'transform': ''});
    //if this book is == to the thing clicked...
    if (this == book.target){

      //get it's index (which is n - 1)
      hero = $(this).index()

      //hero stuff!!!
      $(this).children('.book-description').css({'opacity': 1})
      $(this).children('.book-3D').css({
        'transform': 'rotateY(0deg) scale(1)'
      })
      //it's hero so no spine
      // $(this).find('.spine').attr('class', 'spine');
      //make it the hero width
      $(this).addClass('book flex-item-4')

    } else {
      $(this).children('.book-description').css({'opacity': 0})
      $(this).addClass('book flex-item-1')
    }

  })

 //one left of hero
  $('.all-books .book:nth-child('+(hero)+')').attr('class','book flex-item-2');
  $('.all-books .book:nth-child('+(hero)+') > .book-3D').css({
    'transform': 'rotateY('+closeDeg+'deg) scale(.9)'
  });
  // $('.all-books .book:nth-child('+(hero)+') > .book-3D > .spine').attr('class', 'spine spine-left');


//one right of hero
  $('.all-books .book:nth-child('+(hero+2)+')').attr('class','book flex-item-2')
  $('.all-books .book:nth-child('+(hero+2)+') > .book-3D').css({
    'transform': 'rotateY(-'+closeDeg+'deg) scale(.9)'
  });
  // $('.all-books .book:nth-child('+(hero+2)+') > .book-3D > .spine').attr('class', 'spine spine-right');



  //far left of hero:
  // console.log(hero)
  $('.all-books .book:nth-child(n+'+(hero+3)+') > .book-3D').css({
    'transform': 'rotateY(-'+farDeg+'deg) scale(.85)'
  });
  // $('.all-books .book:nth-child(n+'+(hero+3)+') > .book-3D > .spine').attr('class', 'spine spine-far-right');

  //far righ tof hero
  $('.all-books .book:nth-child(-n+'+(hero-1)+') > .book-3D').css({
    'transform': 'rotateY('+farDeg+'deg) scale(.85)'
  });
  // $('.all-books .book:nth-child(-n+'+(hero-1)+') > .book-3D > .spine').attr('class', 'spine spine-far-left');

}
