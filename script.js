console.log("test");
var tour = 0;
var joueur1 = prompt("Nom du joueur 1 :")
var joueur2 = prompt("Nom du joueur 2 :")

$(".case").click(function(){
	if ($(this).html() === "") {		
		if (tour%2 === 0) {
			($(this).html("<img src='javascript.png' alt='js'img-responsive center-block>"));
		} else{
			($(this).html("<img src='semantic.png' alt='js'img-responsive center-block>"));
		}tour++;

	}
});

$(".joueurs").html(joueur1 + " VS " + joueur2);

$(".clear").click(function(){
	$(".case").html("");
	tour = 0;
});
