
let nom, age, salaireBrut, empruntDemande, salaireNet, remboursementSurUnMois, taux;

nom = prompt("nom");
age = parseInt(prompt("age"));
salaireBrut = parseFloat(prompt("salaire brut"));
empruntDemande = parseInt(prompt("emprunt demandé"));

salaireNet = salaireBrut - (salaireBrut * 0.23);

if (age >= 18 && age <= 30) {
    taux = 0.15;
    console.log(taux);
} else if ( age > 30 && age <= 50) {
    taux = 0.20;
    console.log(taux);
} else if ( age > 50 && age <= 70 ) {
    taux = 0.10;
    console.log(taux);
}

if ( !(age < 18 || age > 70) ) {
    console.log(taux * salaireNet)
    if(empruntDemande < (taux * salaireNet)) {
        remboursementSurUnMois = (empruntDemande + (empruntDemande * 0.15)) / 12;
        console.log("remboursement de " + remboursementSurUnMois + " par mois");
    } else {
        console.log("vous ne pouvez pas emprunter");
    }
} else {
    console.log("vous ne pouvez pas emprunter");
}






