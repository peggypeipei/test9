$(".button").mouseleave(
  function(){
    $(this).css("background-color","transparent");
  }
);
$(".button").mouseenter(
  function(){
    $(this).css("background-color","#fff");
  }
);
$(".button1").mouseleave(
  function(){
    $(this).css("border-bottom","solid 7px transparent");
  }
);
$(".button1").mouseenter(
  function(){
    $(this).css("border-bottom","solid 7px #05e6ff");
  }
);
$(".section2 .button").click(
  function(){
    $(".section2 h1").html("");
    $(".section2 p").html("");
    $(".pic1").addClass("pic2");
    $(".section2 .button").css("visibility","hidden");
  }
);
$(".section2").mouseleave(
  function(){
    $(".pic1").removeClass("pic2");
  }
);
$(".section2").mouseenter(
  function(){
    $(".section2 h1").html("釀酒過程");
    $(".section2 p").html("酒的誕生可不是我們想像中的那麼簡單喔,<br>可是需要經過很多的程序呢!<br>就讓我們一起探索小麥變身的神奇過程吧!");
    $(".section2 .button").css("visibility","visible");
  }
);