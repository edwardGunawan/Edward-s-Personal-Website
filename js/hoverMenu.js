$(window).on('load',function(){
  $menu = $('.pure-menu-item');
  console.log($menu);
  var color=['#ec407a','#7e57c2','#66bb6a','#ff7043','#afb42b', '#bdbdbd', '#a1887f','#aed581','#26c6da'];
  var count = 0;
  var textArray = [
    'Things',
    'taht things',
    'those things'
  ];
  var countText = 0;
  var terms = $('#renderThings li');

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


  function changeText(){

    var ct = $('#things').data('term') || 0;
    // console.log(terms.eq([ct]).text());
    $('#things').data('term', ct == terms.length-1 ? 0: ct+1)
    .text(terms.eq([ct]).text())
    .fadeIn().delay(2000).fadeOut(200,changeText);
  }


  menuMouseOver($menu);
  $(changeText);

});
