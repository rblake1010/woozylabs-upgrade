/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
 

$(document).ready(function(){ 

  $( window ).scroll(function() {

  var scrollPosition = $(document).scrollTop();
  
   if(scrollPosition <=0){
    if($('body').hasClass('ipad') || $('body').hasClass('ipone')){
      
    }else{
      //$('.down').show();
    }
   }

 });

 $('.down').click(function() {
 $("html, body").animate({ scrollTop: $('.recall_section').offset().top }, 1000); 
 $(this).hide();   
});

 // Device
  function responsive(){ 			
    var winWidth = $(window).width();

    if(winWidth >= 1024) { //tablet
			$('body').removeClass('iphone'); 
			$('body').removeClass('ipad');
      $('body').removeClass('test');   		
    }
    else if(winWidth <= 300){  //mobile
      $('body').addClass('iphone'); 
			$('body').removeClass('ipad');   
    }
		else if(winWidth >= 790 && winWidth <= 1024){  //mobile
      $('body').addClass('ipad');   
			$('body').removeClass('iphone');
      $('body').removeClass('test');  		
    }		
    else{  //desktop
		/*$('body').removeClass('iphone');*/
    }
  }

  responsive();

	$(window).resize(function(){
		responsive();  
	});

    $('.mobileMenu').click( function(){
    $('.navigationwrap').toggleClass('activeNav');      
  });


 // Social Icons
$('.social img').mouseover(function() {
var currentHover = $(this).attr('class');
var newImage = currentHover + '-hover.png';
$(this).attr('src', '/assets/img/' + newImage )
  
  }).mouseleave(function() {
  var leavingHover = $(this).attr('class');
  $(this).attr('src', '/assets/img/' + leavingHover + '.png');
});



});

 


