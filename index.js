function theBeatlesPlay(musicians, instruments) {
  let temp = [];
  for (let mcount = 0; mcount < musicians.length; mcount++) {
          temp[mcount]= musicians[mcount] + " plays " + instruments[mcount]
  }

  return temp;
}
