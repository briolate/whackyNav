$(document).ready(function() {
  $('ul li').attr('class', 'listed-items')
  .css("width", 200)
  .css("height", 50)
});

$('ul li').hover(function(){
    $(this).fadeTo('fast', '.25');
  },
  function(){
    $(this).fadeTo('fast', '1');
  }
);

$('ul li').eq(0).on('click', function() {
    $(this).css('background-color', '#EAE7DC');
});
$('ul li').eq(1).on('click', function() {
    $(this).css('background-color', '#D8C3A5');
});
$('ul li').eq(2).on('click', function() {
    $(this).css('background-color', '#8E8D8A');
});
$('ul li').eq(3).on('click', function() {
    $(this).css('background-color', '#E98074');
});
$('ul li').eq(4).on('click', function() {
    $(this).css('background-color', '#E85A4F');
});

$('ul li').click(function(){
    var $this = $(this);
    $this.toggleClass('ul li');
    if($this.hasClass('ul li')){
        $this.text('Clicked!');
    }
});

$(document).ready(function(){
    $('button').click(function(){
        $('nav').slideToggle();
    });
});
