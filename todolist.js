
$("ul").on("click", "li", function(){
        $(this).toggleClass("completed");
    });
    // //if li is blue
    //     if($(this).css("color") ==="rgb(0, 0, 255)"){
    //         //turn it black
    //         $(this).css({
    //            color: "black",
    //            textDecoration: "none"
    //        });
    //    }
    //     else{ 
    //         //turn it blue
    //         $(this).css({
    //            color: "blue",
    //            textDecoration: "line-through"
    // });  

    //click on X to delete to do item
$("ul").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })  
});

//ading a new item to the list
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        //adding to a var the text from the input
         var inputValue = $(this).val();
         $(this).val("");
         // adding the text to the list
         $("ul").append("<li>"+"<span>"+"<i class='fas fa-trash-alt'></i> "+" </span> "+ inputValue + " </li>")
        
      }    
 });

 $(".fa-pencil-alt").click(function(){
     if ("input[type='text']"){
         $("input[type='text']").fadeToggle(500);
     }
 });


 