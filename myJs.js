var w = window.innerWidth;
var h = window.innerHeight;

$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({left: '250px'});
    });
});

function btn()
{
    document.getElementById("a1").innerHTML = "Paragraph changed!";
    
}
    
