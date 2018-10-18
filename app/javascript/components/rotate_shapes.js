let rotated = false;
let noseColor = false;
let showText = false;

setInterval(function(){
  let earRight = document.querySelector('.ear-right');
  deg = rotated ? 0 : 90;
    // earRight.style.webkitTransform = 'rotate('+deg+'deg)';
    // earRight.style.mozTransform    = 'rotate('+deg+'deg)';
    // earRight.style.msTransform     = 'rotate('+deg+'deg)';
    // earRight.style.oTransform      = 'rotate('+deg+'deg)';
  earRight.style.transform          = 'rotate('+deg+'deg)';
  rotated = !rotated;
  // let nose = document.querySelector('.nose');
  // color = noseColor ? 'black' : 'red';
  // nose.style.backgroundColor = color;
  // noseColor = !noseColor;


 }, 5000);

setInterval(function(){
   let noseText = document.querySelector('.nose-text')
  show = showText ? '4' : '0';
  noseText.style.zIndex = show;
  showText = !showText;
}, 800);

// $('.ear-left').on('mouseenter',function(){
//     if (typeof $(this).data('origwidth')=='undefined') $(this).data('origwidth',$(this).width());
//     if (typeof $(this).data('origheight')=='undefined') $(this).data('origheight',$(this).height());
//     $(this).stop().animate({fontSize:'40px'});
//     $(this).css({'z-index': '1000', 'width': '50%', 'height': '50%'});
// }).on('mouseleave',function(){
//     $(this).stop().animate({width:$(this).data('origwidth'), height:$(this).data('origheight'), fontSize:'16px'})
//     setTimeout(function() {$(this).css('z-index', '0')}, 1000 )
// });
// let rotated = false;

$(function() {
  // Get page title
    var pageTitle = $("title").text();

  // Change page title on blur
  $(window).blur(function() {
    $("title").text("boop me...");
  });

  // Change page title back on focus
  $(window).focus(function() {
    $("title").text(pageTitle);
  });
});

if ($(window).width() > 600) {
  $('.ear-left').bind('mouseenter focus',function(){
  // deg = rotated ? 0 : 90;
    if (typeof $(this).data('origwidth')=='undefined') $(this).data('origwidth',$(this).width());
    if (typeof $(this).data('origheight')=='undefined') $(this).data('origheight',$(this).height());
    $(this).stop().animate({fontSize:'40px'});
    $(this).css({'z-index': '1000', 'opacity': '0'});
      $('.ear-left_text').css({ 'z-index': '2', 'opacity': '1' })
      $('.text-before-strike').addClass('strikethrough');
    setTimeout(function() {
      $('.strikethrough').css('color', 'pink')
      }, 1000 );
      $('.ear-right').css('opacity', '0')
  }).bind('mouseleave blur',function(){
    $(this).stop().animate({width:$(this).data('origwidth'), height:$(this).data('origheight'), fontSize:'16px'})
    $('.ear-left_text').css({'z-index': '0', 'opacity': '0'})
    $(this).css({'opacity': '1'})
    $('.ear-right').css('opacity', '1')
    setTimeout(function() {$(this).css({'z-index': '1'})}, 1000 )
    $('.strikethrough').css('color', 'white')
    $('span').removeClass('strikethrough');
    rotated = !rotated;
  });

  $('.ear-right').bind('mouseenter focus click',function(){
  // deg = rotated ? 0 : 90;
    if (typeof $(this).data('origwidth')=='undefined') $(this).data('origwidth',$(this).width());
    if (typeof $(this).data('origheight')=='undefined') $(this).data('origheight',$(this).height());
    $(this).stop().animate({fontSize:'40px'});
    $(this).css({'z-index': '1000', 'opacity': '0'});
      $('.ear-right_text').css({ 'z-index': '2', 'opacity': '1' })
      $('.text-before-strike').addClass('strikethrough');
    setTimeout(function() {
      $('.strikethrough').css('color', 'pink')
      }, 1000 );
      $('.ear-left').css('opacity', '0')
  }).bind('mouseleave blur',function(){
    $(this).stop().animate({width:$(this).data('origwidth'), height:$(this).data('origheight'), fontSize:'16px'})
    $('.ear-right_text').css({'z-index': '0', 'opacity': '0'})
    $(this).css({'opacity': '1'})
    $('.ear-left').css('opacity', '1')
    setTimeout(function() {$(this).css({'z-index': '1'})}, 1000 )
    $('.strikethrough').css('color', 'white')
    $('span').removeClass('strikethrough');
    rotated = !rotated;
  });
};






// var $element = $("#example");
//   const elements = document.querySelectorAll($element);


    //
