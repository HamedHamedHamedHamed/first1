/*global $,alert,console */


 jQuery(document).ready(function ($){
/*$(function(){*/
'use strict';

/*
$("body").niceScroll({
cursorcolor:"aquamarine",
cursorwidth:"16px"
});
*/
//Links Add Ctive Class

$('.links-list li a').click(function(){
$(this).parent().addClass('active').siblings().removeClass('active');
})
// show activites bar
$('.header .navbar .menu #activites').click(function(){
if($('.header .navbar .menu #activites ul').hasClass('off')){//start if
$('.header .navbar .menu #activites ul').fadeIn(100,function(){
$('.header .navbar .menu #activites ul').removeClass('off');

});//end fade in
}//end if

else{//start else
$('.header .navbar .menu #activites ul').fadeOut(100,function(){
$('.header .navbar .menu #activites ul').addClass('off');
});//end fade out
}//end else
});//show activation bar


// show giffo toon
$('.header .intro .giffo').click(function(){
if($('.header .intro .gifs').hasClass('off')){//start if
$('.header .intro .gifs').fadeIn(100,function(){
$('.header .intro .gifs').removeClass('off');

});//end fade in
}//end if

else{//start else
$('.header .intro .gifs').fadeOut(100,function(){
$('.header .intro .gifs').addClass('off');
});//end fade out
}//end else
});//show giffo toon



// show menue bar
$('.header .navbar .links i').click(function(){
if($('.header .navbar .links .menu').hasClass('off')){//start if
$('.header .navbar .links .menu').fadeIn(100,function(){
$('.header .navbar .links .menu').removeClass('off');
});//end fade in
}//end if

else{//start else
$('.header .navbar .links .menu').fadeOut(100,function(){
$('.header .navbar .links .menu').addClass('off');
});//end fade out
}//end else
});//show menu bar


//triger niceScroll plugin
$("html").niceScroll({
cursorcolor:'#1abc9c',
cursorwidth:'10px'
});//end niceScroll


//change header height
var myHeader=$('.header');
myHeader.height($(window).height());
var myHeader2=$('.newsheader');
myHeader2.height('400px');

// open news sliders

$('.news-container .news-info  li #link1').click(function(){
$('.news-container .news-gal #gall1').css({
      'display' : 'block',
   'border' : '5px solid light-blue'
   
   
}).siblings().css({
      'display' : 'none'
  
});
$('.about-news .container .news-articles .article1').css({
      'display' : 'block',
   'border' : '5px solid light-blue'
   
   
}).siblings().css({
      'display' : 'none'
  
});
$('html,body').animate({
scrollTop: $('#'+$(this).data('valuewawa')).offset().top
	
},4000);

});

$('.news-container .news-info  li #link2').click(function(){
$('.news-container .news-gal #gall2').css({
      'display' : 'block',
   'border' : '5px solid blue'
}).siblings().css({
      'display' : 'none'
  
});
$('.about-news .container .news-articles .article1').css({
      'display' : 'block',
   'border' : '5px solid light-blue'
   
   
}).siblings().css({
      'display' : 'none'
  
});
$('html,body').animate({
scrollTop: $('#'+$(this).data('valuewawa')).offset().top
	
},4000);
});

$('.news-container .news-info  li #link3').click(function(){
$('.news-container .news-gal #gall3').css({
      'display' : 'block',
   'border' : '8px solid blue'
}).siblings().css({
      'display' : 'none'
  
});
$('.about-news .container .news-articles .article1').css({
      'display' : 'block',
   'border' : '5px solid light-blue'
   
   
}).siblings().css({
      'display' : 'none'
  
});
$('html,body').animate({
scrollTop: $('#'+$(this).data('valuewawa')).offset().top
	
},4000);

});

// smooth scroll to services

$('.links-list li a').click(function(){
$('html,body').animate({
scrollTop: $('#'+$(this).data('valuewawa')).offset().top
	
},4000);
console.log($(this).data('cool'));
});

//scroll to testimonial
$('.header .buttons .testimo').click(function(){
$('html,body').animate({

scrollTop:$('.testim').offset().top
},4000);
});
//scroll to ourwork
$('.header .buttons .ourworko').click(function(){
$('html,body').animate({

scrollTop:$('.ourwork').offset().top
},4000);
});
//scroll to features
$('.header .arrow i').click(function(){
$('html,body').animate({

scrollTop:$('.navbar2').offset().top
},4000);
});
// operations smooth scroll 

$('.links-list li a').click(function(){
$('html,body').animate({
scrollTop: $('#'+$(this).data('valuewawa')).offset().top
	
},4000);
console.log($(this).data('cool'));
});
// ourwork showmore
$('.show-more').click(function() {
$('.our-work .hidden').fadeIn();
$('.show-less').fadeIn();
$(this).fadeOut();

});//showmore


// ourwork showless
$('.show-less').click(function() {
$('.our-work .hidden').fadeOut();
$('.show-more').fadeIn();
});//showless

// ourwork enlarge another way
/*
$('.our-work .items-box .item  .over').click(function() {
$(this).parent().css({
      'width' : '700px',
   'height' : '410px'
});


});

 end ourwork enlarge another way */

 $('.our-work .items-box .item  .over').click(function() {
if($(this).parent().hasClass('normal')){//start if
console.log($(window).width());

$(this).parent().css({
      'width' : '700px',
   'height' : '410px',
   'float':'left'
}).removeClass('normal');


/*
$(this).parent().addClass('enlarge');
$(this).parent().removeClass('normal');
*/
}//end if

else{//start else

$(this).parent().css({
      'width' : '28%',

   'height' : '255px'
}).addClass('normal');


/*
$(this).parent().addClass('normal');
$(this).parent().removeClass('enlarge');
*/
}//end else
});


//check testimonials
var leftArrow= $('.testim .fa-chevron-left'),
 rightArrow= $('.testim .fa-chevron-right');
function checkClients() {
/* old way
if($('.client:first').hasClass('active')){
leftArrow.fadeOut();
}else{
leftArrow.fadeIn();
}
*/
/*new way*/

$('.client:first').hasClass('active') ? leftArrow.fadeOut(): leftArrow.fadeIn();
$('.client:last').hasClass('active') ? rightArrow.fadeOut(): rightArrow.fadeIn();
}
checkClients();

$('.testim i').click(function() {
if($(this).hasClass('fa-chevron-right')){
$('.testim .active').fadeOut(400,function(){
$(this).removeClass('active').next('.client').addClass('active').fadeIn();
checkClients();
});//active
}//if 
else {
$('.testim .active').fadeOut(400,function(){
$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
checkClients();
});//active
}
});//click





});//the first global function
