function dice () {
  let dice = [];
  for(let i=0; i<5; i++) {
    let n = Math.floor(Math.random() * 6 +1);
    dice.push(n);
  }
  console.log (dice);
  return dice;
}


function getValueInNumver(){
    obj = {1:0,2:0,3:0,4:0,5:0,6:0};
    let t = dice();
    for(let i = 0; i<t.length; i++) {
      console.log(t[i])
      for (const key in obj) {
        if(t[i]==key){
          obj[key]++;
        }
      } 
    }
    console.log(obj)
} 
getValueInNumver()
