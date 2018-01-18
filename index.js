function theBeatlesPlay(musicians, instruments) {
  let temp = [];
  for (let mcount = 0; mcount < musicians.length; mcount++) {
          temp[mcount]= musicians[mcount] + " plays " + instruments[mcount]
  }

  return temp;
}

function johnLennonFacts(arrayFacts) {
let i=0;
let newA = [];

while (i < arrayFacts.length) {
    console.log(arrayFacts[i]);
    newA[i] = arrayFacts[i] + "!!!";
    console.log(newA[i]);
    i++;
  }
return newA
  
}
