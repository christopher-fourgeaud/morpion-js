
//====== Définition des variables ============//
var tour = 0;
var joueur1 = 1;
var joueur2 = 2;
var position =["0","0","0","0","0","0","0","0","0"];
// var joueur1 = prompt("Nom du joueur 1 :");
// var joueur2 = prompt("Nom du joueur 2 :");
var data;

//======Fonction pour la condition de vicctoire=//
function condition(arg1) {	
	if(position[0] === arg1 && position[1] === arg1 && position[2] === arg1) {
		alert("Joueur" +" "+ arg1+ " " + "gagne!");
	}
	if(position[3] === arg1 && position[4] === arg1 && position[5] === arg1) {
		alert("Joueur" +" "+ arg1+ " " + "gagne!");
	}
	if(position[6] === arg1 && position[7] === arg1 && position[8] === arg1) {
		alert("Joueur" +" "+ arg1+ " " + "gagne!");
	}
	if(position[0] === arg1 && position[3] === arg1 && position[6] === arg1) {
		alert("Joueur" +" "+ arg1+ " " + "gagne!");
	}
	if(position[1] === arg1 && position[4] === arg1 && position[7] === arg1) {
		alert("Joueur" +" "+ arg1+ " " + "gagne!");
	}
	if(position[2] === arg1 && position[5] === arg1 && position[8] === arg1) {
		alert("Joueur" +" "+ arg1+ " " + "gagne!");
	}
	if(position[0] === arg1 && position[4] === arg1 && position[8] === arg1) {
		alert("Joueur" +" "+ arg1+ " " + "gagne!");
	}
	if(position[2] === arg1 && position[4] === arg1 && position[6] === arg1) {
		alert("Joueur" +" "+ arg1+ " " + "gagne!");
	}

}

//== Click function pour afficher les images===//
$(".case").click(function(){
	data = ($(this).data("col")) - 1;
	if ($(this).html() === "") {
		if (tour%2 === 0) {
			($(this).html("<img src='javascript.png' alt='js'>"));
			position[data] = joueur1;
		} else{
			($(this).html("<img src='semantic.png' alt='semantic'>"));
			position[data] = joueur2;
		}tour++;
		
	}
	condition(joueur1);
	condition(joueur2);
		if (tour === 9) {
		alert("MATCH NUL");
	}

});


//============= Affiche le nom des joueurs======//
// $(".joueurs").html(joueur1 + " VS " + joueur2);

//====================== Bouton reset ===========//
$(".clear").click(function(){
	$(".case").html("");
	tour = 0;
	position =["0","0","0","0","0","0","0","0","0"]
});

//====================== TEST ====================//
