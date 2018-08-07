var w = window.innerWidth;
var h = window.innerHeight;

//$(document).ready(initVisual);

function initVisual()
{
	$("button").click(function()
		{
			$("div").animate({left: '250px'});
 		});
}