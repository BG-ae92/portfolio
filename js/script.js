

var pageCounter = 1;

var getContent = document.getElementById("content");

var btn = document.getElementById("trigger");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function(){
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
  };

  ourRequest.send();
  pageCounter++;

  if (pageCounter > 3){
    btn.classList.add("hidden")
  }


});

function renderHTML(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

    for (ii = 0; ii < data[i].foods.likes.length; ii++){

      if (ii == 0){
        htmlString += data[i].foods.likes[ii];
      }else {
htmlString += " and " + data[i].foods.likes[ii];
      }

    }

htmlString += ' and dislikes ';

for (ii = 0; ii < data[i].foods.dislikes.length; ii++){

  if (ii == 0){
    htmlString += data[i].foods.dislikes[ii];
  }else {
htmlString += " and " + data[i].foods.dislikes[ii];
  }

}



htmlString += ' .</p> <br>'

  }

getContent.insertAdjacentHTML('beforeend', htmlString);

}








$(document).ready(function(){


 $(function(){

     $("a").click(function(evt){
        evt.preventDefault();

         var link = $(this).attr("href");
         setTimeout(function() {
             window.location.href = link;
         }, 1500);




     });
 });
 });



 $(document).ready(function() {
     $('#toggle').click(function() {
         if ($('.nav, .top-grid-line').hasClass("slide-new-down")) {
             $('.nav, .top-grid-line').removeClass('slide-new-down');
             $('.nav, .top-grid-line').addClass('slide-up');
         } else {
             $('.nav, .top-grid-line').removeClass('slide-up');
             $('.nav, .top-grid-line').addClass('slide-new-down');
         }
     });
 });