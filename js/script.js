$(window).on('load',function(){
  /* windows fade in and out when scrolling down  */
  function fade(pageLoad){

    $window = $(window);

    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    // var windowBottom = $(window).scrollTop() + $(window).innerHeight();

    var min = 0.1;
    var max = 0.9;
    var threshold = 0.04;

    $(".fade").each(function(){
      $element = $(this);

      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      /* check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).height();
      // console.log(" object Bottom" ,objectBottom);
      /* If the element is completely within bounds of the window, fade it in */
      // console.log('objet bottom is : '+ objectBottom + " window_bottom_position is :" + window_bottom_position);
      if(objectBottom < window_bottom_position){ // object comes into view (scrolling down)
        if($(this).css('opacity') < (min+threshold || pageLoad)){$(this).fadeTo(300,max);}
      }else {  // object goes out of view (scrolling up)
        // if($(this).css('opacity') >= (max-threshold || pageLoad)){$(this).fadeTo(100,min);}
      }
    });
  }


    fade(true); //fade element on pageLoad
    $(window).scroll(function(){fade(true);});  // fade elements on scroll



});
