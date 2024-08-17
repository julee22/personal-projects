$(document).ready(function(){

  $("button").click(function(){
  	$(this).next().toggle("slow");	
  });

  $("a.week").click(function() {
  	$(".week").removeClass("active");
  	$(this).addClass("active");
  });
});
