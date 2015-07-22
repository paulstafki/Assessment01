var clickCounter = 0;
function clickCounterFunction (){
	
		
		$(".secondDiv").children().remove();
		$(".secondDiv").append('<button class="redButton">Change Color</button>');
		$(".secondDiv").append('<button class="">Remove</button>');
		$(".secondDiv").append('<p>Here are the number of clicks: ' + clickCounter + '</p>');
		
}



$(document).ready(function(){
		
	
	$("body").on('click', '.clickMe', function(){
		clickCounter++;
		$(".originalDiv").children().remove();
		
		$(".originalDiv").append('<div class="secondDiv" data-button-toggle="1"</div>');
		clickCounterFunction();
		console.log("click clock");	
	});//end of first click
	$("body").on('click', '.redButton', function(){
		console.log("changeColorButtonClicked");
		$(".secondDiv").css('background-color', '')
		$(".secondDiv").css('background-color', 008000);
		$(".secondDiv")
		
	});//end of first click
});

//if
		//$(".secondDiv").css('data-button-toggle="2"');