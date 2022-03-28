/*global $,alert,console */


 jQuery(document).ready(function ($){
/*$(function(){*/
'use strict';
console.log($(window).width());
/*
$("body").niceScroll({
cursorcolor:"aquamarine",
cursorwidth:"16px"
});
*/
/*hse position*/


/*$('.hse-info').css('top','900px');*/

/*$('.hse-info').css('top',$(window).height()+$("#banner-wrapper").height()+50+"px");*/
/*was working*/

/*$('.aboutmeinfo1').css('top','70%');
$('.aboutmeinfo1').css('right','70%');*/
//change dimensions 
$('#banner-wrapper').width($(window).width())

//end dimensions
$('.hse-info').css('top','50%');
$('.hse-info2').css('top','50%');
$('#banner-wrapper').css('left',($('#banner-wrapper').width()-$('#banner-wrapper .inner').width())/2+"px");
/*$('#banner-wrapper .inner').css('margin-left',($(window).width()-$('#banner-wrapper').width())/8+"px");*/
/*$('#banner-wrapper').css('left',($(.header).width()-$('#banner-wrapper').width())/2+"px");*/
/*last code
$('.hse-info').css('top',$(window).height()+$("#banner-wrapper").height()+50+"px");
$('.hse-info2').css('top','50%');


*/
 
//Links Add Ctive Class

$('.links-list li a').click(function(){
$(this).parent().addClass('active').siblings().removeClass('active');
});
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
});//end avtivites  bar


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


//what is difference from custom.js

//change header height
//var myHeader=$('.header');
//myHeader.height($(window).height())

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
var leftArrow= $('.about-news .news-container .news-gal .testim .fa-chevron-left'),
 rightArrow= $('.about-news .news-container .news-gal .testim .fa-chevron-right');
function checkClients() {
/* old way
if($('.client:first').hasClass('active')){
leftArrow.fadeOut();
}else{
leftArrow.fadeIn();
}
*/
/*new way*/

$('.about-news .news-container .news-gal .testim .client:first').hasClass('active') ? leftArrow.fadeOut(): leftArrow.fadeIn();
$('.about-news .news-container .news-gal .testim .client:last').hasClass('active') ? rightArrow.fadeOut(): rightArrow.fadeIn();
}
checkClients();

$('.about-news .news-container .news-gal .testim i').click(function() {
if($(this).hasClass('fa-chevron-right')){
$('.about-news .news-container .news-gal .testim .active').fadeOut(400,function(){
$(this).removeClass('active').next('.about-news .news-container .news-gal .testim .client').addClass('active').fadeIn();
checkClients();
});//active

}//if 

else {
$('.about-news .news-container .news-gal .testim .active').fadeOut(400,function(){
$(this).removeClass('active').prev('.about-news .news-container .news-gal .testim .client').addClass('active').fadeIn();
checkClients();
});//active
}

});//click






});//the first global function
