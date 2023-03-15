
let nb = parseInt(prompt("entrer un nombre entier naturel"));

let cpt = 0;

for(let i = 0; i <= nb ;i++) {
    if( nb % i == 0 ) {
        cpt++;
    } 
}

if(cpt == 2) {
    console.log(nb + " est un nombre premier");
} else {
    console.log(nb + " n'est pas un nombre premier");
}
