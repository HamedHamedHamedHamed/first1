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
});//show menu bar

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
myHeader.height($(window).height())

//end niceScroll


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

scrollTop:$('.features').offset().top
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
