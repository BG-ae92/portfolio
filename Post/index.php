<!DOCTYPE html>
<html lang="en">
<head>





  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>August 26</title>
  <meta name="Post-Malone" content="">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href='https://fonts.googleapis.com/css?family=Arimo:700' rel='stylesheet' type='text/css'>

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/favicon.png">

   <script type="text/javascript" src="https://ajax.microsoft.com/ajax/jQuery/jquery-1.4.2.min.js"></script>
       <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>

    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
     <script src="http://w.soundcloud.com/player/api.js"></script>






 <script>




        //<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the black DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'});
        });
    //]]>





$(document).ready(function(){
     $(window).scroll(function(){
       $('.right').css('transform', 'translate3d(0,' + $(this).scrollTop()*.65 + 'px, 0)');
    }).scroll();



 });





    </script>

    </head>


    <div id="warning-message"><p><img src="new-images/rotate-1.png"/></p></div>







<body>


    <div id="wrapper">
        <div id="preloader">
    <div id="status">&nbsp;</div>
</div>


  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->


 <iframe id="soundcloud_widget" class="sc-player" hidden="true"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/192526255&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
      margin-top: 0px;
         padding-top: 0px;
         width="0"
      height="0"
      frameborder="none"></iframe>




    <div class="right">
   <div class="august"><p><img src="new-images/75_aug26.png"/></p></div>
    </div>






    <div class="flame" >
       <div class="nav2">


        <a id="load" href="link to download">DOWNLOAD THE MIXTAPE</a>



           <a id="plug" >Play/Pause</a>



           <a id="enter">ENTER</a>



           <a id="shop">SHOP</a>




            <a id="stream">STREAM ON SOUNDCLOUD</a>
          </div>

</div>

        </div>





    </div>

    <div id="postbg">

    <div class="post"><img src="new-images/75_aug26.png"/></div>


   </div>




    <div class="dither2" id="jump">

        <div class="download"><img src="new-images/finalsitetracklist.png"/> </div>

    </div>








<div class="postypost"> </div>





     <script>



   $(document).ready(function() {
     var widget = SC.Widget(document.getElementById('soundcloud_widget'));
     widget.bind(SC.Widget.Events.READY, function() {
       console.log('Ready...');
     });
     $('#plug').click(function() {
       widget.toggle();

     });




   });




  </script>




<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
 </div>
    </body>



</html>
