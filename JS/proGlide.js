var windowWidth, windowHeight;

$(document).ready(function(){
  windowWidth =  $(window).width();
  windowHeight = $(window).height();
  console.log("width: " + windowWidth + "     height: " + windowHeight );
  console.log("ready");


  //slide up entryLogo
  $(".logoBox").click(function() {
    $("#entry").slideUp(4000);
    $(".homepage").removeClass("entryLock");
  });

  //call slideSum() every 5600ms
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



  //
  //
  //
  // window resize
  window.addEventListener("resize", function() {
    //store window width and height
    windowWidth =  $(window).width();
    windowHeight = $(window).height();

    console.log("width: " + windowWidth + "     height: " + windowHeight );
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

    positionImg();
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

  positionLogoBox();

  initMap();
});

function positionLogoBox() {
  console.log("running")
  //position entrylogo box
  // var logoWidth = $("#logoBox").width();
  // var logoHeight = $("#logoBox").height();
  // var top = "calc(100vh - "+logoHeight/2+")"
  // console.log("calc(100vh - "+parseInt(logoHeight/2)+")" );
  // var left = "calc(100vw - "+parseInt(logoWidth/2+")"
  // $("#logoBox").css("top", top)
}

function initMap() {
  // The location of proGlide
  var proGlide = {lat: 53.220474, lng: -0.461603};
  // location of LINCOLN
  var lincs = {lat: 53.2304, lng: -0.5407}
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 11, center: lincs});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: proGlide, map: map});
}

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
//img gallery positionImg
function positionImg() {
  console.log("positioning");
  var img = "#fullImg > img";
  var imgHeight = $(img).height();
  console.log(imgHeight);
  var imgWidth = $(img).width();
  console.log(imgWidth);

  //if window is landscape
  if (windowWidth > windowHeight) {
    //portrait img
    if (imgHeight < imgWidth) {
      console.log("landscapeimg");
      $(img).css("width", "80vw");
    }
    else {
      console.log("portraitimg");
      $(img).css("height", "100vh");
    }
    var height = $(img).height();
    var width = $(img).width();

    var top = "calc(50vh - "+parseInt(height/2)+"px)";
    var left = "calc(50vw - "+parseInt(width/2)+"px)";
    $(img).css("top", top );
    $(img).css("left", left);
  };
  //landscape window
  if (windowHeight > windowWidth) {
    //portrait img
    if (imgHeight > imgWidth) {
      console.log("porteimg");
      $(img).css("height", "80vh");
    }
    else {
      console.log("landimg");
      $(img).css("width", "100vw");
    }
    var height = $(img).height();
    var width = $(img).width();
    var top = "calc(50vh - "+parseInt(height/2)+"px)";
    var left = "calc(50vw - "+parseInt(width/2)+"px)";
    $(img).css("top", top );
    $(img).css("left", left);
  };

};

var prev;
var colour;
var currentImg
$(document).ready(function(){

  //if image is clicked
  $(".img").click(function() {
    console.log("click");
    //take source data from element
    var src = $(this).data("source");
    currentImg = $(this).data("order");
    //add image to html
    $("#fullImg").html("<img src='" + src + "'>");
    //fade in gallery

    $(".FullScreenGallery").fadeIn(500);
    $("#fullImg > img").ready(positionImg());
  });

var imgChanged = true
  $("#gallNext img").click(function() {


    if(imgChanged == true) {
      imgChanged = false;
      setTimeout( function() {
        imgChanged = true
      }, 1000)
      if (currentImg < 8) {
        currentImg++;
      }
      else {
        currentImg = 1;
      };
      var nextImg = "#img" + parseInt(currentImg);
      src = $(nextImg).data("source");
      $("#fullImg").fadeOut(300);

      setTimeout( function() {
        $("#fullImg").empty();
        $("#fullImg").html("<img src='" + src + "'>");
        $("#fullImg").fadeIn(300);
        $("#fullImg > img").ready(positionImg());

      }, 301);
    }


  });
  $("#gallPrev img").click(function() {

    if(imgChanged == true) {
      imgChanged = false;
      setTimeout( function() {
        imgChanged = true
      }, 1000)
      if (currentImg > 1) {
        currentImg--;
      }
      else {
        currentImg = 8;
      };
      var nextImg = "#img" + parseInt(currentImg);
      src = $(nextImg).data("source");
      $("#fullImg").fadeOut(300);

      setTimeout( function() {
        $("#fullImg").html("<img src='" + src + "'>");
        $("#fullImg").fadeIn(300);
        positionImg();

      }, 301);
    }

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
