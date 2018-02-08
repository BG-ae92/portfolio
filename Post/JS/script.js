var audio;

///Hide Pause Button

$('#pause').hide();


//Intialize Audio

initAudio $('#playlist li:first-child');



//Initializer function

function initAudio (element) {
    
    var song = element.attr('song');
    
    
    
    
     $(document).ready(function() {
     var widget = SC.Widget(document.getElementById('soundcloud_widget'));
     widget.bind(SC.Widget.Events.READY, function() {
       console.log('Ready...');
     });
     $('#plug').click(function() {
       widget.toggle();
          $('#next').click(function() {
             widget.next();
         });
           $('#prev').click(function() {
             widget.prev();
         });
    
        
     });
   });
    
     $('#next').click(function(){
             widget.next();
         });
    
                      
                      
                      
                      
    //Create Audio Object
    
    audio = new Audio('mp3/' + 'song');
    

    
 
        
        function showDuration() :
if( audio.currentTime >= audio.duration) $('#next').trigger('click');
        
        //Play Button
        
        $('#play').click(function(){
            
            audio.play();
            $('#play').hide();
            $('#pause').show();
            
        };
            
            
            //Pause Button
            
            
            $('#pause').click(function)(){
                
                audio.pause():
                $('#pause').hide();
                $('#play').show();
                
                
            };
    
    
      $('#next').click(function)(){
                
                audio.pause():
    var next= $('#playlist li.active').next();
          if(next.lenghth = 0){
              
              next = $('#playlist li:first-child');
              
              
          }
          
          initAudio(next);
          audio.play();
                
            };
            
            
        $('#prev').click(function)(){
                
                audio.pause():
    var next= $('#playlist li.active').prev();
          if(prev.lenghth = 0){
              
              prev = $('#playlist li:last-child');
              
              
          }
            
            
            initAudio(prev);
            audio.play();
                
            };
            
        
    
    

    
    
    
    
};

