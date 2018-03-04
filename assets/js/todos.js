// ul on click li - means on LI click inside of whole ul, if it was only $("ul"), won't toggle on new li's
$("ul").on("click", "li", function(){
	// toggles complete class which line-through or not
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
 $(this).parent().fadeOut(500,function(){
 $(this).remove();
 })
 event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
 var text = $(this).val();
 if(event.which === 13){
 if(text ===""){
  } else{
 $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+text+"</li>")
 text=$(this).val("");
 }
}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});
