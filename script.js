// Mes variables
var nomJoueur1 = "";
var nomJoueur2 = "";
var nbParties = 1;
var o = "<img class='o' src='o.png' alt='o'>";
var x = "<img class='x' src='x.png' alt='x'>";
var compteur = 0;
var scoreJoueur1 = 0;
var scoreJoueur2 = 0;
var joueur1 = 1;
var joueur2 = 2;
var data;
var position = [0,0,0,0,0,0,0,0,0];

// Verification de victoire
function condition(arg1, arg2, arg3){
	if (position[0] === arg1 && position[1] === arg1 && position[2] === arg1
	||  position[3] === arg1 && position[4] === arg1 && position[5] === arg1
	||  position[6] === arg1 && position[7] === arg1 && position[8] === arg1
	||  position[0] === arg1 && position[3] === arg1 && position[6] === arg1
	||  position[1] === arg1 && position[4] === arg1 && position[7] === arg1
	||  position[2] === arg1 && position[5] === arg1 && position[8] === arg1
	||  position[0] === arg1 && position[4] === arg1 && position[8] === arg1
	||  position[2] === arg1 && position[4] === arg1 && position[6] === arg1) 
	{	  
	alert("Bravo : " + arg2 + " gagne la partie");
	arg3++;
	reset();
	}
	return arg3;	
}

// Fonction reset
function reset(){
	compteur = 0;
	position = [0,0,0,0,0,0,0,0,0]
	$(".case").html("");
}

// Ma fonction clique
$(".case").click(function(){
	data = (($(this).data("col")));
	if ($(this).html() === "" ) {
		if (compteur%2 === 0) {
			($(this)).html(o);
			compteur++;
			position[data] = joueur1;			
			scoreJoueur1 = condition(joueur1, nomJoueur1, scoreJoueur1);
			
		} else {
			($(this)).html(x);
			compteur++;
			position[data] = joueur2;
			scoreJoueur2 = condition(joueur2, nomJoueur2, scoreJoueur2);

		}
		if (compteur === 9) {
			alert("MATCH NUL");
			reset();
		}
		
	}// Affichage des scores
	$(".scoreJoueur1").html(scoreJoueur1)
	$(".scoreJoueur2").html(scoreJoueur2)
})

// Bouton reset
$(".reset").click(function(){
	$(".case").html("");
	scoreJoueur1 = 0;
	scoreJoueur2 = 0;
	$(".scoreJoueur1").html(scoreJoueur1)
	$(".scoreJoueur2").html(scoreJoueur2)
	reset();
})

// Affichage au chargement de la page des paramètres des parties ====//
$("#newGame").modal("toggle");

// Bouton Nouvelle partie
$("#nouvellePartie").click(function(){
	$("#newGame").modal("toggle");
})

// Bouton valider du menu nouvelle partie
$("#parametres").click(function(){
	nomJoueur1 = $(".player1").val();
	nomJoueur2 = $(".player2").val();
	nbParties = $(".joueur1").val();
	$(".nomJoueur1").html(nomJoueur1);
	$(".nomJoueur2").html(nomJoueur2);
	scoreJoueur1 = 0;
	scoreJoueur2 = 0;
	$(".scoreJoueur1").html(scoreJoueur1)
	$(".scoreJoueur2").html(scoreJoueur2)
	reset();
});























































































































































/*//====== Définition des variables ============//
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
*/