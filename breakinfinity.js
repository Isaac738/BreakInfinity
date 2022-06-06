function add(a, b) {
  if(a > b) {
    return a + Math.log(Math.pow(10, b - a) + 1);
  } else {
    return b + Math.log(Math.pow(10, a - b) + 1);
  }
}

function subtract(a, b) {
  if(a > b) {
    return a + Math.log(-Math.pow(10, b - a) + 1);
  } else {
    return -1.798e308;
  }
}

function decimal(log, pl=3, shsci=6, shnorm=false) {
  if(log < shsci) {
    return Math.round(Math.pow(10, log + pl)) / Math.pow(10, pl);
  } else if(log < Math.pow(10, shsci) {
    return Math.round(Math.pow(10, log - Math.floor(log) + pl)) / Math.pow(10, pl) + "e" + Math.floor();
  } else if(shnorm) {
    
  } else {
  
  }
}
