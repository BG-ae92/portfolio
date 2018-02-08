var newItemCounter = 1;

var ourHeadline = document.getElementById("headline");

var ourButton = document.getElementById("our-button");

var listItems = document.getElementById("list-items").getElementsByTagName("li");

var ourList = document.getElementById("list-items");

ourList.addEventListener("click", activateItem);

function activateItem(e){

if(e.target.nodeName == "LI"){
  ourHeadline.innerHTML = e.target.innerHTML;
  for (i=0; i < e.target.parentNode.children.length; i++){
    e.target.parentNode.children[i].classList.remove("active");
}
    }
  e.target.classList.add("active");
}

ourButton.addEventListener("click", createNewItem);

function createNewItem(){

ourList.innerHTML += "<li>Something-New " + newItemCounter + "</li>";
newItemCounter++;

}






//


//$(document).ready(function(){

  //$("[href]").on("click", function (event) {

    //  $("this").find(".wrapper").load("#content")

//        $(".nav, .top-grid-line").addClass("slide-up");
  //      $(".bottom-grid-line, .tag").addClass("slide-down");
//        $(".section-info, .vertical-grid-line").addClass("slide-out-right");
  //      $(".cc").addClass("slide-out");
//  });
// });
