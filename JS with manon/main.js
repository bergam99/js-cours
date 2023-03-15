console.log('Hello world');
console.log(42);
console.log(4 + 4);
console.log(1, 2, 3);
console.log([1,2,3]);
console.log(1, 2, 'trois');
console.log(true);
console.log(1, "1");
// "1"은 문자열
console.log('4' + '4') 
// 44


const firstName = "Manon";
let age = 23;
console.log('1', age);

age = 28;
console.log('2', age);

// 숫자로 변화, 순서를 체크.

firstName="mimi"
// constatnt 를 바꿀 수 없음.





const nbOfApples = 12;
const nbOfBanana = 4;

const total = nbOfApples + nbOfBanana;
console.log('nbOfApples', nbOfApples);
// nbOfApples 12
console.log('nbOfBanana', nbOfBanana);
// nbOfBanana 4
console.log('total', total)
// total 16

console.log("un" + "deux");
// undeux
console.log("4" + "4");
// 44

function getNumberOfFruits() {
    const total = nbOfApples + nbOfBanana;
    console.log('total', total)
}
// fonction 은 부르지 않으면 아무것도 출력 안함.

const getNumberOfFruits = () => {
    const total = nbOfApples + nbOfBanana;
    console.log('total', total)
}

// cette syntax apprendre par ceuor..

getNumberOfFruits(); 
// total 16




// ME//
let a;
let b;
let total = a + b;

const addNumber = () => {
    let a = 4;
    let b = 8;
    const total = a + b;
    console.log('total', total);
}

// function addNumber() {
//     let total = a + b ;
//     console.log('total', total);
// }

addNumber();

// Correction1
const addNumber2 = () => {
    let a = 109;
    let b = 109;
    const total = a + b;
    console.log('total', total);
}

const calcul =  () => {
    console.log(4+4);
}

const calcul2 = () => {
    console.log(109+109);
}
calcul();
calcul2();
// CORRECTION2
let monVoisin = 'jerome';
const getMonVoisin = () => {
    console.log('Bienvenu '+ monVoisin + ' dans la classe');
    // 3 elements c'est mieux. + 보다 , 이 더 효율적.
}
getMonVoisin();

let monVoisinGauche = 'Liliana';
const getMonVoisinGauche = () => {
    console.log(`Bienvenu ${monVoisinGauche} dans la classe`);
    // 3 elements c'est mieux. , 보다 + 이 더 효율적.
}
getMonVoisinGauche();


// `` 아무거나 콘솔에 집어넣게 함.backtic
// paratetre = fat arrow 안에 (). () 안은 argument.


// PARAMETER
// EXERCICES1 
// convertir meter feet
const meterToFeet = (meter) => {
    const feet = 3.28;
    const result = meter * feet;
    console.log(`${meter} metre est egal a ${result} pieds`)
}
meterToFeet(20);
// 미터값을 받아서 곱하기

// EXERCICES 1-2
const convertToMeter = (feet) => {
    const meter = 0.3048
    let result = feet * meter;
    console.log(`${feet} pieds vaut ${result} mètres.`)
}
convertToMeter(3);
// 바뀌지 않는 값은 argument par default 에 넣지 않는다.

// EXERCICES2

const mot = (word) => {
    console.log(`Le mot ${word} contient ${word.length} lettres. `)
}
mot("lengthofword");



// method integré


// CONDITION IF, ELSE IF
// POSSIBILITE 1
const isMorning = false;
// false 일 경우 bjr 출력 안됨.
const sayHello = (morning) => {
    if(morning){
        console.log('Bjr!')

    }else{    
        console.log('Bsr')
    }

    isMorning ? console.log('Bjr') :console.log('Bsr')
    // condition rempli, pas remplis
} 

sayHello(isMorning);
// false일 경우 bsr



// Si j'ai faim je mange, sinon je code.

let isHungry = false;
isHungry ? console.log('Mange!') : console.log('Code!');

const shouldICodeor = () => {
    isHungry ? console.log
}


// ><
let salary = 3000;
if(salary === 3000) {
    console.log("Change d'entreprise");
}else {
    console.log("Tu peux rester");
}


EXERCICE


const course = (score) => {
    if (score === 1) {
        console.log("Tu eas le medaille d'or");
    } else if (score === 2 ){
        console.log("Tu eas le medaille d'argent");
    }else if (score === 3 ){
        console.log("Tu eas le medaille de bronze");
    } else {
        console.log("Tu eas le medaille de chocolat");
    }
}
course(1);
course(2);

// 
let jeanRank = 1;
let jeanneRank =2;
const getReward = (rank) => {
    if(rank === 1 ){
        console.log('Or');
    }else if(rank === 2){
        console.log('Argent');
    }else if (rank ===3){
        console.log('Bronze');
    }else{
        console.log('choco');
    }
}
getReward(jeanRank);
getReward(jeanneRank);

const week = ['L', 'M', 'M', 'J', 'V'];
console.log(week[2]);
week[2]= "wow";
console.log(week[2]);
// const 이지만 안에 요소를 바꾸니까 괜찮


