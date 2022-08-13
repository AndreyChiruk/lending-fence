$(document).ready (function(){
  $("#inputTel").mask("+7(999) 999-9999");               
 $("form").submit(function(event){
if ($("#inputTel").val() ==""){
  event.preventDefault();
    alert("Введите телефон");
}
 });   
});              


  
