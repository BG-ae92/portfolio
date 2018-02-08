
    function containerUtilityWeb(){

      $('.web-item-button').click(function(){

                if ($('#item-info-container').hasClass("toggled")) {
                  $('#item-info-container').removeClass('toggled');

    slideWebInfo();


    }

      else{

    }
    });

    };









function swipe1(event, direction, distance, duration, fingerCount) {
  $('#item-info-container').removeClass('toggled');
slideWebInfo();
websiteIsolation();

     };

     var addSwipeTo = function(selector) {
              $(selector).swipe("destroy");
           $(selector).swipe( { swipeRight:swipe1, allowPageScroll:"vertical"} );
         };





function websiteIsolation(){

if($('#isolate').hasClass('cover-hidden')){
$('#isolate').removeClass('cover-hidden');
$('#isolate').addClass('cover');
}

else{
  $('#isolate').removeClass('cover');
  $('#isolate').addClass('cover-hidden');
}

};




function slideWebInfo(){

        if ($('#web-remove-button').hasClass("web-item-info-button-hidden")) {
            $('#web-remove-button').removeClass('web-item-info-button-hidden');
            $('#web-remove-button').removeClass('slide-out-info-button');
          $('#web-remove-button').addClass('web-item-info-button');
          $('#web-remove-button').addClass('slide-in-info-button');

        } else {
          window.setTimeout(function(){$("#web-remove-button").addClass("web-item-info-button-hidden").removeClass("web-item-info-button");

        $(".web-item-infos").remove();}, 500);
            $('#web-remove-button').removeClass('slide-in-info-button');
            $('#web-remove-button').addClass('slide-out-info-button');
websiteIsolation();

        };


        if ($('.pulled-item').hasClass("web-item-info-hidden")) {
            $('.pulled-item').removeClass('web-item-info-hidden');
            $('.pulled-item').removeClass('shrink-window');
          $('.pulled-item').addClass('web-item-info');
          $('.pulled-item').addClass('grow-window');

        } else {
          window.setTimeout(function(){$(".pulled-item").addClass("web-item-info-hidden").removeClass("web-item-info");

        }, 500);
            $('.pulled-item').removeClass('grow-window');
            $('.pulled-item').addClass('shrink-window');


        }



};

function subjectMattersInfo(){

$('#subject-matters-button').click(function(){
    $('#item-info-container').addClass('toggled');

  $("#item-info-container").load("projects.php #subject-matters-web-info", function(){
addSwipeTo(".pulled-item");
websiteIsolation();
  slideWebInfo();
  });
});

};




function streetArtWebInfo(){

$('#street-web').click(function(){
    $('#item-info-container').addClass('toggled');

  $("#item-info-container").load("projects.php #street-web-info", function(){
addSwipeTo(".pulled-item");
websiteIsolation();
  slideWebInfo();
  });
});

};


function augustTwentyWebInfo(){

$('#august-26-button').click(function(){
    $('#item-info-container').addClass('toggled');

  $("#item-info-container").load("projects.php #august-26-web-info", function(){
addSwipeTo(".pulled-item");
websiteIsolation();
  slideWebInfo();
  });
});

};

function jkogiWebInfo(){

$('#jkogi-web-button').click(function(){
    $('#item-info-container').addClass('toggled');

  $("#item-info-container").load("projects.php #jkogi-web-info", function(){
addSwipeTo(".pulled-item");
websiteIsolation();
  slideWebInfo();
  });
});

};


function blackburnWebInfo(){

$('#blackburn-web-button').click(function(){
    $('#item-info-container').addClass('toggled');

  $("#item-info-container").load("projects.php #blackburn-web-info", function(){
addSwipeTo(".pulled-item");
websiteIsolation();
  slideWebInfo();
  });
});

};


function contractorWebInfo(){

$('#contractor-web-button').click(function(){
    $('#item-info-container').addClass('toggled');

  $("#item-info-container").load("projects.php #contractor-web-info", function(){
addSwipeTo(".pulled-item");
websiteIsolation();
  slideWebInfo();
  });
});

};
