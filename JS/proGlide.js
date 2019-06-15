
$(document).ready(function(){
  console.log("ready");
  //call slideSum() every 3600ms

  setInterval(slideSum, 5800);

  //to open side menu when hamburder icon is clicked on smaller screens
  var side = document.getElementById('dropNav');
  $(".hamburger").click(function(){
    console.log("clicked");
    side.style.width = "100vw";
    //hide miniButtons in gallery due to overlay problem
    $(".miniButtons").css("display", "none");
  });
  $("#closeBttn").click(function(){
    //squish menu to left
    side.style.width = "0";
    //bring back minibuttons in gallery
    $("#shuffleBttn, #fullBttn").css("display", "block");
  });

  setColours();


});

var id = 1;
function slideSum() {
  console.log(id)
  $("#box" + id).fadeIn(300).delay(5000).fadeOut(300);
  if (id == 3) {
    id = 1;
  }
  else {
    id++;
  }

}

function setColours() {
  console.log("coloursSetting");

// loops through .colourdivs setting bgcolor to id value
    $(".colourBox .colour").each(function() {
      var colour = $(this).attr("id");
      $(this).css("background-color", colour);
      console.log(colour);
    });
}

var prev;
var colour;
$(document).ready(function(){
  $(".colour").click(function(){
    console.log("click");
    colour = $(this).attr("id");

    console.log(colour);
    $(".customDoor").css("background-color", colour);
    $(this).addClass("selected");
    $("#" + prev).removeClass("selected");
    prev = colour;

    var data = $(this).data("colour");
    console.log(data);

    $(".colourName").empty().text("" + data);
  })
});
