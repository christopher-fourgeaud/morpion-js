
//====== Définition des variables ============//
var tour = 0;
var position =[];
// var joueur1 = prompt("Nom du joueur 1 :");
// var joueur2 = prompt("Nom du joueur 2 :");

//== Click function pour afficher les images===//
$(".case").click(function(){
	if ($(this).html() === "") {
		if (tour%2 === 0) {
			($(this).html("<img src='javascript.png' alt='js'img-responsive center-block>"));
		} else{
			($(this).html("<img src='semantic.png' alt='js'img-responsive center-block>"));
		}tour++;
		position.push($(this).data("col"));
		console.log(position)
	}
	
});


//============= Affiche le nom des joueurs======//
// $(".joueurs").html(joueur1 + " VS " + joueur2);

//====================== Bouton reset ===========//
$(".clear").click(function(){
	$(".case").html("");
	tour = 0;
});

//====================== TEST ====================//
