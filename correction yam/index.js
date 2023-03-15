// correction YAM
let n;             // nombre de lancer de dés;
let yam;           // contient notre balise de résultat yam (html)
let carre;         // contient notre balise de résultat carré (html)
let brelan;        // contient notre balise de résultat brelan (html)
let resultFinal;   // résultat final sur toute la partie

// initialisation des variables;
function init() {
    resultFinal = {brelan : 0, carré : 0, yam : 0 };
    n = document.getElementById('n').value;
    brelan = document.getElementById('brelan');
    carre = document.getElementById('carré');
    yam = document.getElementById('yam');
}

// générer un dé
function generateDe() {
    let de;
    de = Math.round(Math.random() * (6 - 1) + 1);
    return de; // retourne un dé
    }

// générer un lancer (utilisation de la méthode qui génère un dé)
function unLancer() {
    let tab = [];
    for(let i = 0; i < 5; i++) {
        tab.push(generateDe()); // ici
    }
    console.log("lancer = " + tab);
    return tab; // retoune un tableau de lancer de dés
}


// calcule l'occurence pour chaque face des dés sur un lancer
function verifScoreUnLancer(unLancer) {
    let obj = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 };
    for(let i = 0; i < unLancer.length; i++) {
        for (let key in obj) {
            if(unLancer[i] == key) {
                obj[key]++;
            }
          }
    }
    return obj; // retourne l'occurence des faces de dés sur un lancer
}

// fonction qui incrémente de 1 notre objet résultat final
function result(obj) {
    for (const key in obj) {
        if(obj[key] == 3) {
            resultFinal["brelan"]++;
            console.log("brelan");
        }
        if(obj[key] == 4) {
            resultFinal["carré"]++;
            console.log("carré");
        }
        if(obj[key] == 5) {
            resultFinal["yam"]++;
            console.log("yam");
        }
    }
    return resultFinal; // retourne l'objet resultat final
}

// fonction d'insertion dans notre document html
function insertInDocument() {
    brelan.innerHTML = resultFinal["brelan"];
    carre.innerHTML = resultFinal["carré"];
    yam.innerHTML = resultFinal["yam"];
}
    
// fonction de démarrage de l'application
function start() {
    init();
    for(let i = 0; i < n; i++) {
        result(verifScoreUnLancer(unLancer()));
    }
    console.log(resultFinal);
    insertInDocument();
}