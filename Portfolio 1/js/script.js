$(function(){

 $("#portfolio img").click(function(){
 	var s = $(this).attr("src");
 	$("#frame img").attr("src", s);
 	$("#frame").fadeIn();
 	$("#overlay").fadeIn();

 });

 $("#overlay").click(function(){
 	$(this).fadeOut();
 	$("#frame").fadeOut();
 });

});