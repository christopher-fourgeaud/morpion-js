
//====== Définition des variables ============//
var tour = 0;
var joueur1 = 1;
var joueur2 = 2;
var position =["0","0","0","0","0","0","0","0","0"];
var player1;
var player2;
var data;
var nbParties;


//======== Affichage au chargement de la page des paramètres des parties ====//
$("#newGame").modal("toggle");

//====================== Bouton Nouvelle partie ==//
$("#nouvellePartie").click(function(){
	$("#newGame").modal("toggle");
})

//========= Bouton valider du menu nouvelle partie ====//
$("#parametres").click(function(){
	player1 = $(".player1").val();
	player2 = $(".player2").val();
	nbParties = $(".joueur1").val();
	$(".joueurs").html(player1 + " VS " + player2);
	reset();
});

//======Fonction pour reset le tableau =========//
function reset() {
	tour = 0;
	$(".case").html("");
	position = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
}

//======Fonction pour la condition de vicctoire=//
function condition(arg1, arg2) {	
	if(position[0] === arg1 && position[1] === arg1 && position[2] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	}
	if(position[3] === arg1 && position[4] === arg1 && position[5] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	}
	if(position[6] === arg1 && position[7] === arg1 && position[8] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	}
	if(position[0] === arg1 && position[3] === arg1 && position[6] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	}
	if(position[1] === arg1 && position[4] === arg1 && position[7] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	}
	if(position[2] === arg1 && position[5] === arg1 && position[8] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	}
	if(position[0] === arg1 && position[4] === arg1 && position[8] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	}
	if(position[2] === arg1 && position[4] === arg1 && position[6] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	}
}
//== Click function pour afficher les images + Alerte match nul si + de 9 tours ===//
$(".case").click(function(){
	data = ($(this).data("col")) - 1;
	if ($(this).html() === "") {
		if (tour%2 === 0) {
			($(this).html("<img src='javascript.png' alt='js'>"));
			position[data] = joueur1;
			condition(joueur1, player1);
		} else{
			($(this).html("<img src='semantic.png' alt='semantic'>"));
			position[data] = joueur2;
			condition(joueur2, player2);
		}tour++;
	}
	if (tour === 9) {
		alert("MATCH NUL");
		reset();
	}
});

//====================== Bouton reset ===========//
$(".clear").click(function(){
	$(".case").html("");
	tour = 0;
	position =["0","0","0","0","0","0","0","0","0"]
});

//====================== TEST ====================//
