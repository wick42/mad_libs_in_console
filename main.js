alert("I'm working with JavaScript");

var names = ["Jack", "Jill"];
var nouns = ["hill","pail", "water", "crown"];
var verbs = ["fetch", "fell", "broke", "tumbling"];


function madLibs() {
	
	document.write("<h4>" + names[0] + " and " + names[1] + " went up the " + nouns[0] + " to " + verbs[0] + " a " + nouns[1] + " of " + nouns[2] + ". " + names[0] + " " + verbs[1] + " down and " + verbs[2] + " his " + nouns[3] + ", and Jill came " + verbs[3] + " after.</h4>");

}

madLibs();