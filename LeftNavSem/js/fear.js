function playfear(){

  // $('#explorable_fear img').css('width', '70%');

var t = $('#explorable_fear')[0].parentElement
$(t).find('.explorable').css({'border': '0px red solid'})

var FearOn = false;

// var tixLeft = document.createElement('p');
// $(tixLeft).addClass('tix-left fear-type');
// $('#explorable_fear').append(tixLeft);
// $(tixLeft).text("200");

// var saleDaysLeft = document.createElement('p');
// $(saleDaysLeft).addClass('tix-left fear-type');
// $('#explorable_fear').append(saleDaysLeft);
// $(saleDaysLeft).text("1 week");


var FearButtonRight = $('.button_fear');
// FearButtonLeft = FearButtonRight.clone(true);
// FearButtonRight.before(FearButtonLeft);
// $(FearButtonLeft).attr('id', 'button_fear_A');
// $(FearButtonLeft).removeClass('button_fear')


$('.button_fear').click(function(){
  if (FearOn){
    $('#explorable_fear .placeholder-image').attr(
    'src','img/fear-01.jpg');
    $('#explorable_fear .fear-counter .wrap').css('display', 'none');
    FearOn = false;
  } else {
    $('#explorable_fear .placeholder-image').attr(
    'src','img/fear-01c.jpg');
    $('#explorable_fear .fear-counter .wrap').css('display', 'block');

    FearOn = true;

  }

})

// $(FearButtonLeft).click(function(){
//
// })



var fearAnimatedCountdown =
'<div class="wrap">'+

  '<div class="countdown"><div class="bloc-time hours" data-init-value="24"><span class="count-title">Hours</span>'+

      '<div class="figure hours hours-1"><span class="top">2</span><span class="top-back"><span>2</span>'+
        '</span><span class="bottom">2</span><span class="bottom-back"><span>2</span></span></div>'+

      '<div class="figure hours hours-2"><span class="top">4</span>'+
        '<span class="top-back"><span>4</span></span><span class="bottom">4</span>'+
        '<span class="bottom-back"><span>4</span></span></div></div>'+

    '<div class="bloc-time min" data-init-value="0">'+
      '<span class="count-title">Minutes</span><div class="figure min min-1">'+
        '<span class="top">0</span><span class="top-back"><span>0</span></span>'+
        '<span class="bottom">0</span><span class="bottom-back"><span>0</span></span></div>'+

      '<div class="figure min min-2"><span class="top">0</span>'+
        '<span class="top-back"><span>0</span></span><span class="bottom">0</span>'+
        '<span class="bottom-back"><span>0</span></span></div></div>'+

    '<div class="bloc-time sec" data-init-value="0"><span class="count-title">Seconds</span>'+

        '<div class="figure sec sec-1">'+
        '<span class="top">0</span><span class="top-back"><span>0</span></span><span class="bottom">0</span>'+
        '<span class="bottom-back"><span>0</span></span>  '+
      '</div><div class="figure sec sec-2"><span class="top">0</span>'+
        '<span class="top-back"><span>0</span></span>'+
        '<span class="bottom">0</span>'+
        '<span class="bottom-back"><span>0</span></span></div></div></div></div>'




        var FearCounter = document.createElement('div');
        $(FearCounter).addClass('fear-counter');
        $(FearCounter).append(fearAnimatedCountdown);
        $('#explorable_fear').append(FearCounter);
        // $('#fear-get-code').html('')
        if ($('#explorable_fear').find($('#fear-get-code')).length > 0){
          console.log('has it')

        } else {
          $('#explorable_fear').append('<a id="fear-get-code" href="http://codepen.io/doriancami/pen/jEJvaV" target="_blank">GET CODE</a>')

        }







////////
// Create Countdown
var Countdown = {

  // Backbone-like structure
  $el: $('.countdown'),

  // Params
  countdown_interval: null,
  total_seconds     : 0,

  // Initialize the countdown
  init: function() {

    // DOM
		this.$ = {
    	hours  : this.$el.find('.bloc-time.hours .figure'),
    	minutes: this.$el.find('.bloc-time.min .figure'),
    	seconds: this.$el.find('.bloc-time.sec .figure')
   	};

    // Init countdown values
    this.values = {
	      hours  : this.$.hours.parent().attr('data-init-value'),
        minutes: this.$.minutes.parent().attr('data-init-value'),
        seconds: this.$.seconds.parent().attr('data-init-value'),
    };

    // Initialize total seconds
    this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

    // Animate countdown to the end
    this.count();
  },

  count: function() {

    var that    = this,
        $hour_1 = this.$.hours.eq(0),
        $hour_2 = this.$.hours.eq(1),
        $min_1  = this.$.minutes.eq(0),
        $min_2  = this.$.minutes.eq(1),
        $sec_1  = this.$.seconds.eq(0),
        $sec_2  = this.$.seconds.eq(1);

        this.countdown_interval = setInterval(function() {

        if(that.total_seconds > 0) {

            --that.values.seconds;

            if(that.values.minutes >= 0 && that.values.seconds < 0) {

                that.values.seconds = 59;
                --that.values.minutes;
            }

            if(that.values.hours >= 0 && that.values.minutes < 0) {

                that.values.minutes = 59;
                --that.values.hours;
            }

            // Update DOM values
            // Hours
            that.checkHour(that.values.hours, $hour_1, $hour_2);

            // Minutes
            that.checkHour(that.values.minutes, $min_1, $min_2);

            // Seconds
            that.checkHour(that.values.seconds, $sec_1, $sec_2);

            --that.total_seconds;
        }
        else {
            clearInterval(that.countdown_interval);
        }
    }, 1000);
  },

  animateFigure: function($el, value) {

     var that         = this,
		     $top         = $el.find('.top'),
         $bottom      = $el.find('.bottom'),
         $back_top    = $el.find('.top-back'),
         $back_bottom = $el.find('.bottom-back');

    // Before we begin, change the back value
    $back_top.find('span').html(value);

    // Also change the back bottom value
    $back_bottom.find('span').html(value);

    // Then animate
    TweenMax.to($top, 0.8, {
        rotationX           : '-180deg',
        transformPerspective: 300,
	      ease                : Quart.easeOut,
        onComplete          : function() {

            $top.html(value);

            $bottom.html(value);

            TweenMax.set($top, { rotationX: 0 });
        }
    });

    TweenMax.to($back_top, 0.8, {
        rotationX           : 0,
        transformPerspective: 300,
	      ease                : Quart.easeOut,
        clearProps          : 'all'
    });
  },

  checkHour: function(value, $el_1, $el_2) {

    var val_1       = value.toString().charAt(0),
        val_2       = value.toString().charAt(1),
        fig_1_value = $el_1.find('.top').html(),
        fig_2_value = $el_2.find('.top').html();

    if(value >= 10) {

        // Animate only if the figure has changed
        if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
        if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
    }
    else {

        // If we are under 10, replace first figure with 0
        if(fig_1_value !== '0') this.animateFigure($el_1, 0);
        if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
    }
  }
};

// Let's go !
Countdown.init();


};
