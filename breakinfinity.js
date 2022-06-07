//The function below is used to make the log to decimal be nicer
function mod(a, b) {
  return a - Math.floor(a / b) * b
}

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
    return Math.round(Math.pow(10, mod(log, 1) + pl)) / Math.pow(10, pl) + "e" + Math.floor(log);
  } else if(shnorm) {
    return Math.round(Math.pow(10, mod(log, 1) + pl)) / Math.pow(10, pl) + "e" + Math.round(Math.floor(log) * Math.pow(pl) / Math.pow(Math.floor(Math.log(log)))) / Math.pow(10, pl) + "e" + Math.floor(Math.log(log));
  } else {
    return "e" + Math.round(Math.floor(log) * Math.pow(pl) / Math.pow(Math.floor(Math.log(log)))) / Math.pow(10, pl) + "e" + Math.floor(Math.log(log));
  }
}
