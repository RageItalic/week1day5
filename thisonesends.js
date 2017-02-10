function multiple (a,b){
  return a*b;
}

module.exports = {
  myFunc: function(a,b){
    console.log("Multiplied = " + multiple(a,b));
  }
}