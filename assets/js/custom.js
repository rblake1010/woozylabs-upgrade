/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
 

$(document).ready(function(){ 

TweenLite.to('.circle', 1, {drawSVG:0, delay:1})


$('.phones').addClass('animated fadeInUp');
$('.phones').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', flipIn);

$('.woozy').addClass('animated fadeInDown');

function flipIn(){
  $('.listeria, .recall').css('visibility', 'visible')
  $('.listeria, .recall').addClass('animated flipInY');
}


 // Device
  function responsive(){ 			
    var winWidth = $(window).width();

    if(winWidth >= 1024) { //tablet
			$('body').removeClass('iphone'); 
			$('body').removeClass('ipad');
      $('body').removeClass('test');   		
    }
    else if(winWidth <= 568){  //mobile
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

//jQuery(".what_section h2").fitText(1.2, { minFontSize: '18px', maxFontSize: '48px' });
//  jQuery("header h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '78px' });

 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $('#listeria').lazylinepainter({
    "svgData": pathObj,
    "strokeWidth": 1,
    "strokeColor": "#5f9ea0",
    "strokeOpacity": 1,
    "drawSequential": false,
    "delay": 3000,
    "speedMultiplier":1
});

 $('#listeria').lazylinepainter('paint');

 TweenLite.to('.circle', 1, {drawSVG:0, delay:1})
	
});

 


