//creo array cognomi
var archivioCognomi = ["Mantovani" , "Franceschini" , "Caselli"]
console.log("array iniziale : " + archivioCognomi);
//chiedo all'utente il congome
var nomeUtente = prompt("Insersci il tuo cognome");
console.log("nome utente:  " + nomeUtente);
//aggiungo il congome alla lista di cognomi
archivioCognomi.push(nomeUtente);
console.log("stato array dopo push: " + archivioCognomi);
//ordino alfabeticamente
var archivioCognomiOrdinati = archivioCognomi.sort();
console.log("stato array dopo ordinamento: " + archivioCognomiOrdinati);
//scrivo la posizione dove si trova il cognome del utente
