

function slideAbout(){


  //sliding About
  $('#about-btn').click(function(){

$('div').hasClass("section-not-active").removeClass("section-not-active").addClass("section-active");

});

};




    function containerUtility(){

      $('.item-button').click(function(){

                if ($('#item-info-container').hasClass("toggled")) {
                  $('#item-info-container').removeClass('toggled');

    slideInfo();


    }

      else{

    }
    });

    };




function slideInfo(){

        if ($('#remove-button').hasClass("item-info-button-hidden")) {
            $('#remove-button').removeClass('item-info-button-hidden');
            $('#remove-button').removeClass('slide-out-info-button');
          $('#remove-button').addClass('item-info-button');
          $('#remove-button').addClass('slide-in-info-button');

        } else {
          window.setTimeout(function(){$("#remove-button").addClass("item-info-button-hidden").removeClass("item-info-button");

        $(".item-infos").remove();}, 400);
            $('#remove-button').removeClass('slide-in-info-button');
            $('#remove-button').addClass('slide-out-info-button');


        };


    //remove-interior
      if ($('.pulled-item').hasClass("item-info-hidden")) {
          $('.pulled-item').removeClass('item-info-hidden');
          $('.pulled-item').removeClass('slide-info-out');
        $('.pulled-item').addClass('item-info');
        $('.pulled-item').addClass('slide-info-in');

      } else {
        window.setTimeout(function(){$(".pulled-item").addClass("item-info-hidden").removeClass("item-info");

      }, 400);
          $('.pulled-item').removeClass('slide-info-in');
          $('.pulled-item').addClass('slide-info-out');


      }

    };












/////.css('transform', 'translateY(-' + dest + 'px)')
//{'transform' : 'translate(' + left +', ' + top + ')'}


//Moving Info

 function swipe1(event, direction, distance, duration, fingerCount) {
   $('#item-info-container').removeClass('toggled');
slideInfo();


      };

      var addSwipeTo = function(selector) {
               $(selector).swipe("destroy");
            $(selector).swipe( { swipeRight:swipe1, allowPageScroll:"vertical"} );
          };


//adding swipe













function fightingInfo(){



  $('#fighting-fish').click(function(){
        $('#item-info-container').addClass('toggled');

        $("#item-info-container").load("projects.php #fighting-info", function(){


              addSwipeTo(".pulled-item");

        slideInfo();
        });

});


};

////// slide street art




function streetArtInfo(){


  $('#street-art').click(function(){
      $('#item-info-container').addClass('toggled');

    $("#item-info-container").load("projects.php #street-art-info", function(){
  addSwipeTo(".pulled-item");
    slideInfo();
    });
});

};






//slide casstles


function castlesInfo(){


  $('#castles-link').click(function(){
      $('#item-info-container').addClass('toggled');

    $("#item-info-container").load("projects.php #castles-info", function(){
  addSwipeTo(".pulled-item");
    slideInfo();
    });
});

};


function mblmInfo(){


  $('#mblm-link').click(function(){
      $('#item-info-container').addClass('toggled');

    $("#item-info-container").load("projects.php #mblm-info", function(){
  addSwipeTo(".pulled-item");
    slideInfo();
    });
});

};



function jkogiInfo(){


  $('#jkogi').click(function(){
      $('#item-info-container').addClass('toggled');

    $("#item-info-container").load("projects.php #jkogi-info", function(){
  addSwipeTo(".pulled-item");
    slideInfo();
    });
});

};

function harukInfo(){


  $('#haruklink').click(function(){
      $('#item-info-container').addClass('toggled');

    $("#item-info-container").load("projects.php #haruki-info", function(){
  addSwipeTo(".pulled-item");
    slideInfo();
    });
});

};








function slideSectionInfo(){

  $('.section-info-btn').click(function(){



//Top items
  if ($('#section-info-slider').hasClass("section-info-hidden")) {
      $('#section-info-slider').removeClass('section-info-hidden');
      $('#section-info-slider').removeClass('bottom-nav-dwn');
    $('#section-info-slider').addClass('section-info');
    $('#section-info-slider').addClass('bottom-nav-up');
    $(".section-info-btn").css({"background-image": "url('images/triangle-down.svg')"});
  } else {
    window.setTimeout(function(){$("#section-info-slider").addClass("section-info-hidden").removeClass("section-info");}, 400);
      $('#section-info-slider').removeClass('bottom-nav-up');
      $('#section-info-slider').addClass('bottom-nav-dwn');
      $(".section-info-btn").css({"background-image": "url('images/info-01.svg')"});

  };

});
  };

  function slideContactSection(){

    $('.contact-btn').click(function(){



  //Top items
    if ($('#contact-section').hasClass("contact-hidden")) {
        $('#contact-section').removeClass('contact-hidden');
        $('#contact-section').removeClass('slide-contact-out');
      $('#contact-section').addClass('contact');
      $('#contact-section').addClass('slide-contact-in');
      $('.contact-btn').html('<div class="reg-nav">Close</div>');
    } else {
      window.setTimeout(function(){$("#contact-section").addClass("contact-hidden").removeClass("contact");}, 400);

$('.contact-btn').html('<div class="reg-nav">Contact</div>');
        $('#contact-section').removeClass('slide-contact-in');
        $('#contact-section').addClass('slide-contact-out');


    };

  });
    };


    function slideAboutSection(){

      $('.about-btn').click(function(){



    //Top items
      if ($('#about-section').hasClass("about-hidden")) {
          $('#about-section').removeClass('about-hidden');
          $('#about-section').removeClass('slide-about-out');
        $('#about-section').addClass('about');
        $('#about-section').addClass('slide-about-in');
        $('.about-btn').html('<div class="reg-nav">Close</div>');
      } else {
        window.setTimeout(function(){$("#about-section").addClass("about-hidden").removeClass("about");}, 400);

$('.about-btn').html('<div class="reg-nav">About</div>');
          $('#about-section').removeClass('slide-about-in');
          $('#about-section').addClass('slide-about-out');

      };

    });
      };

function navUtility(){

$('.nav-utility').click(function(){

  if($('#mobile').hasClass('nav-list')){
    $('#mobile').removeClass('nav-list');
    $('#mobile').addClass('nav-list-hidden');
  }
  else{}
  ;


});


};



      function slideNavList(){

        $('.mobile-nav-btn').click(function(){


      //Top items
        if ($('#mobile').hasClass("nav-list-hidden")) {
            $('#mobile').removeClass('nav-list-hidden');
            $('#mobile').addClass('fade-in-fast');
          $('#mobile').addClass('nav-list');
          $('#mobile').removeClass('fade-out');
$(".mobile-nav-btn").css({"background-image": "url('images/close-01.svg')"});
        } else {
          window.setTimeout(function(){$("#mobile").addClass("nav-list-hidden").removeClass("nav-list");}, 200);
$(".mobile-nav-btn").css({"background-image": "url('images/menu-01.svg')"});

            $('#mobile').removeClass('fade-in-fast');
            $('#mobile').addClass('fade-out');

        };

      });
        };






function slideInOr(){


//Top items
  if ($('.nav, .top-grid-line, .top-nav, .top-nav-background').hasClass("slide-top-down")) {
      $('.nav, .top-grid-line, .top-nav, .top-nav-background').removeClass('slide-top-down');
    $('.nav, .top-grid-line, .top-nav, .top-nav-background').addClass('slide-up');
  } else {
    $('.nav, .top-grid-line, .top-nav, .top-nav-background').removeClass('slide-up');
    $('.nav, .top-grid-line, .top-nav, .top-nav-background').addClass('slide-top-down');
  };

//Right side items
  if ($('.vertical-grid-line, .right-nav').hasClass("slide-in-right")) {
      $('.vertical-grid-line, .right-nav').removeClass('slide-in-right');
    $('.vertical-grid-line, .right-nav').addClass('slide-out-right');
  } else {
    $('.vertical-grid-line, .right-nav').removeClass('slide-out-right');
    $('.vertical-grid-line, .right-nav').addClass('slide-in-right');
  };


  //Bottom side items

  if ($('.bottom-grid-line, .tag').hasClass("slide-bottom-up")) {
      $('.bottom-grid-line, .tag').removeClass('slide-bottom-up');
    $('.bottom-grid-line, .tag').addClass('slide-bottom-down');
  } else {
    $('.bottom-grid-line, .tag').removeClass('slide-bottom-down');
    $('.bottom-grid-line, .tag').addClass('slide-bottom-up');
  };

  //Left side items
    if ($('.cc').hasClass("slide-in-left")) {
        $('.cc').removeClass('slide-in-left');
      $('.cc').addClass('slide-out-left');
    } else {
      $('.cc').removeClass('slide-out-left');
      $('.cc').addClass('slide-in-left');
    };


if ($('.bottom-nav').hasClass("slide-bottom-up")) {
    $('.bottom-nav').removeClass('slide-bottom-up');
  $('.bottom-nav').addClass('slide-bottom-down');
} else {
  $('.bottom-nav').removeClass('slide-bottom-down');
  $('.bottom-nav').addClass('slide-bottom-up');

};



if ($('.photo-section, .photo-section-graphic').hasClass("fade-in")) {
    $('.photo-section, .photo-section-graphic').removeClass('fade-in');
  $('.photo-section, .photo-section-graphic').addClass('fade-out');
} else {
  $('.photo-section, .photo-section-graphic').removeClass('fade-out');
  $('.photo-section, .photo-section-graphic').addClass('fade-in');

};

};




$(document).ready(function() {






containerUtility();
streetArtInfo();
castlesInfo();
fightingInfo();
slideSectionInfo();
slideContactSection();
slideAboutSection();
slideNavList();
navUtility();
jkogiInfo();
mblmInfo();
harukInfo();



    $("a").click(function(){

      var href = $(this).attr('href');
      slideInOr();
      setTimeout(function() { window.location.href = href; }, 200 );
      return false;
    });

});
