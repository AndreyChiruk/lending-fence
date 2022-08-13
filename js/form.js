$(document).ready (function(){
    $("form").submit.function(event){
      event.preventDefault();
      $_ajax({
        type: "POST",
        url: "php/telegram.php",
        data: $(this).serialize()
      }).done(function(){
        $(this).find("input").val("");
        alert("Успешно отправлено!");
        $("form").trigger("reset");
      });
      return false;
    
 }});
