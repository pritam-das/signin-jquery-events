$(function(){

  $('.signin').on('click', function(){
    $('.modal').fadeIn("slow", function(){

      $('.close').on('click', function(){
        $('.modal').fadeOut();
      });

      $('.submit').on('click', function(){
        $('.getstarted input').attr('class', 'error');
      });

      $('.getstarted').on('mouseenter', 'input', function(){
        $(this).attr('class', 'noerror');
      });



    });

  });



});
