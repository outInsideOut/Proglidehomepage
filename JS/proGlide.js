var windowWidth, windowHeight;

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

  windowWidth =  $(window).width();
  windowHeight = $(window).height();
  console.log("width: " + windowWidth + "     height: " + windowHeight );
  //
  //
  //
  // window resize
  window.addEventListener("resize", function() {
    //store window width and height
    windowWidth =  $(window).width();
    windowHeight = $(window).height();
    $(".colour").css("transition", "0s all");
    //if portrait
    if (windowWidth < windowHeight) {
      //height of colourBox
      colBoxHght = $(".colourBox").height();
      //set height of colour box to 90% of colBoxHgt
      $(".colour").css("height", colBoxHght * 0.9);
      //get colour height
      var colourHeight = $(".colour").height();
      //make width == height
      $(".colour").css("width", colourHeight);
    }
    //if landscape
    if (windowWidth > windowHeight) {
      //if less than 1100px wide
      if (windowWidth < 1100) {
        $(".colour").css("width", "20vw")
      }
      else {
        $(".colour").css("width", "calc(50% - 1rem)")
      }
      //set height==width
      var colHeight = $(".colour").width();
      $(".colour").css("height", colHeight);
    }
    $(".colour").css("transition", "0.5s all");
  });

  if (windowWidth < windowHeight) {
    colBoxHght = $(".colourBox").height();
    $(".colour").css("height", colBoxHght * 0.9);
    var colourHeight = $(".colour").height();
    $(".colour").css("width", colourHeight);
  }
  if (windowWidth > windowHeight) {
    if (windowWidth > windowHeight) {
      if (windowWidth < 1100) {
        $(".colour").css("width", "20vw")
      }
      else {
        $(".colour").css("width", "calc(50% - 1rem)")
      }
      colHeight = $(".colour").delay(500).width();
      $(".colour").css("height", colHeight);
    }
  }

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
      var colour = $(this).data("colour");
      $(this).css("background-color", colour);
      console.log(colour);
    });
}

function positionImg() {
  console.log("positioning");
  var img = "#fullImg > img"
  var imgHeight = $(img).height();
  console.log(imgHeight);
  var imgWidth = $(img).width();
  console.log(imgWidth);

  if (imgHeight < imgWidth) {
    console.log("landscape");
    $(img).css("width", "100vw");

    var height = $(img).height();
    var top = "calc(50vh - "+parseInt(height/2)+"px)";
    $(img).css("top", top );
  };

};

var prev;
var colour;
$(document).ready(function(){

  //if image is clicked
  $(".img").click(function() {
    console.log("click");
    //take source data from element
    var src = $(this).data("source");
    //add image to html
    $("#fullImg").html("<img src='" + src + "'>");
    //fade in gallery

    $(".FullScreenGallery").fadeIn(500);
    $("#fullImg > img").ready(positionImg());
  });



  $("#gallcloseBttn").click( function() {
    $(".FullScreenGallery").fadeOut(500);
  });

  $(".colour").click(function(){
    console.log("click");
    colour = $(this).data("colour");

    console.log(colour);
    $(".customDoor").css("background-color", colour);
    $(this).addClass("selected");
    $("#" + prev).removeClass("selected");
    prev = $(this).attr("id");

    var data = $(this).data("name");
    console.log(data);

    $(".colourName").empty().text("" + data);
  })
});
