$(document).ready(function(){
 $("#notCaps form").submit(function(event){
   var caps = $("#input1").val();
   $("h1").text(caps.toUpperCase());

   event.preventDefault();
 });
});
