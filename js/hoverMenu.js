$(window).on('load',function(){
  $menu = $('.pure-menu-item');
  console.log($menu);
  var color=['#ec407a','#7e57c2','#66bb6a','#ff7043','#afb42b', '#bdbdbd', '#a1887f','#aed581','#26c6da'];
  var count = 0;

  function menuMouseOver($elemnt){
    $elemnt.hover(
      function(){

        $(this).children('a').css('border-bottom', getColor());

      }, function(){
        $(this).children('a').css('border-bottom', 'none');

      }
    );
  };

  function getColor(){
    if(count == color.length){
      count = 0
    }
    count++;
    return ('4px solid ' + color[count]);
  }

  menuMouseOver($menu);

});
