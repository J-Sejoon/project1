$(window).scroll(function(){
  if($(window).scrollTop() > $('#main_visual').height()){
  $('#header_in').addClass('scroll');
  }
  else{
    $('#header_in').removeClass('scroll');
  }
});

$(window).scroll(function(){
  if($(window).scrollTop() > $('#concultation').height()){
  $('.service').fadeIn(1500);
  }  
  else{
    $('.service').fadeOut(1500);
  }
});



$('.menuBtn').click(function(){
  $('.menuBtn').toggleClass('on');

  if($('.menuBtn').hasClass('on')){
    $('.menu_container').fadeIn();
    $('body').css({'overflow':'hidden'})
  } else {
    $('.menu_container').fadeOut();
    $('body').css({'overflow':'auto'})
  }  
});






$(function(){
  $(".box1").click(function(){
    $(".box1").css("outline","none");
    $(this).css("outline","2px solid green");
  });
});
$(function(){
  $(".box2").click(function(){
    $(".box2").css("outline","none");
    $(this).css("outline","3px solid green");
  });
});
$(function(){
  $(".box3").click(function(){
    $(".box3").css("outline","none");
    $(this).css("outline","2px solid green");
  });
});



$(window).resize(function(){
  let winW = $(window).width();

  if( winW >= 768 && $('nav').is(':hidden')){
      $('nav').removeAttr('style');
  }
});
