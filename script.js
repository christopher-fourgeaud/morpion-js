console.log("test");
var tour = 0;

$(".case").click(function(){

	if (tour%2 === 0) {
		($(this).html("<img src='javascript.png' alt='js'>"));
	} else{
		($(this).html("<img src='semantic.png' alt='js'>"));
	}tour++;
	

});



var turn